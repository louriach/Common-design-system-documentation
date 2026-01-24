---
title: Checkbox
description: Selection control component for choosing one or more options from a list
category: Forms
---

## Overview

Checkboxes let people choose one or more options from a list. While radio buttons restrict selection to a single choice, checkboxes support multiple selections. Each checkbox operates independently, making them well-suited for forms, filtering, batch actions, and accepting terms and conditions.

## Usage

### Basic Checkbox
```tsx:live
<Checkbox label="Accept terms and conditions" />
```

### Checked State
```tsx:live
<Checkbox label="Subscribe to newsletter" checked />
```

### Disabled State
```tsx:live
<Checkbox label="Disabled option" disabled />
```

### Required Checkbox
```tsx:live
<Checkbox label="I agree to the terms" required />
```

### Checkbox with Helper Text
```tsx:live
<Checkbox label="Send me updates" helperText="We'll send you product updates and news" />
```

### Error State
```tsx:live
<Checkbox label="Accept terms" error helperText="You must accept the terms to continue" />
```

### Indeterminate State
```tsx:live
<Checkbox label="Select all" indeterminate />
```

## Props

- `label`: string - Label text displayed next to the checkbox
- `checked`: boolean - Controlled checked state
- `defaultChecked`: boolean - Uncontrolled initial checked state
- `indeterminate`: boolean - Shows indeterminate state (partially selected)
- `disabled`: boolean - Disables the checkbox (default: false)
- `required`: boolean - Marks the checkbox as required (default: false)
- `error`: boolean - Shows error state styling and message (default: false)
- `helperText`: string - Helper text or error message displayed below checkbox
- `name`: string - Name attribute for form submission
- `value`: string - Value attribute for form submission
- `id`: string - Unique identifier (auto-generated if not provided)
- `onChange`: function - Change event handler
- `onBlur`: function - Blur event handler
- `onFocus`: function - Focus event handler
- `className`: string - Additional CSS classes
- `aria-label`: string - Accessible label for screen readers
- `aria-describedby`: string - ID of element describing the checkbox

## States

### Unselected (Default)
The default state when no option is selected.

**Visual indicators:**
- Empty checkbox square
- Neutral border color
- Label text in normal color

### Selected
State when the option is checked.

**Visual indicators:**
- Checkmark icon inside checkbox
- Filled background color
- Border matches background

### Indeterminate
State when some but not all options in a group are selected (typically used with parent/child relationships).

**Visual indicators:**
- Horizontal line or dash inside checkbox
- Filled background color
- Used for "select all" scenarios

### Focus
Active state when the checkbox receives keyboard or mouse focus.

**Visual indicators:**
- Focus ring around checkbox
- Border color changes to indicate focus
- Keyboard users navigate with Tab

**Accessibility:**
- Keyboard users navigate with Tab
- Screen readers announce checkbox state
- Focus indicator must meet WCAG 2.1 AA contrast (3:1)

### Disabled
State when the checkbox cannot be interacted with.

**Visual indicators:**
- Reduced opacity
- Grayed out appearance
- No cursor interaction

**Accessibility:**
- Not focusable via keyboard
- Screen readers announce as disabled
- Visual contrast requirements relaxed

### Error
State indicating validation failure or required field not checked.

**Visual indicators:**
- Red border color
- Error message displayed below
- Error icon (optional)

**Use cases:**
- Required checkbox not checked
- Validation rule violation
- Terms acceptance required

### Read-Only
State when checkbox can be viewed but not modified.

**Visual indicators:**
- Different background color
- No cursor interaction
- State remains visible

**Accessibility:**
- Still focusable
- Screen readers announce as read-only
- Maintains visual contrast

## Use Cases

### Forms
Checkboxes are commonly used in forms for:
- Terms and conditions acceptance
- Newsletter subscriptions
- Multiple choice questions
- Preference selections
- Feature toggles

### Filtering
Used to filter data on pages, in menus, or within components:
- Product filters (size, color, brand)
- Search result filters
- Data table filters
- Category selections

