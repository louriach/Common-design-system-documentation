---
title: Card
description: Container component for organizing related content
category: Layouts
---

## Overview
Card component serves as a flexible container for grouping related information. Used throughout applications for displaying content blocks, product listings, profile cards, and more.

## Usage
```tsx
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-content">
    <p>Card content goes here</p>
  </div>
</div>
```

## Props
- `variant`: "default" | "elevated" | "outlined"
- `padding`: "sm" | "md" | "lg"
- `interactive`: boolean - Adds hover effects
- `clickable`: boolean - Adds pointer cursor and click handler

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

