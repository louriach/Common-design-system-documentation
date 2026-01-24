---
title: Accordion
description: Collapsible content component for organizing information into expandable sections
category: Layouts
---

## Overview

Accordion components organize content into collapsible sections that people can expand or collapse. They save space by hiding content until needed, making interfaces more compact while keeping information accessible. Accordions work well for FAQs, settings groups, content organization, and any scenario where you want to show and hide related information.

## Usage

### Basic Accordion
```tsx:live
<Accordion>
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

### Single Open Accordion
```tsx:live
<Accordion type="single" defaultValue="item1">
  <AccordionItem value="item1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>Content for the first item.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>Second Item</AccordionTrigger>
    <AccordionContent>Content for the second item.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Open Accordion
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
- `type`: "single" | "multiple" - Whether only one or multiple items can be open (default: "single")
- `defaultValue`: string | string[] - Initial open item(s)
- `value`: string | string[] - Controlled open item(s)
- `onValueChange`: function - Callback when open items change
- `collapsible`: boolean - Whether open items can be collapsed (default: true)

### AccordionItem
- `value`: string - **Required** - Unique identifier for this item

### AccordionTrigger
(No additional props beyond standard HTML button attributes)

### AccordionContent
(No additional props beyond standard HTML div attributes)

## States

### Collapsed
The default state when an accordion item is closed.

**Visual characteristics:**
- Trigger button visible with chevron icon
- Content hidden
- Chevron points down
- Border around the item

### Expanded
State when an accordion item is open.

**Visual characteristics:**
- Trigger button visible
- Content visible below trigger
- Chevron rotated to point up
- Content separated by border

### Focus
When navigating with keyboard, the focused trigger shows a focus indicator.

**Visual characteristics:**
- Focus ring appears around the trigger
- Keyboard navigation enabled
- Enter or Space toggles the item
- Focus indicator meets accessibility standards

## Use Cases

### FAQs
Use accordions for frequently asked questions where answers can be hidden until needed.

**Example:**
- Product FAQs
- Support documentation
- Help sections
- Information pages

### Settings Organization
Use accordions to group related settings into collapsible sections.

**Example:**
- Account settings
- Application preferences
- Configuration options
- Advanced settings

### Content Organization
Use accordions to organize long content into manageable sections.

**Example:**
- Documentation sections
- Feature descriptions
- Step-by-step guides
- Content categories

### Filtering and Options
Use accordions to organize filter options or selection criteria.

**Example:**
- Search filters
- Filter panels
- Option groups
- Selection criteria

## Anatomy

Accordion components include these elements:

1. **Accordion Container** - Wrapper that manages accordion state
2. **AccordionItem** - Individual collapsible section
3. **AccordionTrigger** - Clickable header that expands/collapses content
4. **AccordionContent** - Collapsible content panel
5. **Chevron Icon** - Visual indicator of expand/collapse state

## Accessibility

### Keyboard Navigation
- Tab key moves focus to accordion triggers
- Enter or Space toggles the focused item
- Arrow keys can navigate between items (optional enhancement)
- Focus indicators must be clearly visible
- Escape can close all items (optional enhancement)

### Screen Reader Support
- Accordion uses proper ARIA attributes
- `aria-expanded` indicates open/closed state
- `role="region"` on content panels
- Triggers are announced as buttons
- State changes are announced

### Visual Requirements
- Triggers must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Chevron icon must be clearly visible
- Focus indicators must meet contrast requirements
- Content must be readable when expanded

### Best Practices
- Always provide clear, descriptive trigger labels
- Keep trigger text concise (1-5 words typically)
- Ensure content is accessible when expanded
- Use consistent styling across items
- Provide visual indication of expand/collapse state

## Content Guidelines

### Trigger Labels
- Use clear, descriptive labels
- Keep labels concise and scannable
- Use consistent formatting across items
- Make labels action-oriented when appropriate

### Content
- Keep content focused and relevant
- Use proper heading hierarchy within content
- Ensure content is accessible when expanded
- Maintain consistent content structure

## Best Practices

### When to Use
- Organizing related content into sections
- FAQs and help documentation
- Settings and configuration groups
- Long content that benefits from collapsing
- When space is limited

### When Not to Use
- For primary navigation (use navigation menu)
- When all content needs to be visible
- For critical information that must be seen
- When items are unrelated
- For very short content (just show it)

### Design Considerations
- Keep accordion count manageable (3-7 items ideal)
- Ensure triggers are clearly clickable
- Make expand/collapse state obvious
- Use consistent spacing between items
- Consider responsive behavior
- Test with various content lengths

## Related Components

- **Tabs** - For horizontal navigation between sections
- **Card** - Often contains accordion content
- **Collapsible** - Similar but simpler single-item version

## Design System Examples

### Material Design
Material Design includes accordion components with smooth animations and clear states.

### Ant Design
Ant Design offers Collapse components with customization options and accessibility features.

### Chakra UI
Chakra UI provides Accordion components with consistent styling and theme support.

### Base UI
Base UI includes Accordion components with customization options and accessibility support.

## Technical Considerations

### Implementation
- Accordions use context to manage state across items
- Content is conditionally rendered when expanded
- Keyboard navigation is handled with event listeners
- Animations use CSS transitions for smooth state changes

### Browser Support
- Accordions work across all modern browsers
- CSS transitions provide smooth animations
- Keyboard navigation is consistent
- Focus management works with assistive technologies

### Performance
- Accordions have minimal performance impact
- Content is only rendered when expanded (can be optimized)
- State management is lightweight
- Animations use CSS transitions for smooth performance

## Common Patterns

### FAQ Accordion
Common pattern for frequently asked questions.

```tsx:live
<Accordion type="single">
  <AccordionItem value="faq1">
    <AccordionTrigger>How do I get started?</AccordionTrigger>
    <AccordionContent>Follow these steps to get started with the platform.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq2">
    <AccordionTrigger>What are the pricing options?</AccordionTrigger>
    <AccordionContent>We offer several pricing tiers to suit different needs.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Settings Accordion
For organizing settings into groups.

```tsx:live
<Accordion type="multiple">
  <AccordionItem value="general">
    <AccordionTrigger>General Settings</AccordionTrigger>
    <AccordionContent>General application settings.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="privacy">
    <AccordionTrigger>Privacy Settings</AccordionTrigger>
    <AccordionContent>Privacy and security options.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Validation

### Visual Validation
- Accordion items have clear expand/collapse states
- Chevron icon rotates correctly
- Content shows/hides appropriately
- Focus indicators are visible
- Spacing and borders are consistent

### Functional Validation
- Items expand and collapse correctly
- Single type allows only one open item
- Multiple type allows multiple open items
- Keyboard navigation works properly
- Collapsible behavior works as expected

### Accessibility Validation
- ARIA attributes are properly set
- Keyboard navigation works correctly
- Screen readers announce state changes
- Focus indicators meet contrast requirements
- Content is accessible when expanded
