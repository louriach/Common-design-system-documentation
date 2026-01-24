---
title: Radio
description: Selection control component for choosing a single option from a mutually exclusive group
category: Forms
---

## Overview

Radio buttons let people choose a single option from a set of mutually exclusive choices. While checkboxes support multiple selections, radio buttons guarantee that only one option is selected at a time. They work well for single-choice questions, preference settings, and form selections where choosing one option excludes the others.

## Usage

### Basic Radio Button
```tsx:live
<Radio name="option" label="Option 1" value="1" />
```

### Radio Group
```tsx:live
<div>
  <Radio name="framework" label="React" value="react" defaultChecked />
  <Radio name="framework" label="Vue" value="vue" />
  <Radio name="framework" label="Angular" value="angular" />
</div>
```

### Selected State
```tsx:live
<Radio name="status" label="Active" value="active" defaultChecked />
```

### Disabled State
```tsx:live
<div>
  <Radio name="choice" label="Available" value="available" defaultChecked />
  <Radio name="choice" label="Unavailable" value="unavailable" disabled />
</div>
```

### Required Radio Group
```tsx:live
<fieldset>
  <legend className="text-sm font-medium mb-2">Payment Method *</legend>
  <Radio name="payment" label="Credit Card" value="card" required />
  <Radio name="payment" label="PayPal" value="paypal" required />
  <Radio name="payment" label="Bank Transfer" value="bank" required />
</fieldset>
```

### Radio with Helper Text
```tsx:live
<Radio name="plan" label="Basic Plan" value="basic" helperText="Perfect for individuals" />
```

### Error State
```tsx:live
<Radio name="terms" label="I agree" value="agree" error helperText="You must select an option" />
```

## Props

- `name`: string - **Required** - Name attribute that groups radio buttons together
- `value`: string - **Required** - Value submitted when this option is selected
- `label`: string - Label text displayed next to the radio button
- `checked`: boolean - Controlled checked state
- `defaultChecked`: boolean - Uncontrolled initial checked state
- `disabled`: boolean - Disables the radio button (default: false)
- `required`: boolean - Marks the radio group as required (default: false)
- `error`: boolean - Shows error state styling and message (default: false)
- `helperText`: string - Helper text or error message displayed below radio button
- `onChange`: function - Change event handler
- `onBlur`: function - Blur event handler
- `onFocus`: function - Focus event handler
- `id`: string - Unique identifier (auto-generated if not provided)
- `aria-label`: string - Accessible label for screen readers
- `aria-describedby`: string - ID of element describing the radio button

## States

### Unselected (Default)
The default state when no option in the group is selected.

**Visual indicators:**
- Empty radio button circle
- Neutral border color
- Label text in normal color

### Selected
State when this option is the selected choice in the group.

**Visual indicators:**
- Filled dot inside the radio button circle
- Border color matches the selected state
- Only one radio button in a group can be selected at a time

### Focus
Active state when the radio button receives keyboard or mouse focus.

**Visual indicators:**
- Focus ring around the radio button
- Border color changes to indicate focus
- Keyboard users navigate with Arrow keys within the group

**Accessibility:**
- Keyboard users navigate with Tab to enter the group
- Arrow keys (Up/Down/Left/Right) navigate between options in the group
- Screen readers announce the radio button label and state
- Focus indicator must meet WCAG 2.1 AA contrast (3:1)

### Disabled
State when the radio button cannot be interacted with.

**Visual indicators:**
- Reduced opacity
- Grayed out appearance
- No cursor interaction

**Accessibility:**
- Not focusable via keyboard
- Screen readers announce as disabled
- Visual contrast requirements relaxed

### Error
State indicating validation failure or required group not selected.

**Visual indicators:**
- Red border color
- Error message displayed
- Error icon (optional)

**Use cases:**
- Required radio group not selected
- Validation rule violation
- System error

### Read-Only
State when radio button can be viewed but not modified.

**Visual indicators:**
- Different background color
- No cursor interaction
- State remains visible

**Accessibility:**
- Still focusable
- Screen readers announce as read-only
- Maintains visual contrast for readability

## Use Cases

### Forms
Radio buttons are commonly used in forms for:
- Single-choice questions
- Preference selections
- Payment method selection
- Shipping options
- Account type selection

### Settings
Used in settings and configuration:
- Theme selection (light/dark)
- Language preferences
- Display options
- Notification preferences

