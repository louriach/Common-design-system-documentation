---
title: Link
description: Navigation component for linking to other pages or external resources
category: Navigation
---

## Overview

Links navigate users to other pages, sections, or external resources. They're the correct element for any interaction that changes location rather than triggering an action.

## Usage

### Default

```tsx:live
<Link href="/components">View Components</Link>
```

### With underline

Useful for links embedded in body text.

```tsx:live
<Link href="/docs" variant="underline">Documentation</Link>
```

### Subtle

Lower visual weight for secondary navigation or metadata links.

```tsx:live
<Link href="/about" variant="subtle">Learn More</Link>
```

### External

Opens in a new tab with `rel="noopener noreferrer"` applied automatically.

```tsx:live
<Link href="https://example.com" external>Visit Example</Link>
```

### Inline in text

```tsx:live
<p>Read our <Link href="/blog">blog posts</Link> for the latest updates.</p>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | `string` | — | Destination URL or path |
| variant | `"default" \| "underline" \| "subtle"` | `"default"` | Visual style |
| external | `boolean` | `false` | Opens in new tab; adds `rel="noopener noreferrer"` |
| aria-label | `string` | — | Accessible label when link text isn't self-describing |

## Accessibility

- Link text must describe the destination — avoid "click here" or "read more"
- External links automatically get `target="_blank"` and `rel="noopener noreferrer"`
- `Tab` focuses links; `Enter` activates them
- Links must be visually distinct from surrounding text (color and/or underline)

## When to use

**Use a link when:**
- The action navigates to another page or section
- Referencing related content inline

**Use a Button instead** when the action causes a change (submit, delete, open modal). A link that looks like a button is still a link if it navigates — use `<a>` semantics accordingly.
