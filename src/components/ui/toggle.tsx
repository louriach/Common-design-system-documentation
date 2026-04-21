import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
  error?: boolean
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      label,
      helperText,
      error,
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
    const toggleId = id || generatedId
    const helperId = helperText ? `${toggleId}-helper` : undefined
    const errorId = error ? `${toggleId}-error` : undefined

    const toggleRef = React.useRef<HTMLInputElement>(null)
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)

    React.useImperativeHandle(ref, () => toggleRef.current as HTMLInputElement)

    const isControlled = checked !== undefined
    const actualChecked = isControlled ? (checked as boolean) : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked)
      onChange?.(e)
    }

    return (
      <div className={cn("ds-toggle", error && "ds-toggle--error", disabled && "ds-toggle--disabled", actualChecked && "ds-toggle--on", className)}>
        <div className="ds-toggle__row">
          <input
            type="checkbox"
            id={toggleId}
            ref={toggleRef}
            role="switch"
            checked={isControlled ? actualChecked : undefined}
            defaultChecked={!isControlled ? defaultChecked : undefined}
            onChange={handleChange}
            disabled={disabled}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={errorId || helperId}
            aria-checked={actualChecked}
            className="ds-toggle__input"
            {...props}
          />
          <label htmlFor={toggleId} className="ds-toggle__track">
            <span className="ds-toggle__thumb" />
          </label>
          {label && (
            <label htmlFor={toggleId} className="ds-toggle__label">
              {label}
              {props.required && (
                <span className="ds-toggle__required" aria-label="required">*</span>
              )}
            </label>
          )}
        </div>
        {error && (
          <p id={errorId} className="ds-toggle__error" role="alert">
            {helperText || "This field is required"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="ds-toggle__helper">{helperText}</p>
        )}
      </div>
    )
  }
)
Toggle.displayName = "Toggle"

export { Toggle }
