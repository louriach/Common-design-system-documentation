'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ComponentDemo } from "./ComponentDemo";
import { parseComponentCode, parseMultipleComponents, renderComponent, renderMultipleComponents } from "@/lib/componentMapper";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Load highlight.js styles on client side
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 scroll-m-20" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold mt-6 mb-3 scroll-m-20 border-b pb-2" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold mt-5 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => <p className="my-3 leading-7" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside my-3 space-y-1" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside my-3 space-y-1" {...props} />
          ),
          li: ({ node, ...props }) => <li className="ml-2" {...props} />,
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)(?::live)?/.exec(className || "");
            const language = match ? match[1] : "";
            const isLive = className?.includes(":live") || false;
            const codeString = String(children).replace(/\n$/, "");

            if (inline) {
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
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

            // Regular code block
            return (
              <code
                className={`${className} block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-3 text-sm`}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ node, children, ...props }: any) => {
            // Check if this pre contains a ComponentDemo (live demo)
            // ComponentDemo handles its own styling, so we don't wrap it in pre styling
            const child = React.Children.toArray(children)[0] as any;
            if (child?.type?.displayName === "ComponentDemo" || 
                (child?.props?.children?.type?.displayName === "ComponentDemo")) {
              return <>{children}</>;
            }
            // Regular code block - apply pre styling
            return (
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-3" {...props}>
                {children}
              </pre>
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-3"
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-3">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

