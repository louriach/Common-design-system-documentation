---
title: Breadcrumb
description: Navigation component showing the current page location within a site hierarchy
category: Navigation
---

## Overview

Breadcrumbs show the user's path through a site hierarchy, from the root down to the current page. They help users orient themselves and navigate back to parent sections without using the browser back button.

## Usage

### Default

The current page is the last item and is not a link.

```tsx:live
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/components">Components</BreadcrumbItem>
  <BreadcrumbItem>Button</BreadcrumbItem>
</Breadcrumb>
```

### Custom separator

Replace the default chevron with any character.

```tsx:live
<Breadcrumb separator="/">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
  <BreadcrumbItem>Getting Started</BreadcrumbItem>
</Breadcrumb>
```

### Deep hierarchy

```tsx:live
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/components">Components</BreadcrumbItem>
  <BreadcrumbItem href="/components/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Input</BreadcrumbItem>
</Breadcrumb>
```

## Props

### Breadcrumb

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| separator | `ReactNode` | chevron | Separator rendered between items |
| aria-label | `string` | `"Breadcrumb"` | Accessible label for the nav element |

### BreadcrumbItem

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | `string` | — | Link destination; omit for the current page |

## Accessibility

- The container renders as `<nav aria-label="Breadcrumb">` with items in an `<ol>`
- The last item gets `aria-current="page"` and is not rendered as a link
- Separators are hidden from screen readers with `aria-hidden`
- `Tab` moves focus to each link; `Enter` activates it

## When to use

**Use breadcrumbs when:**
- The site has two or more levels of hierarchy
- Users might arrive deep in the structure and need context
- Navigation back to parent pages is a common action

**Don't use breadcrumbs when:**
- The site is single-level or the hierarchy is flat
- The page already has clear back-navigation
