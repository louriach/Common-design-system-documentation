import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  helperText?: string
  label?: string
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      error,
      helperText,
      label,
      placeholder,
      id,
      children,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const selectId = id || generatedId
    const helperId = helperText ? `${selectId}-helper` : undefined
    const errorId = error ? `${selectId}-error` : undefined

    return (
      <div className="ds-select-wrap">
        {label && (
          <label htmlFor={selectId} className="ds-label">
            {label}
            {required && (
              <span className="ds-required" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <div className="ds-input-relative">
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            required={required}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={errorId || helperId}
            className={cn(
              "ds-input appearance-none cursor-pointer pr-10",
              error && "ds-input--error",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          <div className="ds-select-chevron">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p id={errorId} className="ds-error" role="alert">
            {helperText || "This field is required"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="ds-helper">{helperText}</p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
