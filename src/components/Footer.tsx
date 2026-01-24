export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-3">Design System KB</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A shared knowledge base for design system component documentation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WCAG Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://www.radix-ui.com/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radix UI
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
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
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2026 Design System Knowledge Base. MIT Licensed.</p>
        </div>
      </div>
    </footer>
  );
}

