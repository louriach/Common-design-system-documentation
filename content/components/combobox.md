---
title: Combobox
description: Searchable input component that combines text entry with dropdown selection
category: Forms
---

## Overview

Combobox components blend text input with dropdown selection, letting people type to filter options or pick from a list. They're ideal when you have many options and want to help users find what they need quickly. Comboboxes work well for searchable lists, autocomplete scenarios, and any situation where typing speeds up selection.

## Usage

### Basic Combobox
```tsx:live
<Combobox
  label="Country"
  placeholder="Search countries..."
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" }
  ]}
/>
```

### Combobox with Selected Value
```tsx:live
<Combobox
  label="Language"
  placeholder="Choose a language..."
  value="en"
  options={[
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" }
  ]}
/>
```

### Required Combobox
```tsx:live
<Combobox
  label="Category"
  placeholder="Select a category..."
  required
  options={[
    { value: "tech", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "business", label: "Business" }
  ]}
/>
```

### Combobox with Helper Text
```tsx:live
<Combobox
  label="Product"
  placeholder="Search products..."
  helperText="Type to filter available products"
  options={[
    { value: "laptop", label: "Laptop" },
    { value: "phone", label: "Phone" },
    { value: "tablet", label: "Tablet" }
  ]}
/>
```

### Error State
```tsx:live
<Combobox
  label="City"
  placeholder="Search cities..."
  error
  helperText="Please select a valid city"
  options={[
    { value: "nyc", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" }
  ]}
/>
```

