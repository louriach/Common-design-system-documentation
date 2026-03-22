---
title: Icon Button
description: Square button component designed specifically for displaying icons without text labels
category: Actions
---

## Overview

Icon buttons trigger actions using a visual symbol instead of text. They conserve space in toolbars, tables, and compact interfaces where the icon alone is recognizable enough to communicate the action.

## Usage

### Ghost (default for toolbars)

```tsx:live
<IconButton variant="ghost" aria-label="Settings">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</IconButton>
```

### Destructive

```tsx:live
<IconButton variant="destructive" aria-label="Delete">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
</IconButton>
```

### Sizes

```tsx:live
<div className="flex gap-4 items-center">
  <IconButton size="sm" aria-label="Small button">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
  <IconButton size="md" aria-label="Medium button">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
  <IconButton size="lg" aria-label="Large button">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
</div>
```

### With tooltip

Pair icon buttons with a tooltip to surface the accessible label visually.

```tsx:live
<Tooltip content="Delete item">
  <IconButton variant="ghost" aria-label="Delete">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </IconButton>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | `string` | — | **Required.** Describes the action for screen readers |
| variant | `"default" \| "destructive" \| "secondary" \| "outline" \| "ghost"` | `"default"` | Visual style |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button dimensions |
| disabled | `boolean` | `false` | Prevents interaction |
| onClick | `function` | — | Click handler |

## Accessibility

- `aria-label` is required — without it, screen readers have nothing to announce
- `Tab` focuses the button; `Enter` or `Space` activates it
- Pair with a `Tooltip` so sighted users can also discover the label on hover
- Minimum touch target is 44×44px on mobile

## When to use

**Use an icon button when:**
- The icon is universally recognizable (close, delete, edit, search)
- Space is too limited for a text label
- Inside a toolbar or table row where text would be redundant

**Use a regular Button instead** when the action is a primary call to action, the icon alone may be ambiguous, or the context is unfamiliar to the user.
