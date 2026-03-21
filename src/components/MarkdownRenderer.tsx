'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ComponentDemo } from "./ComponentDemo";
import { parseComponentCode, parseMultipleComponents, renderComponent, renderMultipleComponents, componentMap } from "@/lib/componentMapper";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="docs-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => <h1 {...props} />,
          h2: ({ node, ...props }) => <h2 {...props} />,
          h3: ({ node, ...props }) => <h3 {...props} />,
          p: ({ node, ...props }) => <p {...props} />,
          ul: ({ node, ...props }) => <ul {...props} />,
          ol: ({ node, ...props }) => <ol {...props} />,
          li: ({ node, ...props }) => <li {...props} />,
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)(?::live)?/.exec(className || "");
            const language = match ? match[1] : "";
            const isLive = className?.includes(":live") || false;
            const codeString = String(children).replace(/\n$/, "");

            if (inline) {
              return <code {...props}>{children}</code>;
            }

            // Handle live component demos - return ComponentDemo directly
            // It will be wrapped in <pre> by react-markdown, but ComponentDemo handles its own layout
            if (isLive && (language === "tsx" || language === "jsx")) {
              // First try to parse multiple components (for groups like Radio buttons)
              const multipleComponents = parseMultipleComponents(codeString);
              
              // If we found multiple components, render them as a group
              if (multipleComponents.length > 1) {
                try {
                  const renderedComponents = renderMultipleComponents(multipleComponents);
                  return (
                    <ComponentDemo code={codeString}>
                      {renderedComponents}
                    </ComponentDemo>
                  );
                } catch (error) {
                  console.error("Error rendering multiple components:", error);
                  // Fall through to single component parsing
                }
              }
              
              // If we found exactly one component (like Fieldset), render it directly
              if (multipleComponents.length === 1) {
                try {
                  const singleComponent = multipleComponents[0];
                  const renderedComponent = renderComponent(singleComponent);
                  return (
                    <ComponentDemo code={codeString}>
                      {renderedComponent}
                    </ComponentDemo>
                  );
                } catch (error) {
                  console.error("Error rendering single component:", error);
                  // Fall through to parseComponentCode
                }
              }
              
              // Otherwise, try single component parsing
              const parsed = parseComponentCode(codeString);
              if (parsed) {
                try {
                  const renderedComponent = renderComponent(parsed);
                  return (
                    <ComponentDemo code={codeString}>
                      {renderedComponent}
                    </ComponentDemo>
                  );
                } catch (error) {
                  console.error("Error rendering live component:", error);
                  // Fall through to regular code block
                }
              }
            }

            return <code className={className || ""} {...props}>{children}</code>;
          },
          pre: ({ node, children, ...props }: any) => {
            const child = React.Children.toArray(children)[0] as any;
            // If the code handler returned a ComponentDemo, it has a `code` prop — strip the <pre> wrapper
            if (child?.props?.code !== undefined) {
              return <>{children}</>;
            }
            return <pre {...props}>{children}</pre>;
          },
          blockquote: ({ node, ...props }) => <blockquote {...props} />,
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4 rounded border border-border">
              <table {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead {...props} />,
          th: ({ node, ...props }) => <th {...props} />,
          td: ({ node, ...props }) => <td {...props} />,
          a: ({ node, ...props }) => <a {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

