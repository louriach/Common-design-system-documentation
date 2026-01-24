import { ComponentGrid } from "@/components/ComponentGrid";
import { getAllComponents } from "@/lib/markdown";

export default function Home() {
  const components = getAllComponents();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Design System Knowledge Base
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A shared knowledge base for design system component documentation. 
          Reduce the need for every team to write the same documentation.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Each component includes accessibility guidelines, state management, props,
          and best practices to help you build accessible, inclusive user interfaces.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y">
        <div>
          <div className="text-3xl font-bold">{components.length}</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
        </div>
        <div>
          <div className="text-3xl font-bold">WCAG 2.1</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Accessibility Standard</p>
        </div>
        <div>
          <div className="text-3xl font-bold">Open Source</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">MIT Licensed</p>
        </div>
      </div>

      {/* Components Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Components</h2>
        <ComponentGrid components={components} />
      </div>
    </div>
  );
}
