---
title: Tooltip
description: Informational popup component for displaying contextual help
category: Overlays
---

## Overview
Tooltip component displays brief, contextual information when users interact with UI elements. Used for providing hints, descriptions, and additional context.

## Usage
```tsx
<button data-tooltip="Click to submit">Submit</button>
```

## Props
- `content`: string - Tooltip text content
- `placement`: "top" | "bottom" | "left" | "right" | "auto"
- `trigger`: "hover" | "focus" | "click"
- `delay`: number - Delay before showing (ms)
- `disabled`: boolean - Disable tooltip
- `maxWidth`: number - Maximum tooltip width (px)

## Accessibility
- Use `title` attribute as fallback for browsers without JavaScript
- Use `aria-label` or `aria-describedby` appropriately
- Ensure tooltip is readable with keyboard navigation
- Don't put essential information only in tooltips
- Use sufficient contrast and font size
- Test with screen readers
- Support keyboard triggers (Tab + Enter/Space)
- Tooltip should not disappear on hover for users to read it
- Consider keyboard users who may need hover/focus triggers

## States
- Hidden
- Visible
- Animating (enter/exit)
- Loading (for dynamic content)

## Best Practices
- Keep tooltip text concise and clear
- Use for supplementary information only
- Don't use for critical information
- Position carefully to avoid blocking important content
- Use consistent positioning
- Provide keyboard-friendly interactions
- Test readability with long text
- Consider mobile users - tooltips don't work well with touch
- Use icons sparingly in tooltips
- Ensure tooltips don't interfere with other interactive elements

