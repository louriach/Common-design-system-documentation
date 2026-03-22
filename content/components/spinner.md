---
title: Spinner
description: Loading indicator component for showing ongoing processes without specific progress
category: Feedback
---

## Overview

A spinner signals that a process is ongoing when completion time is unknown. Use it for data fetching, form submission, and any operation where a percentage can't be calculated.

## Usage

### Default

```tsx:live
<Spinner />
```

### Sizes

```tsx:live
<div className="flex items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>
```

### In a button

Disable the button while the spinner is active to prevent duplicate submissions.

```tsx:live
<Button disabled>
  <Spinner size="sm" className="mr-2" />
  Loading...
</Button>
```

### Page-level loading

```tsx:live
<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <Spinner size="lg" className="mx-auto mb-4" />
    <p className="text-gray-600 dark:text-gray-400">Loading...</p>
  </div>
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Spinner diameter |
| variant | `"default" \| "primary" \| "secondary"` | `"default"` | Color |
| className | `string` | — | Additional CSS classes |

## Accessibility

- Uses `role="status"` with `aria-label="Loading"` so screen readers announce the loading state
- Respects `prefers-reduced-motion` — the animation should pause or simplify when set
- Spinner is decorative when paired with visible "Loading…" text; add `aria-hidden="true"` in that case

## When to use

**Use a spinner when:**
- The operation duration is unknown and cannot be measured
- Quick operations under ~3 seconds (data fetch, form submit)

**Use a Progress bar instead** when completion percentage is available or the operation takes more than a few seconds and users benefit from knowing how much remains.
