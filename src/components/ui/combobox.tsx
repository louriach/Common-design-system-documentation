"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  options: ComboboxOption[]
  value?: string
  onChange?: (value: string) => void
  onInputChange?: (inputValue: string) => void
  error?: boolean
  helperText?: string
  label?: string
  placeholder?: string
  filterFunction?: (option: ComboboxOption, inputValue: string) => boolean
}

const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      className,
      options,
      value,
      onChange,
      onInputChange,
      error,
      helperText,
      label,
      placeholder,
      id,
      disabled,
      required,
      filterFunction,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const comboboxId = id || generatedId
    const helperId = helperText ? `${comboboxId}-helper` : undefined
    const errorId = error ? `${comboboxId}-error` : undefined
    const listboxId = `${comboboxId}-listbox`

    const [inputValue, setInputValue] = React.useState("")
    const [isOpen, setIsOpen] = React.useState(false)
    const [focusedIndex, setFocusedIndex] = React.useState(-1)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const listboxRef = React.useRef<HTMLUListElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    // Find selected option
    const selectedOption = options.find((opt) => opt.value === value)

    // Default filter function
    const defaultFilter = (option: ComboboxOption, input: string) => {
      return option.label.toLowerCase().includes(input.toLowerCase())
    }

    const filter = filterFunction || defaultFilter

    // Filter options based on input
    const filteredOptions = React.useMemo(() => {
      if (!inputValue.trim()) return options
      return options.filter((option) => filter(option, inputValue))
    }, [options, inputValue, filter])

    // Update input value when value prop changes
    React.useEffect(() => {
      if (selectedOption) {
        setInputValue(selectedOption.label)
      } else if (value === undefined || value === "") {
        setInputValue("")
      }
    }, [value, selectedOption])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      setIsOpen(true)
      setFocusedIndex(-1)
      onInputChange?.(newValue)
      
      // If input matches an option exactly, select it
      const exactMatch = options.find(
        (opt) => opt.label.toLowerCase() === newValue.toLowerCase()
      )
      if (exactMatch && onChange) {
        onChange(exactMatch.value)
      } else if (onChange && newValue === "") {
        onChange("")
      }
    }

    const handleOptionSelect = (option: ComboboxOption) => {
      if (option.disabled) return
      setInputValue(option.label)
      setIsOpen(false)
      setFocusedIndex(-1)
      onChange?.(option.value)
      inputRef.current?.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setIsOpen(true)
          setFocusedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          )
          break
        case "ArrowUp":
          e.preventDefault()
          setIsOpen(true)
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          )
          break
        case "Enter":
          e.preventDefault()
          if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
            handleOptionSelect(filteredOptions[focusedIndex])
          }
          break
        case "Escape":
          setIsOpen(false)
          setFocusedIndex(-1)
          break
        case "Tab":
          setIsOpen(false)
          break
      }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // Delay to allow option click to fire
      setTimeout(() => {
        if (!listboxRef.current?.contains(document.activeElement)) {
          setIsOpen(false)
          setFocusedIndex(-1)
        }
      }, 200)
    }

    return (
      <div className="ds-combobox-wrap ds-input-relative">
        {label && (
          <label htmlFor={comboboxId} className="ds-label">
            {label}
            {required && (
              <span className="ds-required" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <div className="ds-input-relative">
          <input
            ref={inputRef}
            id={comboboxId}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-activedescendant={
              focusedIndex >= 0
                ? `${comboboxId}-option-${focusedIndex}`
                : undefined
            }
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={placeholder}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={errorId || helperId}
            className={cn(
              "ds-input",
              error && "ds-input--error",
              className
            )}
            {...props}
          />
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
          {isOpen && filteredOptions.length > 0 && (
            <ul
              ref={listboxRef}
              id={listboxId}
              role="listbox"
              className="ds-combobox__listbox"
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  id={`${comboboxId}-option-${index}`}
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "ds-combobox__option",
                    focusedIndex === index &&
                      "ds-combobox__option--focused",
                    option.value === value &&
                      "ds-combobox__option--selected",
                    option.disabled &&
                      "ds-combobox__option--disabled"
                  )}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
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
Combobox.displayName = "Combobox"

export { Combobox }
