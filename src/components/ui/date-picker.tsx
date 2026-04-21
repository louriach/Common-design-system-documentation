"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"

export interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: boolean
  helperText?: string
  label?: string
  min?: string
  max?: string
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, error, helperText, label, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const helperId = helperText ? `${inputId}-helper` : undefined
    const errorId = error ? `${inputId}-error` : undefined

    return (
      <div className="ds-datepicker-wrap">
        {label && (
          <label htmlFor={inputId} className="ds-label">
            {label}
            {props.required && (
              <span className="ds-required" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <div className="ds-input-relative">
          <div className="ds-input-icon-left">
            <Calendar className="ds-input-icon" />
          </div>
          <input
            type="date"
            id={inputId}
            className={cn(
              "ds-input input-date-native-hidden pl-10",
              error && "ds-input--error",
              className
            )}
            ref={ref}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={errorId || helperId}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="ds-error" role="alert">
            {helperText || "Please select a valid date"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="ds-helper">{helperText}</p>
        )}
      </div>
    )
  }
)
DatePicker.displayName = "DatePicker"

export { DatePicker }
