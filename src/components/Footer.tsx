import Link from "next/link";

export function Footer() {
  return (
    <footer className="docs-footer">
      <div className="docs-footer-inner">
        <div className="docs-footer-grid">
          <div>
            <h3 className="docs-footer-title">Design System KB</h3>
            <p className="docs-footer-text">
              A shared knowledge base for design system component documentation.
            </p>
          </div>
          <div>
            <h4 className="docs-footer-title-sm">Resources</h4>
            <ul className="docs-footer-links space-y-2">
              <li>
                <Link href="/changelog/">Changelog</Link>
              </li>
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">
                  WCAG Guidelines
                </a>
              </li>
              <li>
                <a href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer">
                  Radix UI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="docs-footer-title-sm">Community</h4>
            <ul className="docs-footer-links space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="docs-footer-bottom">
          <p>
            Made by{" "}
            <a href="https://twitter.com/disco_lu" target="_blank" rel="noopener noreferrer">
              @disco_lu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

