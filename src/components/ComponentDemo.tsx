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
    <div className="my-6 space-y-4">
      {/* Demo Preview */}
      <div className="relative rounded border border-border bg-background p-6">
        <div className="flex items-center justify-center min-h-[100px]">
          {children}
        </div>
      </div>

      {/* Code Block */}
      <div className="relative">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Code
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2 text-xs"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>
        <pre className="bg-foreground text-background p-4 rounded overflow-x-auto text-sm">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}

ComponentDemo.displayName = "ComponentDemo";
