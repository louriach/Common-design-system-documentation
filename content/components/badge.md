---
title: Badge
description: Small label component for displaying status, counts, tags, or attributes
category: Data Display
---

## Overview

Badges show compact labels, counts, or status indicators alongside other content. They let users quickly spot states, categories, or quantities without cluttering the interface.

## Usage

### Variants

Use semantic variants to communicate meaning at a glance.

```tsx:live
<div className="flex gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Active</Badge>
  <Badge variant="warning">Pending</Badge>
  <Badge variant="error">Error</Badge>
</div>
```

### Count

Numeric badge for notification counts or quantities.

```tsx:live
<Badge variant="default">12</Badge>
```

### Sizes

```tsx:live
<div className="flex gap-2 items-center">
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `"default" \| "success" \| "warning" \| "error" \| "info" \| "secondary"` | `"default"` | Color and meaning |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Badge size |
| dot | `boolean` | `false` | Show a dot indicator instead of text |

## Accessibility

- Use `<span>` for non-interactive badges; don't use `<button>` unless the badge is clickable
- For dot-only or count-only badges, add `aria-label` to describe what the count represents
- Don't rely on color alone — pair color with text to convey meaning
- For dynamically updating badges (e.g., notification counts), add `aria-live="polite"`

## When to use

**Use a badge when:**
- Showing status (active, pending, error) on a list item or card
- Displaying a notification count
- Labeling or categorizing content with a tag

**Don't use a badge when:**
- The information requires explanation — use an Alert or inline text
- The badge would be the primary call to action — use a Button
