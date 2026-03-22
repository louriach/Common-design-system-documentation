---
title: Progress
description: Visual indicator component showing completion status or loading progress
category: Feedback
---

## Overview

Progress bars show how far a measurable operation has completed. They give users a sense of advancement and estimated time remaining — useful for file uploads, multi-step processing, and any task where percentage complete can be calculated.

## Usage

### Default

```tsx:live
<Progress value={45} />
```

### With label

```tsx:live
<Progress value={75} showLabel />
```

### Variants

Use semantic variants to communicate status alongside progress.

```tsx:live
<div className="space-y-4">
  <Progress value={60} variant="default" showLabel />
  <Progress value={80} variant="success" showLabel />
  <Progress value={40} variant="warning" showLabel />
  <Progress value={20} variant="error" showLabel />
</div>
```

### Sizes

```tsx:live
<div className="space-y-4">
  <Progress value={50} size="sm" />
  <Progress value={50} size="md" />
  <Progress value={50} size="lg" />
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | `number` | `0` | Current value (0 to `max`) |
| max | `number` | `100` | Value representing 100% |
| showLabel | `boolean` | `false` | Shows percentage label |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Bar height |
| variant | `"default" \| "success" \| "warning" \| "error"` | `"default"` | Color |

## Accessibility

- Uses `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`
- Provide an `aria-label` describing what is progressing (e.g., "Uploading file")
- Progress updates are announced to screen readers as the value changes

## When to use

**Use a progress bar when:**
- The operation has a measurable completion percentage
- The process takes longer than ~2 seconds
- Users benefit from knowing how much work remains

**Use a Spinner instead** when progress cannot be measured. Don't use a progress bar for operations under 1 second — the flicker is more disruptive than helpful.
