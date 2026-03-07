import { readFileSync } from "fs";
import path from "path";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

export default function ChangelogPage() {
  const changelogPath = path.join(process.cwd(), "CHANGELOG.md");
  let content = "";

  try {
    content = readFileSync(changelogPath, "utf8");
  } catch {
    content = "*Changelog file not found.*";
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Changelog</h1>
        <p className="text-muted-foreground">
          All notable changes to the design system documentation and components.
        </p>
      </div>
      <div className="prose-container">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
