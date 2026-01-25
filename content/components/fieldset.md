---
title: Fieldset
description: Semantic container component for grouping related form controls together
category: Forms
---

## Overview

Fieldset components group related form controls together, creating visual and semantic relationships between inputs. They help organize complex forms, improve accessibility, and make it easier for people to understand which fields belong together. Fieldsets work well for grouping address fields, payment information, preferences, and any set of related form controls.

## Usage

### Basic Fieldset
```tsx:live
<Fieldset legend="Contact Information">
  <Input label="Name" placeholder="Enter your name" />
  <Input label="Email" type="email" placeholder="you@example.com" />
  <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
</Fieldset>
```

### Fieldset with Required Fields
```tsx:live
<Fieldset legend="Payment Details" required>
  <Input label="Card Number" required placeholder="1234 5678 9012 3456" />
  <Input label="Expiration Date" required placeholder="MM/YY" />
  <Input label="CVV" required placeholder="123" />
</Fieldset>
```

### Fieldset with Helper Text
```tsx:live
<Fieldset legend="Shipping Address" helperText="We'll use this address for delivery">
  <Input label="Street Address" placeholder="123 Main St" />
  <Input label="City" placeholder="New York" />
  <Input label="ZIP Code" placeholder="10001" />
</Fieldset>
```

### Radio Group in Fieldset
```tsx:live
<Fieldset legend="Payment Method" required>
  <Radio name="payment" label="Credit Card" value="card" required defaultChecked />
  <Radio name="payment" label="PayPal" value="paypal" required />
  <Radio name="payment" label="Bank Transfer" value="bank" required />
</Fieldset>
```

### Checkbox Group in Fieldset
```tsx:live
<Fieldset legend="Notification Preferences">
  <Checkbox label="Email notifications" />
  <Checkbox label="SMS notifications" />
  <Checkbox label="Push notifications" />
</Fieldset>
```

### Disabled Fieldset
```tsx:live
<Fieldset legend="Account Settings" disabled>
  <Input label="Username" value="john_doe" disabled />
  <Input label="Email" value="john@example.com" disabled />
</Fieldset>
```

### Error State
```tsx:live
<Fieldset legend="Billing Information" error helperText="Please correct the errors below">
  <Input label="Card Number" error helperText="Invalid card number" />
  <Input label="Expiration Date" error helperText="Date has expired" />
</Fieldset>
```

## Props

- `legend`: string - Text displayed as the fieldset's legend (title)
- `disabled`: boolean - Disables all form controls within the fieldset (default: false)
- `required`: boolean - Marks the fieldset as required (default: false)
- `error`: boolean - Shows error state styling and message (default: false)
- `helperText`: string - Helper text or error message displayed below fieldset
- `id`: string - Unique identifier (auto-generated if not provided)
- `className`: string - Additional CSS classes
- `aria-label`: string - Accessible label for screen readers
- `aria-describedby`: string - ID of element describing the fieldset

## States

### Default
The fieldset appears in its normal state with all contained form controls interactive.

**Visual characteristics:**
- Border around grouped controls
- Legend text displayed at the top
- All form controls are enabled
- Standard border and background colors

### Disabled
A disabled fieldset disables all form controls within it, appearing visually muted.

**Visual characteristics:**
- Reduced opacity
- All child controls are disabled
- Cursor changes to not-allowed
- No interaction possible with any controls

### Error
An error state indicates validation failure within the fieldset.

**Visual characteristics:**
- Border color changes to red
- Error message appears below
- Legend text may change color
- Individual controls can also show errors

### Focus
When form controls within the fieldset receive focus, they show standard focus indicators.

**Visual characteristics:**
- Focus rings appear on focused controls
- Keyboard navigation works normally
- Focus indicators meet contrast requirements

## Use Cases

### Address Information
Use fieldsets to group address-related fields together.

**Example:**
- Street address, city, state, ZIP code
- Billing address vs shipping address
- Multiple address types

### Payment Information
Use fieldsets to group payment-related fields.

**Example:**
- Credit card details
- Billing information
- Payment method selection

### Personal Information
Use fieldsets to organize personal details.

**Example:**
- Name, email, phone
- Date of birth, gender
- Contact preferences

### Preferences and Settings
Use fieldsets to group related settings or preferences.

**Example:**
- Notification preferences
- Privacy settings
- Display options

### Form Sections
Use fieldsets to divide long forms into logical sections.

**Example:**
- Account setup steps
- Multi-step forms
- Complex registration forms

## Anatomy

Fieldset components include these elements:

1. **Legend** - Text that identifies what the group of fields represents
2. **Border** - Visual container that surrounds the grouped controls
3. **Form Controls** - Inputs, selects, checkboxes, radios, etc. within the fieldset
4. **Helper Text** - Optional guidance or error message below the fieldset

## Accessibility

### Keyboard Navigation
- Tab key moves focus between form controls within the fieldset
- All standard form control keyboard interactions work
- Focus indicators must be clearly visible
- Keyboard navigation works consistently

### Screen Reader Support
- Fieldset uses semantic HTML `<fieldset>` element
- Legend is automatically associated with the fieldset
- Screen readers announce the legend when entering the fieldset
- Disabled state is properly announced
- Error states are associated correctly

### Visual Requirements
- Legend text must have at least 4.5:1 contrast with background
- Border must be clearly visible
- Error states must be visually distinct
- Focus indicators must meet contrast requirements
- Disabled state must be clearly indicated

### Best Practices
- Always provide a clear, descriptive legend
- Group only related form controls together
- Use fieldsets for logical groupings, not visual decoration
- Ensure legend text is concise but descriptive
- Don't nest fieldsets unnecessarily
- Use error states appropriately for validation

## Content Guidelines

### Legends
- Use clear, descriptive text
- Keep legends concise (1-4 words)
- Match legend to the group's purpose
- Use consistent naming conventions

### Grouping
- Group controls that are logically related
- Don't group unrelated controls
- Consider user mental models
- Keep groups focused and specific

### Helper Text
- Provide guidance when needed
- Explain validation requirements
- Use clear, actionable language
- Keep helper text brief and relevant

## Best Practices

### When to Use
- When grouping related form controls
- For complex forms with multiple sections
- When improving form organization
- For accessibility improvements
- When disabling multiple controls together

### When Not to Use
- For single form controls (use label instead)
- For visual decoration only
- When grouping is not logical
- For unrelated form controls
- When simpler structure works better

### Design Considerations
- Place fieldsets in logical form order
- Use consistent styling throughout forms
- Ensure adequate spacing between fieldsets
- Test with screen readers
- Consider responsive behavior
- Maintain visual hierarchy

## Related Components

- **Input** - Individual text input fields within fieldsets
- **Radio** - Radio buttons often grouped in fieldsets
- **Checkbox** - Checkboxes commonly grouped in fieldsets
- **Select** - Dropdown selects can be grouped in fieldsets
- **Form** - Container for multiple fieldsets and controls

## Technical Considerations

### Implementation
- Fieldsets use native HTML `<fieldset>` element for best accessibility
- Legend uses native `<legend>` element
- Disabled state automatically disables all child controls
- Semantic HTML provides built-in accessibility
- Custom styling maintains native behavior

### Browser Support
- Native fieldsets work across all modern browsers
- Screen reader support is built-in
- Keyboard navigation is consistent
- Disabled state works reliably
- Focus management is handled by browser

### Performance
- Fieldsets are lightweight and render quickly
- No additional JavaScript required for basic functionality
- Disabled state is handled natively
- Minimal performance impact

### Form Integration
- Fieldsets group form controls semantically
- Form submission includes all fieldset controls
- Validation can target entire fieldsets
- Disabled fieldsets exclude controls from submission

## Common Patterns

### Address Form
Common pattern for collecting address information.

```tsx:live
<Fieldset legend="Shipping Address">
  <Input label="Street Address" placeholder="123 Main St" />
  <Input label="City" placeholder="New York" />
  <Input label="State" placeholder="NY" />
  <Input label="ZIP Code" placeholder="10001" />
</Fieldset>
```

### Payment Form
For collecting payment information.

```tsx:live
<Fieldset legend="Payment Information" required>
  <Input label="Cardholder Name" required />
  <Input label="Card Number" type="number" required />
  <div className="grid grid-cols-2 gap-4">
    <Input label="Expiration" placeholder="MM/YY" required />
    <Input label="CVV" type="number" required />
  </div>
</Fieldset>
```

### Preference Selection
For grouping related preferences.

```tsx:live
<Fieldset legend="Communication Preferences">
  <Checkbox label="Email updates" />
  <Checkbox label="SMS notifications" />
  <Checkbox label="Push notifications" />
</Fieldset>
```

## Validation

### Visual Validation
- Fieldset displays correctly with border and legend
- All form controls are properly contained
- Error states are visually distinct
- Helper text appears in correct location
- Disabled state is clearly indicated

### Functional Validation
- Disabled state affects all child controls
- Form submission includes all fieldset controls
- Keyboard navigation works properly
- Focus indicators are visible
- Error messages display correctly

### Accessibility Validation
- ARIA attributes are properly set
- Keyboard navigation works correctly
- Screen readers announce fieldsets properly
- Focus indicators meet contrast requirements
- Legend is correctly associated
