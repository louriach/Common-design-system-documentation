---
title: Select
description: Dropdown component for choosing a single option from a list of predefined choices
category: Forms
---

## Overview

Select components let people pick one option from a dropdown list of predefined choices. They work well when you have multiple options but want to save space, or when the options are too numerous for radio buttons. Selects are ideal for categories, countries, states, or any scenario where users choose from a fixed set of options.

## Usage

### Basic Select
```tsx:live
<Select placeholder="Choose an option">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>
```

### Select with Label
```tsx:live
<Select label="Country" placeholder="Select a country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
</Select>
```

### Required Select
```tsx:live
<Select label="Payment Method" required placeholder="Choose payment method">
  <option value="credit">Credit Card</option>
  <option value="paypal">PayPal</option>
  <option value="bank">Bank Transfer</option>
</Select>
```

### Select with Helper Text
```tsx:live
<Select label="Shipping Option" helperText="Standard shipping takes 5-7 business days" placeholder="Select shipping">
  <option value="standard">Standard Shipping</option>
  <option value="express">Express Shipping</option>
  <option value="overnight">Overnight Shipping</option>
</Select>
```

### Error State
```tsx:live
<Select label="State" error helperText="Please select a state" placeholder="Choose a state">
  <option value="ny">New York</option>
  <option value="ca">California</option>
  <option value="tx">Texas</option>
</Select>
```

### Disabled Select
```tsx:live
<Select label="Status" disabled value="active">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
  <option value="pending">Pending</option>
</Select>
```

### Select with Option Groups
```tsx:live
<Select label="Course" placeholder="Select a course">
  <optgroup label="Web Development">
    <option value="html">HTML Basics</option>
    <option value="css">CSS Fundamentals</option>
    <option value="js">JavaScript</option>
  </optgroup>
  <optgroup label="Data Science">
    <option value="python">Python</option>
    <option value="r">R Programming</option>
    <option value="sql">SQL</option>
  </optgroup>
</Select>
```

## Props

- `label`: string - Label text displayed above the select
- `placeholder`: string - Placeholder option text (shown when no value is selected)
- `value`: string - Controlled selected value
- `defaultValue`: string - Uncontrolled initial selected value
- `onChange`: function - Change event handler
- `onBlur`: function - Blur event handler
- `onFocus`: function - Focus event handler
- `disabled`: boolean - Disables the select (default: false)
- `required`: boolean - Marks the select as required (default: false)
- `error`: boolean - Shows error state styling and message (default: false)
- `helperText`: string - Helper text or error message displayed below select
- `name`: string - Name attribute for form submission
- `id`: string - Unique identifier (auto-generated if not provided)
- `aria-label`: string - Accessible label for screen readers
- `aria-describedby`: string - ID of element describing the select
- `multiple`: boolean - Allows multiple selections (default: false)
- `size`: number - Number of visible options in the list

## States

### Default
The select appears in its normal, interactive state with all options available.

**Visual characteristics:**
- Dropdown arrow indicator visible
- Border uses standard color
- All options are selectable
- Placeholder shown when no value selected

### Focus
When the select receives keyboard or mouse focus, it shows a visible focus indicator.

**Visual characteristics:**
- Focus ring appears around the select
- Dropdown can be opened with keyboard
- Arrow key navigation available when open

### Disabled
A disabled select cannot be interacted with and appears visually muted.

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

### Form Selection
Use selects for choosing from predefined options in forms, such as country, state, or category selections.

**Example:**
- Country selection
- State or province
- Category or type
- Status selection

### Filtering
Use selects to filter content or data by specific criteria.

**Example:**
- Sort by options
- Filter by category
- Filter by date range
- Filter by status

### Settings
Use selects for configuration options where users choose from a limited set of values.

**Example:**
- Language selection
- Theme preference
- Time zone selection
- Currency selection

### Navigation
Use selects for navigating between different views or sections.

**Example:**
- Page size selection
- View mode selection
- Display options

## Anatomy

Select components include these elements:

1. **Label** - Text that describes what the select is for
2. **Select Element** - The native dropdown control
3. **Options** - Individual choices within the dropdown
4. **Option Groups** - Optional grouping of related options
5. **Dropdown Arrow** - Visual indicator that the field is a dropdown
6. **Helper Text** - Optional guidance or error messages
7. **Placeholder** - Optional default option shown when nothing is selected

## Accessibility

