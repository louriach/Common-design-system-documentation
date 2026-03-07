import { getAllComponents } from "@/lib/markdown";

export default function Home() {
  const components = getAllComponents();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Design System Knowledge Base
        </h1>
        <p className="text-lg text-muted-foreground">
          A shared knowledge base for design system component documentation. 
          Reduce the need for every team to write the same documentation.
        </p>
        <p className="text-base text-muted-foreground">
          Each component includes accessibility guidelines, state management, props,
          and best practices to help you build accessible, inclusive user interfaces.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y border-border">
        <div>
          <div className="text-3xl font-bold">{components.length}</div>
          <p className="text-sm text-muted-foreground">Components</p>
        </div>
        <div>
          <div className="text-3xl font-bold">WCAG 2.1</div>
          <p className="text-sm text-muted-foreground">Accessibility Standard</p>
        </div>
        <div>
          <div className="text-3xl font-bold">Open Source</div>
          <p className="text-sm text-muted-foreground">MIT Licensed</p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p className="text-muted-foreground">
          Browse components using the sidebar on the left. Each component page includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>Overview and usage examples</li>
          <li>Props and configuration options</li>
          <li>Accessibility guidelines (WCAG 2.1 AA)</li>
          <li>State management patterns</li>
          <li>Best practices and common patterns</li>
        </ul>
      </div>
    </div>
  );
}