### Batch Actions
Used in data tables and lists for:
- Selecting multiple items
- Bulk operations (delete, move, archive)
- Select all functionality

### Nested Selections
Used when there's a parent and child relationship:
- Parent checkbox selects all children
- Child checkboxes can be selected individually
- Parent shows indeterminate state when some children are selected

## Anatomy

### Components

1. **Checkbox Input**: The interactive control element
2. **Label**: Text describing the option (positioned to the right by default)
3. **Helper Text** (optional): Additional context or error message
4. **Group Label** (optional): Label for a group of checkboxes

### Label Position

**Default (Right):**
- Label appears to the right of the checkbox
- Most common pattern
- Better for left-to-right languages

**Left (Alternative):**
- Label appears to the left of the checkbox
- Less common but sometimes used
- Consider RTL languages

## Accessibility

### Labels
- **Always provide a visible label** unless you have an approved accessibility exemption
- Use `<label>` element with `htmlFor` attribute matching checkbox `id`
- If label is hidden, use `aria-label` or `aria-labelledby`
- Labels should be clear, concise, and descriptive

### Keyboard Navigation
- **Tab**: Move focus to checkbox
- **Space**: Toggle checked state
- **Arrow keys**: Navigate between checkboxes in a group (when grouped)
- **Enter**: Toggle checked state (some implementations)

### Screen Readers
- Checkboxes are announced with their label
- State is announced: "checked", "unchecked", or "indeterminate"
- Required checkboxes are announced as "required"
- Disabled checkboxes are announced as "disabled"
- Error states are announced with error message

### Focus Management
- Visible focus indicator must meet WCAG 2.1 AA contrast (3:1)
- Focus ring should be clearly visible
- Both checkbox and label should be clickable (larger target)

### Color Contrast
- Checkbox border must meet 3:1 non-text contrast
- Checkmark/indicator must meet 4.5:1 contrast against background
- Label text must meet 4.5:1 contrast for normal text, 3:1 for large text
- Error states must use color plus text/icon (not color alone)

### Grouping
- Use `<fieldset>` with `<legend>` for checkbox groups
- Group label provides context for all options
- Each checkbox should have its own label
- Use `aria-describedby` to associate helper text

## Content Guidelines

### Labels
- Use clear, concise labels (1-3 words typically)
- Use sentence-style capitalization
- Be specific about what the checkbox controls
- Don't use colons after labels

**Examples:**
- ✅ "Accept terms and conditions"
- ✅ "Subscribe to newsletter"
- ✅ "Enable notifications"
- ❌ "Checkbox:"
- ❌ "Do you want to subscribe?"

### Helper Text
- Provide additional context when needed
- Use sentence-style capitalization
- Write as full sentences with punctuation
- Appears below checkbox (unless replaced by error)

**Examples:**
- ✅ "We'll send you product updates and news."
- ✅ "You must accept to continue."
- ❌ "Required"
- ❌ "check this box"

### Error Messages
- Be specific about what's wrong
- Provide guidance on how to fix it
- Use clear, actionable language

**Examples:**
- ✅ "You must accept the terms to continue."
- ✅ "Please select at least one option."
- ❌ "Error"
- ❌ "Invalid"

### Group Labels
- Use sentence-style capitalization
- Clearly describe what the group represents
- Provide context for all options below

**Examples:**
- ✅ "Select your interests"
- ✅ "Notification preferences"
- ❌ "Options:"
- ❌ "CHECKBOXES"

## Best Practices

### When to Use
- ✅ User needs to select multiple options
- ✅ User needs to toggle a single option on/off
- ✅ Terms and conditions acceptance
- ✅ Filtering and batch actions
- ✅ Nested selections with parent/child relationships

### When Not to Use
- ❌ User can select only one option (use Radio buttons)
- ❌ Action should be instant (use Toggle switch)
- ❌ Binary on/off state with immediate effect (use Toggle switch)
- ❌ Simple yes/no question (consider Radio buttons or Toggle)

### Design Guidelines