### Filtering
Used to filter data with mutually exclusive options:
- Sort order (ascending/descending)
- View type (list/grid)
- Date range selection

### Navigation
Used for navigation when only one section can be active:
- Tab-like navigation
- Step indicators
- Section selection

## Anatomy

### Components

1. **Radio Input**: The interactive control element (circular)
2. **Label**: Text describing the option (positioned to the right by default)
3. **Helper Text** (optional): Additional context or error message
4. **Group Label** (optional): Label for a group of radio buttons (use `<fieldset>` and `<legend>`)

### Label Position

**Default (Right):**
- Label appears to the right of the radio button
- Most common pattern
- Better for left-to-right languages

**Left (Alternative):**
- Label appears to the left of the radio button
- Less common but sometimes used
- Consider RTL languages

## Accessibility

### Grouping
- **Always group radio buttons** using the `name` attribute
- Use `<fieldset>` with `<legend>` for visual grouping
- Group label provides context for all options
- Each radio button should have its own label

### Labels
- **Always provide a visible label** for each radio button
- Use `<label>` element with `htmlFor` attribute matching radio `id`
- If label is hidden, use `aria-label` or `aria-labelledby`
- Labels should be clear, concise, and descriptive

### Keyboard Navigation
- **Tab**: Move focus to the radio group (first button)
- **Arrow keys**: Navigate between radio buttons in the same group
  - Up/Down arrows: Navigate vertically
  - Left/Right arrows: Navigate horizontally
- **Space**: Select the focused radio button
- **Tab again**: Move focus out of the group

### Screen Readers
- Radio buttons are announced with their label
- State is announced: "checked" or "not checked"
- Group context is announced (via fieldset legend)
- Required groups are announced as "required"
- Disabled radio buttons are announced as "disabled"
- Error states are announced with error message

### Focus Management
- Visible focus indicator must meet WCAG 2.1 AA contrast (3:1)
- Focus ring should be clearly visible
- Both radio button and label should be clickable (larger target)
- Focus stays within the group when using arrow keys

### Color Contrast
- Radio button border must meet 3:1 non-text contrast
- Selected dot must meet 4.5:1 contrast against background
- Label text must meet 4.5:1 contrast for normal text, 3:1 for large text
- Error states must use color plus text/icon (not color alone)

## Content Guidelines

### Labels
- Use clear, concise labels (1-3 words typically)
- Use sentence-style capitalization
- Be specific about what the option represents
- Don't use colons after labels

**Examples:**
- ✅ "Credit card"
- ✅ "Express shipping"
- ✅ "Monthly billing"
- ❌ "Radio:"
- ❌ "Do you want option A?"

### Group Labels
- Use sentence-style capitalization
- Clearly describe what the group represents
- Provide context for all options below
- Use `<legend>` for fieldset groups

**Examples:**
- ✅ "Select payment method"
- ✅ "Choose your plan"
- ✅ "Notification frequency"
- ❌ "Options:"
- ❌ "RADIO BUTTONS"

### Helper Text
- Provide additional context when needed
- Use sentence-style capitalization
- Write as full sentences with punctuation
- Appears below the radio button (unless replaced by error)

**Examples:**
- ✅ "This option includes all features."
- ✅ "Recommended for most users."
- ❌ "Required"
- ❌ "select this"

### Error Messages
- Be specific about what's wrong
- Provide guidance on how to fix it
- Use clear, actionable language

**Examples:**
- ✅ "Please select a payment method."
- ✅ "You must choose an option to continue."
- ❌ "Error"
- ❌ "Invalid"

## Best Practices

### When to Use
- ✅ User must select exactly one option
- ✅ Options are mutually exclusive
- ✅ Small number of options (typically 2-6)
- ✅ Options are clear and distinct
- ✅ Selection is required

### When Not to Use
- ❌ User can select multiple options (use Checkboxes)
- ❌ User can select zero options (use Checkboxes or make optional)
- ❌ Large number of options (use Select/Dropdown)
- ❌ Binary on/off toggle (use Toggle switch)
- ❌ Instant action (use Toggle switch or Button)

### Design Guidelines

1. **Grouping**: Always group related radio buttons with the same `name` attribute
2. **Layout**: Arrange vertically when possible for better readability
3. **Spacing**: Provide adequate spacing between radio buttons (typically 16-24px)
4. **Visual Hierarchy**: Use group labels to organize related options
5. **Consistency**: Use consistent styling across all radio buttons in a group

### Grouping Patterns