### Disabled Combobox
```tsx:live
<Combobox
  label="Status"
  placeholder="Select status..."
  disabled
  value="active"
  options={[
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" }
  ]}
/>
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| options | `Array<{value: string, label: string, disabled?: boolean}>` | **Required.** Array of selectable options. |
| value | `string` | Controlled selected value. |
| onChange | `function` | Callback when selection changes (receives value). |
| onInputChange | `function` | Callback when input text changes (receives input value). |
| label | `string` | Label text shown above the combobox. |
| placeholder | `string` | Placeholder text when input is empty. |
| error | `boolean` | Shows error state styling and message (default: false). |
| helperText | `string` | Helper text or error message shown below combobox. |
| disabled | `boolean` | Disables the combobox (default: false). |
| required | `boolean` | Marks the combobox as required (default: false). |
| filterFunction | `function` | Custom function to filter options (default: case-insensitive label matching). |
| id | `string` | Unique identifier (auto-generated if not provided). |
| aria-label | `string` | Accessible label for screen readers. |
| aria-describedby | `string` | ID of element describing the combobox. |

## States

### Default
The combobox appears in its normal, interactive state ready for input.

**Visual characteristics:**
- Input field with visible border
- Dropdown arrow indicator visible
- Placeholder text shown when empty
- Options list hidden until interaction

### Open
When the combobox is opened, the filtered options list appears.

**Visual characteristics:**
- Options list dropdown appears below input
- Filtered options based on input text
- Keyboard navigation enabled
- Focused option highlighted

### Focus
When the combobox receives keyboard or mouse focus, it shows a visible focus indicator.

**Visual characteristics:**
- Focus ring appears around the input
- Ready for text input
- Dropdown can be opened with keyboard
- Arrow key navigation available when open

### Disabled
A disabled combobox cannot be interacted with and appears visually muted.

**Visual characteristics:**
- Reduced opacity
- Cursor changes to not-allowed
- No interaction possible
- Current value remains visible

### Error
An error state indicates validation failure or required field not completed.

**Visual characteristics:**
- Border color changes to red
- Error message appears below
- Focus ring uses error color
- Helper text shows error message

## Use Cases

### Searchable Selection
Use comboboxes when you need searchable selection from a large list of options.

**Example:**
- Country selection
- City selection
- Product search
- User search

### Autocomplete
Use comboboxes for autocomplete functionality where typing filters options.

**Example:**
- Address autocomplete
- Tag selection
- Category filtering
- Command palette

### Dynamic Filtering
Use comboboxes when options need to be filtered based on user input.

**Example:**
- Search within categories
- Filter by name or description
- Find items in long lists
- Quick selection from many options

### Flexible Input
Use comboboxes when users might type a custom value or select from options.

**Example:**
- Custom tags
- Flexible categorization
- Mixed input and selection
- Free-form with suggestions

## Anatomy

Combobox components include these elements:

1. **Input Field** - Text input where users type to filter or enter values
2. **Dropdown Arrow** - Visual indicator that options are available
3. **Options List** - Dropdown panel showing filtered options
4. **Option Items** - Individual selectable items in the list
5. **Label** - Text that describes what the combobox is for
6. **Helper Text** - Optional guidance or error messages

## Accessibility

### Keyboard Navigation
- Tab key moves focus to the combobox
- Typing filters options and opens dropdown
- Arrow keys navigate through filtered options
- Enter selects the focused option
- Escape closes the dropdown
- Focus indicators must be clearly visible

### Screen Reader Support
- Combobox uses `role="combobox"` for proper semantics
- `aria-expanded` indicates whether dropdown is open
- `aria-autocomplete="list"` indicates list autocomplete
- `aria-controls` links input to options list
- `aria-activedescendant` indicates focused option
- Options use `role="option"` and `aria-selected`
- Label is associated with the combobox using `htmlFor` and `id`
- Helper text is associated with `aria-describedby`

### Visual Requirements
- Interactive area must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Text must be readable when zoomed to 200%
- Focus indicators must meet contrast requirements
- Options list must be clearly visible and readable

### Best Practices
- Always provide a label for the combobox
- Use placeholder text to guide input
- Ensure options are clearly readable
- Provide sufficient options (at least 3-5 visible)
- Make filtering behavior obvious
- Handle empty states gracefully
- Consider debouncing for large option lists

## Content Guidelines

### Labels
- Use clear, descriptive labels
- Match the label to the type of selection
- Keep labels concise (1-4 words typically)
- Use consistent terminology across forms

### Placeholders
- Use placeholders to guide input behavior
- Make placeholders descriptive (e.g., "Search countries..." not just "Select")
- Don't use placeholders as a replacement for labels
- Keep placeholder text concise

### Options
- Write option text in sentence case
- Keep option text short and scannable
- Use consistent formatting across options
- Order options logically (alphabetical, by frequency, or by importance)

## Best Practices

### When to Use
- Large lists of options (10+ items)
- Searchable selection needed
- Users need to filter options
- Autocomplete functionality required
- When typing speeds up selection
- Dynamic option filtering

### When Not to Use
- Small lists (use Select instead)
- Options need explanation (use Select with groups)
- Users need to see all options at once (use Select)
- Simple binary choices (use Toggle or Checkbox)
- When space is extremely limited

### Design Considerations
- Ensure adequate touch target size on mobile
- Make the dropdown arrow clearly visible
- Provide sufficient spacing between options
- Consider maximum width needed for option text
- Test with various option lengths
- Handle long option lists gracefully
- Consider virtual scrolling for very large lists

## Related Components

- **Input** - For free-form text entry without selection
- **Select** - For choosing from predefined options without search
- **Autocomplete** - Similar to combobox but may allow custom values

## Technical Considerations

### Implementation
- Comboboxes use native input elements for text entry
- Options list is conditionally rendered based on state
- Filtering happens client-side by default
- Keyboard navigation is handled with event listeners
- Focus management ensures proper tab order

### Browser Support
- Native inputs work across all modern browsers
- Custom dropdown styling may vary slightly
- Keyboard navigation is consistent
- Focus management works with assistive technologies

### Performance
- Client-side filtering is fast for moderate lists (< 1000 items)
- Consider debouncing input for very large lists
- Virtual scrolling can help with 1000+ items
- Memoization helps optimize filtering

## Common Patterns

### Searchable Country Selection
Common pattern for selecting from a large list of countries.

```tsx:live
<Combobox
  label="Country"
  placeholder="Search for a country..."
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" }
  ]}
/>
```

### Product Search
For searching and selecting products.

```tsx:live
<Combobox
  label="Product"
  placeholder="Search products..."
  helperText="Type to filter products"
  options={[
    { value: "laptop", label: "Laptop Computer" },
    { value: "phone", label: "Smartphone" },
    { value: "tablet", label: "Tablet Device" },
    { value: "watch", label: "Smart Watch" }
  ]}
/>
```

## Validation

### Visual Validation
- Combobox has clear visual state (default, focus, error, disabled)
- Error state is immediately obvious
- Helper text is clearly associated with the combobox
- Options list is clearly visible when open
- Selected option is visually indicated

### Functional Validation
- Typing filters options correctly
- Selection works as expected
- Keyboard navigation functions properly
- Disabled state prevents interaction
- Required state is enforced when needed

### Accessibility Validation
- Label is properly associated with the combobox
- Keyboard navigation works correctly
- Screen readers announce the combobox and its state
- Focus indicators meet contrast requirements
- Options are announced correctly
- Helper text is announced to screen readers