1. **Consistent Spacing**: Use consistent spacing between checkboxes in a group
2. **Clear Labels**: Always provide visible, descriptive labels
3. **Adequate Targets**: Ensure checkbox and label are both clickable (minimum 44x44px touch target)
4. **Visual Hierarchy**: Use group labels to organize related options
5. **Error Feedback**: Provide clear, actionable error messages

### Grouping Patterns

**Vertical Stacking (Recommended):**
- Easier to read and scan
- Better for accessibility
- Preferred for most use cases

**Horizontal Layout:**
- Use when space is limited
- Only for short labels
- Less accessible, use sparingly

**Nested Groups:**
- Use for parent/child relationships
- Parent checkbox controls all children
- Indeterminate state shows partial selection

## Related Components

- **Radio**: For single selection from multiple options
- **Toggle Switch**: For instant on/off actions
- **Select**: For choosing from a dropdown list
- **Input**: For text entry
- **Form**: Container for multiple form controls

## Examples from Design Systems

### Chakra UI Pattern
- Supports variants: outline, subtle, solid
- Multiple color palettes
- Sizes: xs, sm, md, lg
- Composition with Field component
- CheckboxGroup for grouping
- Indeterminate state support

### Carbon Design System Pattern
- Default and fluid styles
- Three states: unselected, selected, indeterminate
- Group states: enabled, disabled, read-only, error, warning
- Nesting support for parent/child relationships
- Helper text and error messages
- AI presence variant

### Base Web Pattern
- Clean, minimal design
- Consistent spacing and typography
- Clear focus states
- Accessible color contrast

### Ariakit Pattern
- Native checkbox support
- Custom checkbox rendering
- CheckboxProvider for group management
- Accessible by default
- Keyboard navigation support

## Technical Considerations

### Indeterminate State
The indeterminate state is useful for:
- "Select all" checkboxes
- Parent/child relationships
- Partial selections in groups

**Implementation:**
- Set `indeterminate` prop to `true`
- Visual indicator (dash/horizontal line)
- State is separate from checked/unchecked

### Form Integration
- Use `name` attribute for form submission
- Use `value` attribute to identify selected options
- Checked checkboxes submit their value
- Unchecked checkboxes don't submit (unless using hidden inputs)

### Controlled vs Uncontrolled
- **Controlled**: Use `checked` prop with `onChange` handler
- **Uncontrolled**: Use `defaultChecked` prop
- Choose based on form state management needs

### Group Management
- Use CheckboxGroup component for related checkboxes
- Share state across group members
- Handle "select all" functionality
- Manage indeterminate states for parent checkboxes

## Common Patterns

### Terms and Conditions
```tsx
<Checkbox
  label="I agree to the terms and conditions"
  required
  helperText="You must accept to continue"
/>
```

### Newsletter Subscription
```tsx
<Checkbox
  label="Subscribe to newsletter"
  helperText="We'll send you product updates and news"
/>
```

### Filter Group
```tsx
<fieldset>
  <legend>Filter by category</legend>
  <Checkbox label="Electronics" />
  <Checkbox label="Clothing" />
  <Checkbox label="Books" />
</fieldset>
```

### Select All Pattern
```tsx
<div>
  <Checkbox
    label="Select all"
    indeterminate={someSelected && !allSelected}
    checked={allSelected}
    onChange={handleSelectAll}
  />
  <div className="ml-6">
    <Checkbox label="Option 1" />
    <Checkbox label="Option 2" />
    <Checkbox label="Option 3" />
  </div>
</div>
```

### Error State
```tsx
<Checkbox
  label="Accept terms"
  required
  error={!accepted}
  helperText={!accepted ? "You must accept the terms" : undefined}
/>
```

## Validation

### Required Validation
- Check if required checkbox is checked before form submission
- Show error state if unchecked when form is submitted
- Provide clear error message

### Group Validation
- Validate that at least one option is selected (if required)
- Validate that maximum selections aren't exceeded (if limited)
- Show appropriate error messages

### Real-Time Validation
- Validate on blur (when user leaves checkbox)
- Validate on form submission
- Provide immediate feedback for better UX