### Keyboard Navigation
- Tab key moves focus to the select
- Space or Enter opens the dropdown
- Arrow keys navigate through options when open
- Escape closes the dropdown
- Typing jumps to matching options
- Focus indicators must be clearly visible

### Screen Reader Support
- Label is associated with the select using `htmlFor` and `id`
- Required state is announced
- Error state is announced with `aria-invalid`
- Helper text is associated with `aria-describedby`
- Option groups are announced with their labels

### Visual Requirements
- Interactive area must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Text must be readable when zoomed to 200%
- Dropdown arrow must be clearly visible
- Focus indicators must meet contrast requirements

### Best Practices
- Always provide a label for the select
- Use placeholder option to guide selection
- Group related options with `optgroup` when helpful
- Keep option text concise and clear
- Order options logically (alphabetical, by frequency, or by importance)
- Avoid too many options (consider searchable select for 10+ options)
- Use helper text to explain the selection or provide context

## Content Guidelines

### Labels
- Use clear, descriptive labels
- Match the label to the type of selection
- Keep labels concise (1-4 words typically)
- Use consistent terminology across forms

### Options
- Write option text in sentence case
- Keep option text short and scannable
- Use consistent formatting across options
- Order options logically
- Avoid redundant text (don't repeat the label in each option)

### Placeholders
- Use placeholders to guide selection
- Make placeholders descriptive (e.g., "Choose a country" not just "Select")
- Don't use placeholders as a replacement for labels
- Keep placeholder text concise

## Best Practices

### When to Use
- Choosing from a list of 5-15 predefined options
- Space is limited (selects take less space than radio buttons)
- Options are well-known and don't need explanation
- The selection is a single choice from a fixed set
- Options are similar in nature (all countries, all states, etc.)

### When Not to Use
- Only 2-3 options (use radio buttons instead)
- Options need explanation (use radio buttons with descriptions)
- Users need to see all options at once (use radio buttons)
- Very long lists (consider searchable select or combobox)
- Multiple selections needed (use checkboxes or multi-select)
- Options are frequently added/changed (consider other input types)

### Design Considerations
- Ensure adequate touch target size on mobile
- Make the dropdown arrow clearly visible
- Provide sufficient spacing between options
- Use option groups for logical organization
- Consider the maximum width needed for option text
- Test with various option lengths

## Related Components

- **Input** - For free-form text entry
- **Radio** - For selecting from 2-5 visible options
- **Checkbox** - For multiple selections
- **Combobox** - For searchable dropdowns with many options

## Technical Considerations

### Implementation
- Selects use native HTML `<select>` elements for best accessibility
- Custom styling maintains native keyboard and screen reader support
- Dropdown arrow is positioned absolutely and doesn't interfere with selection
- Option groups use native `<optgroup>` for proper semantics

### Browser Support
- Native selects work across all modern browsers
- Custom styling may vary slightly between browsers
- Mobile browsers provide native picker interfaces
- Keyboard navigation is consistent across platforms

### Performance
- Native selects have minimal performance impact
- Large option lists (100+ items) may benefit from virtualization
- Consider lazy loading for very large datasets
- Option groups help organize long lists

## Common Patterns

### Country/State Selection
Common pattern for location-based selections.

```tsx:live
<Select label="Country" placeholder="Select your country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
  <option value="de">Germany</option>
  <option value="fr">France</option>
</Select>
```

### Category Selection
Selecting from predefined categories.

```tsx:live
<Select label="Category" placeholder="Choose a category">
  <option value="electronics">Electronics</option>
  <option value="clothing">Clothing</option>
  <option value="books">Books</option>
  <option value="home">Home & Garden</option>
  <option value="sports">Sports & Outdoors</option>
</Select>
```

### Status Selection
Choosing from status options.

```tsx:live
<Select label="Status" placeholder="Select status">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
  <option value="pending">Pending</option>
  <option value="archived">Archived</option>
</Select>
```

## Validation

### Visual Validation
- Select has clear visual state (default, focus, error, disabled)
- Error state is immediately obvious
- Helper text is clearly associated with the select
- Dropdown arrow is always visible

### Functional Validation
- Required selects prevent form submission when empty
- Error messages appear when validation fails
- Disabled state prevents interaction
- Options are all selectable when enabled

### Accessibility Validation
- Label is properly associated with the select
- Keyboard navigation works correctly
- Screen readers announce the select and its state
- Focus indicators meet contrast requirements
- Helper text is announced to screen readers
