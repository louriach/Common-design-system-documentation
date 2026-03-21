---
title: Getting started
description: How to use this as a base for your own design system documentation
category: Overview
---

## About this template

This site is a documentation template for design systems. Fork it, drop your own components in, and ship docs that don't look like they took a week to write.

Every component page covers the same ground automatically:

- Live interactive previews with copyable code
- Props reference table
- Accessibility guidelines (WCAG 2.1 AA)
- States, variants, and edge cases
- Usage and anti-pattern guidance
- Dark mode out of the box

---

## Four steps to make it yours

### 1. Fork or clone the repo

```
git clone https://github.com/louriach/Common-design-system-documentation.git
cd Common-design-system-documentation
npm install && npm run dev
```

Everything works out of the box with the reference components included.

### 2. Swap your components in

Open `src/lib/component-registry.ts` — this is the only file you need to edit to wire up your own components. Replace any import with your own and the live previews update automatically.

```ts
// src/lib/component-registry.ts
import { Button } from "@your-org/ui"   // ← your component

export const componentRegistry = {
  Button,   // same name as used in the .md files
  // ... rest stays the same
}
```

### 3. Update the markdown docs

Each component page is a plain markdown file in `content/components/`. Edit the existing files or add new ones — the sidebar and routing update automatically.

Use ` ```tsx:live ` fences for interactive previews:

````
```tsx:live
<Button variant="outline">Click me</Button>
```
````

### 4. Update your design tokens

Brand colours, radius, and typography are all CSS custom properties in `src/app/globals.css`. Change them once and the whole site updates.

```css
:root {
  --color-primary: oklch(55% 0.2 250);  /* your brand colour */
  --radius: 0.5rem;
}
```
