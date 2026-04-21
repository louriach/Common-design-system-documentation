---
title: Tabs
description: Navigation component for organizing content into separate sections
category: Navigation
---

## Overview

Tabs switch between related views or content areas without leaving the page. They keep the interface clean by showing one panel at a time while making the others discoverable through their labels.

## Usage

### Default

```tsx:live
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Details</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for the overview section.</TabsContent>
  <TabsContent value="tab2">Content for the details section.</TabsContent>
  <TabsContent value="tab3">Content for the settings section.</TabsContent>
</Tabs>
```

### Pre-selected tab

Set `defaultValue` to any tab's value to open it on first render.

```tsx:live
<Tabs defaultValue="second">
  <TabsList>
    <TabsTrigger value="first">First</TabsTrigger>
    <TabsTrigger value="second">Second</TabsTrigger>
  </TabsList>
  <TabsContent value="first">First tab content.</TabsContent>
  <TabsContent value="second">Second tab content.</TabsContent>
</Tabs>
```

## Props

### Tabs

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| defaultValue | `string` | — | Initial active tab (uncontrolled) |
| value | `string` | — | Controlled active tab |
| onValueChange | `function` | — | Callback when active tab changes |

### TabsTrigger

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | `string` | — | **Required.** Unique identifier for this tab |
| disabled | `boolean` | `false` | Prevents activation |

### TabsContent

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | `string` | — | **Required.** Must match a `TabsTrigger` value |

## Accessibility

- Uses `role="tablist"`, `role="tab"`, and `role="tabpanel"` with proper `aria-selected` and `aria-controls`
- `Tab` moves focus to the tab list; arrow keys navigate between tabs; `Enter`/`Space` activates
- `Home` moves to the first tab; `End` moves to the last
- Inactive panels are hidden from screen readers

## When to use

**Use tabs when:**
- Content divides naturally into 2–7 named sections
- Users are likely to move back and forth between sections
- Showing all content simultaneously would be overwhelming

**Don't use tabs when:**
- Content is sequential — use a stepper
- There's only one or two items — just show them
- Sections need to be visible at the same time — use an accordion or scrollable sections
