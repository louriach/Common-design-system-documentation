"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Copy, Check } from "lucide-react";

interface ComponentDemoProps {
  code: string;
  children: React.ReactNode;
}

export function ComponentDemo({ code, children }: ComponentDemoProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="docs-demo space-y-4">
      <div className="docs-demo-preview">
        {children}
      </div>
      <div className="docs-demo-code-wrap">
        <div className="flex items-center justify-between docs-demo-label">
          <span>Code</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2 text-xs"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1 shrink-0" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1 shrink-0" />
                Copy
              </>
            )}
          </Button>
        </div>
        <pre className="docs-demo-pre">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}

ComponentDemo.displayName = "ComponentDemo";
