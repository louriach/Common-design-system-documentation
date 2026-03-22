---
title: Accordion
description: Collapsible content component for organizing information into expandable sections
category: Layouts
---

## Overview

Accordions organize content into collapsible sections that expand and collapse on demand. They save space by hiding secondary content until needed — useful for FAQs, settings groups, and long content with distinct sections.

## Usage

### Default

Single-open mode: only one item can be expanded at a time.

```tsx:live
<Accordion type="single" defaultValue="item1">
  <AccordionItem value="item1">
    <AccordionTrigger>What is this?</AccordionTrigger>
    <AccordionContent>This is the answer to your question.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>Here's how it works in detail.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple open

Multiple items can be expanded simultaneously.

```tsx:live
<Accordion type="multiple" defaultValue={["item1"]}>
  <AccordionItem value="item1">
    <AccordionTrigger>Item One</AccordionTrigger>
    <AccordionContent>Content for item one.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>Item Two</AccordionTrigger>
    <AccordionContent>Content for item two.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| type | `"single" \| "multiple"` | `"single"` | Whether one or multiple items can be open |
| defaultValue | `string \| string[]` | — | Initial open item(s) (uncontrolled) |
| value | `string \| string[]` | — | Controlled open item(s) |
| onValueChange | `function` | — | Callback when open items change |
| collapsible | `boolean` | `true` | Whether open items can be collapsed |

### AccordionItem

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | `string` | — | **Required.** Unique identifier for this item |

## Accessibility

- `Tab` moves focus to accordion triggers; `Enter` or `Space` toggles the focused item
- `aria-expanded` reflects open/closed state on each trigger
- Content panels use `role="region"` and are associated with their trigger via `aria-controls`
- Keep trigger labels short and descriptive — they're the only text screen readers see until expanded

## When to use

**Use an accordion when:**
- Content can be categorized into distinct, optional sections
- Space is limited and not all content needs to be visible at once
- FAQs, settings groups, or layered documentation

**Don't use an accordion when:**
- All content needs to be visible simultaneously
- There are only 1-2 items (just show them)
- Content is critical and shouldn't be hidden by default
