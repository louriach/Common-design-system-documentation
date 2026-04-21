# CSS naming convention

This project uses **semantic CSS** with design tokens and a small utility layer. There is no Tailwind (or other commercial utility framework) dependency.

## Design tokens

All colors and radius come from CSS custom properties in `src/app/globals.css`:

- `--color-background`, `--color-foreground`, `--color-primary`, `--color-muted`, `--color-border`, etc.
- `--color-destructive`, `--color-success`, `--color-warning` for semantic states
- `--radius` for border radius
- Dark mode overrides live under `.dark`

## Layers

1. **Utilities** (in `src/app/semantic.css`)  
   Layout, spacing, typography, and color classes that use the tokens. Names are short and consistent (e.g. `flex`, `gap-2`, `text-foreground`, `bg-background`). Used for layout and one-off styling.

2. **Component classes** (prefix `ds-`)  
   Component-specific blocks and modifiers:
   - **Block**: e.g. `ds-btn`, `ds-card`, `ds-input`, `ds-modal-*`, `ds-tabs-*`, `ds-accordion-*`, `ds-alert`, `ds-badge`
   - **Modifiers**: `ds-btn--default`, `ds-btn--destructive`, `ds-input--error`, `ds-alert--destructive`, etc.

   Component classes use design tokens only (no hard-coded colors).

## Conventions

- **Components**: Prefer `ds-` component classes for UI components (Button, Input, Card, Modal, Tabs, Accordion, Alert, Badge, etc.). Variants and states use `--modifier` (BEM-style).
- **Layout**: Use utility classes (`flex`, `flex-col`, `gap-2`, `container`, `px-4`, `mb-4`, etc.) for page and section layout.
- **Colors**: Always use token-based classes (`text-foreground`, `bg-primary`, `border-border`, etc.), never raw color values in class names.
- **Radix primitives**: Modal (Dialog), Tooltip, Tabs, and Accordion are built on Radix UI. Their DOM uses `data-state` and Radix’s own attributes; we style them with `ds-*` and utility classes.

## File layout

- `src/app/globals.css`: tokens (`@theme` and `.dark`), base (body, code), imports `semantic.css`
- `src/app/semantic.css`: all utilities and `ds-*` component styles

## References

- [Polaris (Shopify)](https://github.com/Shopify/polaris/blob/main/documentation/Generating%20styles.md): BEM-like with `Polaris-` prefix, `__` element, `--` modifier
- [React Aria](https://react-spectrum.adobe.com/react-aria/): one root class per component, state via data attributes
