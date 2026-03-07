---
title: Card
description: Container component for organizing related content
category: Layouts
---

## Overview
Card component serves as a flexible container for grouping related information. Used throughout applications for displaying content blocks, product listings, profile cards, and more.

## Usage

### Basic Card
```tsx:live
<Card title="Card Title" description="Card content goes here">
  This is the card content area.
</Card>
```

### Card with Header
```tsx:live
<Card title="Example Card" description="A simple card component">
  Card content can include any content you need.
</Card>
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| variant | `"default" \| "elevated" \| "outlined"` | Card visual style. |
| padding | `"sm" \| "md" \| "lg"` | Internal padding. |
| interactive | `boolean` | Adds hover effects. |
| clickable | `boolean` | Adds pointer cursor and click handler. |

## Accessibility
- Use semantic HTML: `<article>`, `<section>`, or `<div>` depending on content
- Ensure sufficient color contrast between card background and content
- Make interactive cards keyboard accessible
- Use appropriate heading hierarchy inside cards
- Provide focus indicators for interactive cards

## States
- Default
- Hover (if interactive)
- Focus (if interactive)
- Disabled (if interactive)
- Loading

## Best Practices
- Keep content focused and concise
- Use consistent spacing within cards
- Consider responsive design - cards may stack vertically on mobile
- Use card borders or shadows to distinguish from background
- Avoid excessive nesting
- Provide clear visual hierarchy within the card

