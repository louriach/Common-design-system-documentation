---
title: Button
description: Primary action component for triggering events
category: Actions
---

## Overview
Button component for user interactions.

## Usage

### Basic Button
```tsx:live
<Button>Click me</Button>
```

### Button Variants
```tsx:live
<Button variant="default">Default</Button>
```

```tsx:live
<Button variant="destructive">Destructive</Button>
```

```tsx:live
<Button variant="secondary">Secondary</Button>
```

```tsx:live
<Button variant="outline">Outline</Button>
```

```tsx:live
<Button variant="ghost">Ghost</Button>
```

## Props
- `variant`: "default" | "secondary" | "outline" | "ghost"
- `size`: "sm" | "md" | "lg"
- `disabled`: boolean

## Accessibility
- ARIA labels required for icon-only buttons
- Keyboard support: Enter and Space to activate
- Focus management with visible focus indicator

## States
- Default
- Hover
- Focus
- Disabled
- Loading
