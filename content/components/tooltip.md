---
title: Tooltip
description: Contextual help component that displays additional information on hover or focus
category: Feedback
---

## Overview

Tooltips reveal supplementary text when a user hovers or focuses an element. They add context without cluttering the interface — useful for icon buttons, truncated labels, and disabled element explanations.

## Usage

### On a button

```tsx:live
<Tooltip content="Click to save your changes">
  <Button>Save</Button>
</Tooltip>
```

### On an icon button

```tsx:live
<Tooltip content="Delete item">
  <IconButton variant="ghost" aria-label="Delete">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </IconButton>
</Tooltip>
```

### Placement

```tsx:live
<div className="flex gap-4 items-center">
  <Tooltip content="Top tooltip" placement="top">
    <Button variant="outline">Top</Button>
  </Tooltip>
  <Tooltip content="Right tooltip" placement="right">
    <Button variant="outline">Right</Button>
  </Tooltip>
  <Tooltip content="Bottom tooltip" placement="bottom">
    <Button variant="outline">Bottom</Button>
  </Tooltip>
  <Tooltip content="Left tooltip" placement="left">
    <Button variant="outline">Left</Button>
  </Tooltip>
</div>
```

### On a disabled element

Explain why an element is not available.

```tsx:live
<Tooltip content="This feature requires a premium account">
  <Button disabled>Premium Feature</Button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| content | `string` | — | **Required.** Text displayed in the tooltip |
| children | `ReactNode` | — | **Required.** Element that triggers the tooltip |
| placement | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Position relative to trigger |
| delay | `number` | `200` | Milliseconds before showing |
| disabled | `boolean` | `false` | Prevents the tooltip from appearing |

## Accessibility

- Uses `role="tooltip"`; the trigger element references it via `aria-describedby`
- Tooltip appears on both hover and keyboard focus — keyboard users must be able to access tooltip content
- Keep text to 1–2 short sentences; tooltips are supplementary, not primary content
- Never put critical or actionable information only inside a tooltip

## When to use

**Use a tooltip when:**
- An icon or truncated label needs a brief explanation
- Explaining why a control is disabled
- Adding context without cluttering the visible UI

**Don't use a tooltip when:**
- The information is critical — make it visible
- The content is longer than a sentence or two — use a Popover or Modal
- The target element is on mobile (hover doesn't exist on touch screens)