**Vertical Stacking (Recommended):**
- Easier to read and scan
- Better for accessibility
- Preferred for most use cases
- Allows longer labels

**Horizontal Layout:**
- Use when space is limited
- Only for short labels (1-2 words)
- Less accessible, use sparingly
- Can be confusing for users

**Grid Layout:**
- Use for 2-4 options with similar length labels
- Maintains visual balance
- Good for tile-style selections

## Related Components

- **Checkbox**: For multiple selections
- **Toggle Switch**: For binary on/off actions
- **Select**: For choosing from many options
- **Button Group**: For action-based selections
- **Form**: Container for multiple form controls

## Examples from Design Systems

### Chakra UI Pattern
- RadioGroup component for managing groups
- Supports variants and sizes
- Composition with Field component
- Keyboard navigation built-in
- Accessible by default

### Carbon Design System Pattern
- Default and tile variants
- Three states: unselected, selected, disabled
- Group states: enabled, disabled, read-only, error, warning
- Helper text and error messages
- Comprehensive keyboard support

### Base Web Pattern
- Clean, minimal design
- Consistent spacing and typography
- Clear focus states
- Accessible color contrast

### Skyscanner Pattern
- Default, disabled, and validation states
- Group management
- Clear visual feedback
- Mobile-optimized

### Ariakit Pattern
- RadioGroup component
- Native radio support
- Custom radio rendering
- Accessible by default
- Keyboard navigation support

## Technical Considerations

### Group Management
- All radio buttons in a group must share the same `name` attribute
- Only one radio button in a group can be selected
- Selecting a new option automatically deselects the previous one
- Use RadioGroup component or manage state manually

### Form Integration
- Use `name` attribute for form submission
- Use `value` attribute to identify selected option
- Selected radio button submits its value
- Unselected radio buttons don't submit

### Controlled vs Uncontrolled
- **Controlled**: Use `checked` prop with `onChange` handler
- **Uncontrolled**: Use `defaultChecked` prop
- Choose based on form state management needs
- For groups, typically use controlled with shared state

### State Management
- Radio groups require shared state management
- Use React state, form libraries, or RadioGroup component
- Ensure only one option can be selected at a time
- Handle selection changes properly

## Common Patterns

### Payment Method Selection
```tsx
<fieldset>
  <legend>Payment Method</legend>
  <Radio name="payment" label="Credit Card" value="card" />
  <Radio name="payment" label="PayPal" value="paypal" />
  <Radio name="payment" label="Bank Transfer" value="bank" />
</fieldset>
```

### Theme Selection
```tsx
<div>
  <Radio name="theme" label="Light" value="light" defaultChecked />
  <Radio name="theme" label="Dark" value="dark" />
  <Radio name="theme" label="System" value="system" />
</div>
```

### Required Selection
```tsx
<fieldset>
  <legend>Select your plan *</legend>
  <Radio name="plan" label="Basic" value="basic" required />
  <Radio name="plan" label="Pro" value="pro" required />
  <Radio name="plan" label="Enterprise" value="enterprise" required />
</fieldset>
```

### Error State
```tsx
<fieldset>
  <legend>Choose an option</legend>
  <Radio 
    name="choice" 
    label="Option A" 
    value="a" 
    error={!selected}
    helperText={!selected ? "Please select an option" : undefined}
  />
  <Radio name="choice" label="Option B" value="b" error={!selected} />
</fieldset>
```

### Horizontal Layout
```tsx
<div className="flex gap-4">
  <Radio name="view" label="List" value="list" />
  <Radio name="view" label="Grid" value="grid" />
  <Radio name="view" label="Card" value="card" />
</div>
```

## Validation

### Required Validation
- Check if a radio button in a required group is selected before form submission
- Show error state if no option is selected when form is submitted
- Provide clear error message

### Group Validation
- Validate that exactly one option is selected (if required)
- Show appropriate error messages
- Highlight the group or individual buttons on error

### Real-Time Validation
- Validate on blur (when user leaves the group)
- Validate on form submission
- Provide immediate feedback for better UX

## Radio vs Checkbox

### Use Radio Buttons When:
- User must select exactly one option
- Options are mutually exclusive
- Selection is required
- Small number of options (2-6)

### Use Checkboxes When:
- User can select multiple options
- User can select zero options
- Options are independent
- "Select all" functionality needed

### Use Toggle Switch When:
- Binary on/off state
- Action is applied immediately
- Simple yes/no question
- Setting or preference toggle
