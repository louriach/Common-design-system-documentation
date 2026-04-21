---
title: Card
description: Container component for organizing related content
category: Layouts
---

## Overview

Cards group related content and actions into a self-contained unit. They provide visual separation from surrounding content and work well for product listings, user profiles, settings panels, and any discrete chunk of information.

## Usage

### Basic card

```tsx:live
<Card title="Card Title" description="Card content goes here">
  This is the card content area.
</Card>
```

### Interactive card

Adds hover effects when the whole card is clickable.

```tsx:live
<Card title="Example Card" description="A simple card component" interactive>
  Card content can include any content you need.
</Card>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | — | Card heading |
| description | `string` | — | Subtitle or summary |
| variant | `"default" \| "elevated" \| "outlined"` | `"default"` | Visual style |
| padding | `"sm" \| "md" \| "lg"` | `"md"` | Internal spacing |
| interactive | `boolean` | `false` | Adds hover and focus states |

## Accessibility

- Use semantic elements inside cards — headings, paragraphs, lists — to maintain document structure
- Interactive cards need a focusable element (button or link) for keyboard access; don't make the whole `<div>` a click target without a proper role
- Maintain heading hierarchy within cards (`<h3>` inside a card on a page that uses `<h2>` for sections)

## When to use

**Use a card when:**
- Grouping related content that should be visually distinct from the page background
- Building grid or list layouts where each item has multiple fields

**Don't use a card when:**
- The content is a simple list item with one or two fields — a plain row is sufficient
- Cards would be nested more than one level deep
