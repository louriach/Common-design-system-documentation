---
title: Tabs
description: Navigation component for organizing content into separate sections
category: Navigation
---

## Overview

Tabs organize content into separate sections that people can switch between. They let users navigate between different views or content areas without leaving the current page. Tabs work well when you have related content that can be grouped into distinct categories, making interfaces cleaner and easier to scan.

## Usage

### Basic Tabs
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

### Tabs with Default Selection
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

| Prop | Type | Description |
| --- | --- | --- |
| defaultValue | `string` | Initial active tab value. |
| value | `string` | Controlled active tab value. |
| onValueChange | `function` | Callback when active tab changes. |

### TabsList

(No additional props beyond standard HTML div attributes.)

### TabsTrigger

| Prop | Type | Description |
| --- | --- | --- |
| value | `string` | **Required.** Unique identifier for this tab. |
| disabled | `boolean` | Disables the tab trigger. |

### TabsContent

| Prop | Type | Description |
| --- | --- | --- |
| value | `string` | **Required.** Unique identifier matching a TabsTrigger. |

## States

### Default
The default state shows all tabs with one tab active.

**Visual characteristics:**
- Active tab has distinct styling (background, text color)
- Inactive tabs appear in a muted style
- Tab content for active tab is visible
- Other tab content is hidden

### Active
The active tab is the currently selected tab.

**Visual characteristics:**
- Active tab has highlighted background
- Active tab text uses primary color
- Active tab may have shadow or border
- Content panel for active tab is visible

### Inactive
Inactive tabs are not currently selected.

**Visual characteristics:**
- Inactive tabs use neutral colors
- Hover state shows they're interactive
- Content panels for inactive tabs are hidden
- Clear visual distinction from active tab

### Focus
When navigating with keyboard, the focused tab shows a focus indicator.

**Visual characteristics:**
- Focus ring appears around the tab
- Tab can be activated with Enter or Space
- Arrow keys navigate between tabs
- Focus indicator meets accessibility standards

### Disabled
A disabled tab cannot be activated.

**Visual characteristics:**
- Reduced opacity
- Cursor changes to not-allowed
- No interaction possible
- Visual indication of disabled state

## Use Cases

### Content Organization
Use tabs to organize different types of content on the same page.

**Example:**
- Product details (Overview, Specifications, Reviews)
- User profiles (About, Posts, Photos)
- Settings pages (General, Privacy, Notifications)

### Navigation
Use tabs for navigating between different views or sections.

**Example:**
- Dashboard sections
- Admin panels
- Documentation sections
- Multi-step forms

### Filtering
Use tabs to filter or switch between different data views.

**Example:**
- Task lists (All, Active, Completed)
- Email folders (Inbox, Sent, Drafts)
- Content types (Articles, Videos, Podcasts)

### Settings and Configuration
Use tabs to organize settings into logical groups.

**Example:**
- Account settings
- Application preferences
- Team management
- Billing information

## Anatomy

Tab components include these elements:

1. **Tabs Container** - Wrapper that manages tab state
2. **TabsList** - Container for all tab triggers
3. **TabsTrigger** - Individual clickable tab buttons
4. **TabsContent** - Content panels that show/hide based on active tab

## Accessibility

### Keyboard Navigation
- Tab key moves focus to the tab list
- Arrow keys (left/right) navigate between tabs
- Enter or Space activates the focused tab
- Home key moves to first tab
- End key moves to last tab
- Focus indicators must be clearly visible

### Screen Reader Support
- Tabs use `role="tablist"`, `role="tab"`, and `role="tabpanel"`
- `aria-selected` indicates the active tab
- `aria-controls` links tabs to their panels
- `aria-labelledby` links panels to their tabs
- Tab panels are hidden from screen readers when inactive

### Visual Requirements
- Tab triggers must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Active and inactive states must be clearly distinguishable
- Focus indicators must meet contrast requirements
- Tab content must be readable when zoomed to 200%

### Best Practices
- Always provide clear labels for each tab
- Keep tab labels concise (1-3 words typically)
- Limit the number of tabs (ideally 3-5, maximum 7)
- Ensure tab content is accessible when active
- Use consistent tab styling throughout the application
- Provide visual indication of the active tab

## Content Guidelines

### Tab Labels
- Use clear, descriptive labels
- Keep labels short and scannable
- Use consistent naming conventions
- Avoid truncation when possible
- Make labels action-oriented when appropriate

### Tab Content
- Keep content focused and relevant to the tab
- Ensure content is accessible when tab is active
- Provide clear headings within tab content
- Maintain consistent content structure across tabs

## Best Practices

### When to Use
- Organizing related content into sections
- Navigating between different views
- Filtering or switching data views
- Grouping settings or configuration options
- When content is too much for a single page

### When Not to Use
- For primary navigation (use navigation menu)
- When tabs would have only 2 items (consider other patterns)
- For sequential steps (use stepper or wizard)
- When content needs to be visible simultaneously
- For unrelated content that doesn't belong together

### Design Considerations
- Keep tab count manageable (3-5 tabs ideal)
- Ensure tabs are clearly visible and accessible
- Use appropriate spacing between tabs
- Make active state obvious
- Consider responsive behavior (tabs may scroll on mobile)
- Test with various content lengths

## Related Components

- **Button** - For actions, not navigation
- **Navigation Menu** - For primary site navigation
- **Accordion** - For vertically stacked expandable content
- **Card** - Often contains tab content

## Technical Considerations

### Implementation
- Tabs use context to manage state across components
- Active tab content is conditionally rendered
- Keyboard navigation is handled with event listeners
- Focus management ensures proper tab order

### Browser Support
- Tabs work across all modern browsers
- Keyboard navigation is consistent
- Focus management works with assistive technologies
- CSS transitions provide smooth state changes

### Performance
- Tabs have minimal performance impact
- Content is only rendered for active tab (can be optimized)
- State management is lightweight
- Animations use CSS transitions for smooth performance

## Common Patterns

### Content Sections
Organizing content into distinct sections.

```tsx:live
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="features">Features</TabsTrigger>
    <TabsTrigger value="pricing">Pricing</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content here.</TabsContent>
  <TabsContent value="features">Features content here.</TabsContent>
  <TabsContent value="pricing">Pricing content here.</TabsContent>
</Tabs>
```

### Settings Tabs
Organizing settings into logical groups.

```tsx:live
<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="privacy">Privacy</TabsTrigger>
  </TabsList>
  <TabsContent value="general">General settings.</TabsContent>
  <TabsContent value="privacy">Privacy settings.</TabsContent>
</Tabs>
```

## Validation

### Visual Validation
- Tabs have clear active and inactive states
- Active tab is immediately obvious
- Focus indicators are visible
- Tab content displays correctly
- Spacing and alignment are consistent

### Functional Validation
- Tabs switch correctly when clicked
- Keyboard navigation works properly
- Focus management functions correctly
- Disabled tabs cannot be activated
- Content shows/hides appropriately

### Accessibility Validation
- Tabs use proper ARIA roles and attributes
- Keyboard navigation works correctly
- Screen readers announce tabs properly
- Focus indicators meet contrast requirements
- Tab content is accessible when active
- Tab panels are hidden from screen readers when inactive
