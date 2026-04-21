import { getAllComponents } from "@/lib/markdown";
import Link from "next/link";

const categories = [
  {
    name: "Actions",
    items: ["button", "icon-button", "link"],
    labels: { button: "Button", "icon-button": "Icon Button", link: "Link" },
  },
  {
    name: "Forms",
    items: ["input", "textarea", "select", "checkbox", "radio", "toggle", "combobox", "date-picker", "fieldset"],
    labels: { input: "Input", textarea: "Textarea", select: "Select", checkbox: "Checkbox", radio: "Radio", toggle: "Toggle", combobox: "Combobox", "date-picker": "Date Picker", fieldset: "Fieldset" },
  },
  {
    name: "Feedback",
    items: ["alert", "modal", "progress", "spinner", "tooltip"],
    labels: { alert: "Alert", modal: "Modal", progress: "Progress", spinner: "Spinner", tooltip: "Tooltip" },
  },
  {
    name: "Navigation",
    items: ["accordion", "breadcrumb", "tabs"],
    labels: { accordion: "Accordion", breadcrumb: "Breadcrumb", tabs: "Tabs" },
  },
  {
    name: "Data display",
    items: ["avatar", "badge", "card", "table"],
    labels: { avatar: "Avatar", badge: "Badge", card: "Card", table: "Table" },
  },
];

export default function Home() {
  const components = getAllComponents();

  return (
    <div className="docs-home">

      <section className="docs-home-hero">
        <h1 className="docs-home-title">Design System</h1>
        <p className="docs-home-lead">
          Component documentation with live previews, props references, and
          accessibility guidelines — all in one place.
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
        <h2 className="docs-home-section-title">Components</h2>
        <div className="docs-home-categories">
          {categories.map((cat) => (
            <div key={cat.name} className="docs-home-category">
              <h3 className="docs-home-category-name">{cat.name}</h3>
              <ul className="docs-home-category-list">
                {cat.items.map((slug) => (
                  <li key={slug}>
                    <Link href={`/components/${slug}`} className="docs-home-category-link">
                      {cat.labels[slug as keyof typeof cat.labels]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
