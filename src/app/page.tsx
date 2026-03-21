import { getAllComponents } from "@/lib/markdown";

export default function Home() {
  const components = getAllComponents();

  return (
    <div className="docs-home">

      <section className="docs-home-hero">
        <h1 className="docs-home-title">Design System KB</h1>
        <p className="docs-home-lead">
          A documentation template for design systems. Fork it, drop your own
          components in, and ship docs that don't look like they took a week to write.
        </p>
      </section>

      <section className="docs-home-stats">
        <div>
          <div className="docs-home-stat-value">{components.length}</div>
          <p className="docs-home-stat-label">Components documented</p>
        </div>
        <div>
          <div className="docs-home-stat-value">WCAG 2.1</div>
          <p className="docs-home-stat-label">Accessibility standard</p>
        </div>
        <div>
          <div className="docs-home-stat-value">MIT</div>
          <p className="docs-home-stat-label">Open source</p>
        </div>
      </section>

      <section className="docs-home-section">
        <h2 className="docs-home-section-title">How to use this</h2>
        <p className="docs-home-section-intro">
          Four steps to go from this template to your team's design system docs.
        </p>

        <ol className="docs-home-steps">
          <li className="docs-home-step">
            <div className="docs-home-step-number">1</div>
            <div>
              <h3 className="docs-home-step-title">Fork or clone the repo</h3>
              <p className="docs-home-step-body">
                Start with the repo as-is. Everything works out of the box with the
                reference components included.
              </p>
              <pre className="docs-home-code">git clone https://github.com/louriach/Common-design-system-documentation.git
cd Common-design-system-documentation
npm install && npm run dev</pre>
            </div>
          </li>

          <li className="docs-home-step">
            <div className="docs-home-step-number">2</div>
            <div>
              <h3 className="docs-home-step-title">Swap your components in</h3>
              <p className="docs-home-step-body">
                Open <code>src/lib/component-registry.ts</code> — this is the only
                file you need to edit to wire up your own components. Replace any
                import with your own and the live previews update automatically.
              </p>
              <pre className="docs-home-code">{`// src/lib/component-registry.ts
import { Button } from "@your-org/ui"   // ← your component

export const componentRegistry = {
  Button,   // same name as used in the .md files
  // ... rest stays the same
}`}</pre>
            </div>
          </li>

          <li className="docs-home-step">
            <div className="docs-home-step-number">3</div>
            <div>
              <h3 className="docs-home-step-title">Update the markdown docs</h3>
              <p className="docs-home-step-body">
                Each component page is a plain markdown file in{" "}
                <code>content/components/</code>. Edit the existing files or add new
                ones — the sidebar and routing update automatically.
                Use <code>```tsx:live</code> fences for interactive previews.
              </p>
              <pre className="docs-home-code">{`### Basic Button
\`\`\`tsx:live
<Button variant="outline">Click me</Button>
\`\`\``}</pre>
            </div>
          </li>

          <li className="docs-home-step">
            <div className="docs-home-step-number">4</div>
            <div>
              <h3 className="docs-home-step-title">Update your design tokens</h3>
              <p className="docs-home-step-body">
                Brand colours, radius, and typography are all CSS custom properties
                in <code>src/app/globals.css</code>. Change them once and the whole
                site updates.
              </p>
              <pre className="docs-home-code">{`:root {
  --color-primary: oklch(55% 0.2 250);  /* your brand colour */
  --radius: 0.5rem;
}`}</pre>
            </div>
          </li>
        </ol>
      </section>

      <section className="docs-home-section">
        <h2 className="docs-home-section-title">What's included</h2>
        <p className="docs-home-section-intro">
          Every component page covers the same ground so your docs are consistent
          without extra effort.
        </p>
        <ul className="docs-home-list">
          <li>Live interactive previews with copyable code</li>
          <li>Props reference table</li>
          <li>Accessibility guidelines (WCAG 2.1 AA)</li>
          <li>States, variants, and edge cases</li>
          <li>Usage and anti-pattern guidance</li>
          <li>Dark mode out of the box</li>
        </ul>
      </section>

    </div>
  );
}
