import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
  error?: boolean
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
      name,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const radioId = id || generatedId
    const helperId = helperText ? `${radioId}-helper` : undefined
    const errorId = error ? `${radioId}-error` : undefined

    const radioRef = React.useRef<HTMLInputElement>(null)
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)

    React.useImperativeHandle(ref, () => radioRef.current as HTMLInputElement)

    const isControlled = checked !== undefined

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked)
      onChange?.(e)
    }

    return (
      <div className={cn("ds-radio", error && "ds-radio--error", disabled && "ds-radio--disabled", className)}>
        <input
          type="radio"
          id={radioId}
          ref={radioRef}
          name={name}
          value={value}
          checked={isControlled ? checked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId || helperId}
          className="ds-radio__input"
          {...props}
        />
        <div className="ds-radio__content">
          {label && (
            <label htmlFor={radioId} className="ds-radio__label">
              {label}
              {props.required && (
                <span className="ds-radio__required" aria-label="required">*</span>
              )}
            </label>
          )}
          {error && (
            <p id={errorId} className="ds-radio__error" role="alert">
              {helperText || "This field is required"}
            </p>
          )}
          {helperText && !error && (
            <p id={helperId} className="ds-radio__helper">{helperText}</p>
          )}
        </div>
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }
