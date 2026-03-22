import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
  error?: boolean
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      indeterminate,
      id,
      disabled,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const checkboxId = id || generatedId
    const helperId = helperText ? `${checkboxId}-helper` : undefined
    const errorId = error ? `${checkboxId}-error` : undefined

    const checkboxRef = React.useRef<HTMLInputElement>(null)
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)

    React.useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement)

    React.useLayoutEffect(() => {
      const checkbox = checkboxRef.current
      if (checkbox) {
        const isIndeterminate = indeterminate === true
        checkbox.indeterminate = isIndeterminate
        if (isIndeterminate) {
          checkbox.checked = false
          checkbox.setAttribute("aria-checked", "mixed")
        } else {
          checkbox.removeAttribute("aria-checked")
        }
      }
    }, [indeterminate])

    const isControlled = checked !== undefined
    const actualChecked = isControlled ? checked : internalChecked
    const shouldBeChecked = indeterminate ? false : actualChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (indeterminate) { e.preventDefault(); return }
      if (!isControlled) setInternalChecked(e.target.checked)
      onChange?.(e)
    }

    return (
      <div className={cn("ds-checkbox", error && "ds-checkbox--error", disabled && "ds-checkbox--disabled", className)}>
        <input
          type="checkbox"
          id={checkboxId}
          ref={checkboxRef}
          checked={isControlled ? shouldBeChecked : undefined}
          defaultChecked={!isControlled && !indeterminate ? defaultChecked : undefined}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId || helperId}
          className="ds-checkbox__input"
          {...props}
        />
        <div className="ds-checkbox__content">
          {label && (
            <label htmlFor={checkboxId} className="ds-checkbox__label">
              {label}
              {props.required && (
                <span className="ds-checkbox__required" aria-label="required">*</span>
              )}
            </label>
          )}
          {error && (
            <p id={errorId} className="ds-checkbox__error" role="alert">
              {helperText || "This field is required"}
            </p>
          )}
          {helperText && !error && (
            <p id={helperId} className="ds-checkbox__helper">{helperText}</p>
          )}
        </div>
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
