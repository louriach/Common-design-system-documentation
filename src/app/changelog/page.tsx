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
      <header className="docs-page-header">
        <h1 className="docs-page-title">Changelog</h1>
        <p className="docs-page-meta">
          All notable changes to the design system documentation and components.
        </p>
      </header>
      <div className="prose-container">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
