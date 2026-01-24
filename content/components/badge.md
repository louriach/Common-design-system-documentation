---
title: Badge
description: Small label component for displaying status, counts, or tags
category: Data Display
---

## Overview
Badge component for displaying status, counts, tags, or labels. Typically used for notifications, statuses, or categorization.

## Usage
```tsx
<span class="badge">New</span>
<span class="badge badge-success">Active</span>
<span class="badge badge-error">Error</span>
```

## Props
- `variant`: "default" | "success" | "error" | "warning" | "info"
- `size`: "sm" | "md" | "lg"
- `shape`: "rounded" | "square" | "pill"
- `dot`: boolean - Show dot before text
- `dismissible`: boolean - Show close button

## Accessibility
- Use semantic elements where appropriate
- Ensure sufficient color contrast
- Don't rely on color alone to convey meaning - use text or icons
- For dismissible badges: provide clear label for close button
- If badge conveys important status: use `aria-label` or `title` attribute
- Consider screen reader announcements for dynamic badges

## States
- Default
- Hover (if interactive)
- Focus (if interactive)
- Disabled

## Best Practices
- Keep text short and concise
- Use color purposefully - establish a color scheme for meaning
- Consider icon usage for common statuses
- Don't overuse badges - they should highlight important information
- Ensure text has sufficient contrast against background
- Use badges to complement, not replace, descriptive text
- Position badges consistently relative to content

