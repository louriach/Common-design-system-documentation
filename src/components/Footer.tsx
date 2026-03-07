import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-3">Design System KB</h3>
            <p className="text-sm text-muted-foreground">
              A shared knowledge base for design system component documentation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/changelog/" className="text-primary hover:underline">
                  Changelog
                </Link>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WCAG Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://www.radix-ui.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radix UI
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shadcn/ui
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            Made by{" "}
            <a
              href="https://twitter.com/disco_lu"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @disco_lu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

