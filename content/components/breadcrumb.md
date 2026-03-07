---
title: Breadcrumb
description: Navigation component showing the current page location within a site hierarchy
category: Navigation
---

## Overview

Breadcrumb components show where people are in a site's structure by displaying the path from the home page to the current page. They help users understand their location and navigate back to parent pages quickly. Breadcrumbs work well in complex sites with multiple levels, making it easier to move between sections without using the back button.

## Usage

### Basic Breadcrumb
```tsx:live
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/components">Components</BreadcrumbItem>
  <BreadcrumbItem>Button</BreadcrumbItem>
</Breadcrumb>
```

### Breadcrumb with Custom Separator
```tsx:live
<Breadcrumb separator="/">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
  <BreadcrumbItem>Getting Started</BreadcrumbItem>
</Breadcrumb>
```

### Deep Hierarchy Breadcrumb
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

| Prop | Type | Description |
| --- | --- | --- |
| separator | `ReactNode` | Custom separator between items (default: chevron icon). |
| aria-label | `string` | Accessible label (default: "Breadcrumb"). |

### BreadcrumbItem

| Prop | Type | Description |
| --- | --- | --- |
| href | `string` | Link destination (not required for last item). |
| isLast | `boolean` | Whether this is the last item (auto-set by Breadcrumb). |
| separator | `ReactNode` | Custom separator (inherited from Breadcrumb). |

## States

### Default
Breadcrumbs appear in their normal state with all items visible.

**Visual characteristics:**
- All path segments displayed
- Separators between items
- Last item highlighted as current page
- Previous items are clickable links

### Hover
When hovering over clickable breadcrumb items.

**Visual characteristics:**
- Link color changes
- Underline may appear
- Cursor changes to pointer
- Visual feedback indicates interactivity

### Current Page
The last breadcrumb item represents the current page.

**Visual characteristics:**
- Not a clickable link
- Often uses different styling (bold, different color)
- `aria-current="page"` attribute set
- Clear visual distinction from parent items

## Use Cases

### Site Navigation
Use breadcrumbs to show location within a site's structure.

**Example:**
- E-commerce product pages
- Documentation sites
- Content management systems
- Multi-level websites

### Category Navigation
Use breadcrumbs to show category hierarchy.

**Example:**
- Product categories
- Content categories
- Folder structures
- Taxonomy navigation

### Page Context
Use breadcrumbs to provide context about the current page.

**Example:**
- Article pages
- Detail pages
- Settings pages
- Profile sections

### Deep Navigation
Use breadcrumbs when sites have many navigation levels.

**Example:**
- Multi-level documentation
- Complex site structures
- Hierarchical content
- Nested sections

## Anatomy

Breadcrumb components include these elements:

1. **Container** - Wrapper that holds all breadcrumb items
2. **Breadcrumb Items** - Individual path segments
3. **Separators** - Visual dividers between items (chevrons, slashes, etc.)
4. **Links** - Clickable items for parent pages
5. **Current Page** - Non-clickable last item showing current location

## Accessibility

### Keyboard Navigation
- Tab key moves focus to clickable breadcrumb items
- Enter or Space activates focused links
- Focus indicators must be clearly visible
- Keyboard navigation works consistently

### Screen Reader Support
- Breadcrumb uses `aria-label="Breadcrumb"` on container
- Last item uses `aria-current="page"` to indicate current page
- Links have descriptive text
- Structure is announced clearly
- Separators are handled appropriately

### Visual Requirements
- Links must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Separators must be clearly visible
- Current page must be visually distinct
- Focus indicators must meet contrast requirements

### Best Practices
- Always include a Home link as the first item
- Keep breadcrumb text concise (1-3 words per item)
- Make the current page clearly distinguishable
- Ensure all parent pages are clickable
- Limit breadcrumb depth (3-5 levels ideal)
- Use consistent separators throughout

## Content Guidelines

### Item Labels
- Use clear, descriptive labels
- Keep labels short and scannable
- Use consistent naming conventions
- Match labels to page titles when possible
- Avoid truncation when possible

### Hierarchy
- Start with Home as the first item
- Show the full path to current page
- Maintain logical hierarchy
- Don't skip levels in the path
- Keep depth manageable

## Best Practices

### When to Use
- Sites with multiple navigation levels
- Complex site structures
- When users need to understand location
- For quick navigation to parent pages
- When space allows for breadcrumb placement

### When Not to Use
- Single-level sites
- When space is extremely limited
- For primary navigation (use navigation menu)
- When site structure is flat
- For decorative purposes only

### Design Considerations
- Place breadcrumbs near the top of the page
- Use consistent styling throughout site
- Ensure separators are clearly visible
- Make current page obvious
- Test with various breadcrumb lengths
- Consider responsive behavior

## Related Components

- **Navigation Menu** - For primary site navigation
- **Tabs** - For horizontal section navigation
- **Link** - Individual breadcrumb items use links

## Technical Considerations

### Implementation
- Breadcrumbs use semantic HTML (`nav`, `ol`, `li`)
- Last item is not a link but a span with `aria-current`
- Separators are inserted between items
- Links use proper href attributes
- Structure supports screen readers

### Browser Support
- Breadcrumbs work across all modern browsers
- Semantic HTML is well-supported
- Keyboard navigation is consistent
- Focus management works with assistive technologies

### Performance
- Breadcrumbs have minimal performance impact
- No JavaScript required for basic functionality
- Links use standard navigation
- Rendering is lightweight

## Common Patterns

### Documentation Breadcrumb
Common pattern for documentation sites.

```tsx:live
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
  <BreadcrumbItem>Button</BreadcrumbItem>
</Breadcrumb>
```

### E-commerce Breadcrumb
For product and category pages.

```tsx:live
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/shop">Shop</BreadcrumbItem>
  <BreadcrumbItem href="/shop/electronics">Electronics</BreadcrumbItem>
  <BreadcrumbItem>Laptops</BreadcrumbItem>
</Breadcrumb>
```

## Validation

### Visual Validation
- Breadcrumbs display correctly with all items
- Separators are clearly visible
- Current page is visually distinct
- Links are properly styled
- Spacing is consistent

### Functional Validation
- All parent links navigate correctly
- Current page is not clickable
- Keyboard navigation works properly
- Focus indicators are visible
- Separators render correctly

### Accessibility Validation
- ARIA attributes are properly set
- Keyboard navigation works correctly
- Screen readers announce breadcrumbs properly
- Focus indicators meet contrast requirements
- Current page is correctly identified
