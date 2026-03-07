import { getAllComponents } from "@/lib/markdown";

export default function Home() {
  const components = getAllComponents();

  return (
    <div className="docs-home space-y-8">
      <section className="docs-home-hero space-y-4">
        <h1 className="docs-home-title">
          Design System Knowledge Base
        </h1>
        <p className="docs-home-lead">
          A shared knowledge base for design system component documentation. 
          Reduce the need for every team to write the same documentation.
        </p>
        <p className="docs-home-sub">
          Each component includes accessibility guidelines, state management, props,
          and best practices to help you build accessible, inclusive user interfaces.
        </p>
      </section>

      <section className="docs-home-stats">
        <div>
          <div className="docs-home-stat-value">{components.length}</div>
          <p className="docs-home-stat-label">Components</p>
        </div>
        <div>
          <div className="docs-home-stat-value">WCAG 2.1</div>
          <p className="docs-home-stat-label">Accessibility Standard</p>
        </div>
        <div>
          <div className="docs-home-stat-value">Open Source</div>
          <p className="docs-home-stat-label">MIT Licensed</p>
        </div>
      </section>

      <section className="docs-home-section space-y-4">
        <h2 className="docs-home-section-title">Getting Started</h2>
        <p>
          Browse components using the sidebar on the left. Each component page includes:
        </p>
        <ul className="docs-home-list">
          <li>Overview and usage examples</li>
          <li>Props and configuration options</li>
          <li>Accessibility guidelines (WCAG 2.1 AA)</li>
          <li>State management patterns</li>
          <li>Best practices and common patterns</li>
        </ul>
      </section>
    </div>
  );
}
