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
      <div className="w-full relative">
        {label && (
          <label
            htmlFor={comboboxId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
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
              "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50 dark:disabled:bg-gray-800",
              error &&
                "border-red-500 dark:border-red-500 focus-visible:ring-red-500 dark:focus-visible:ring-red-400",
              className
            )}
            {...props}
          />
          <div
            className={cn(
              "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
              "text-gray-400 dark:text-gray-500"
            )}
          >
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
              className={cn(
                "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 dark:border-gray-800",
                "bg-white dark:bg-gray-900 shadow-lg",
                "py-1 text-sm"
              )}
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  id={`${comboboxId}-option-${index}`}
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "relative cursor-pointer select-none px-3 py-2",
                    "text-gray-900 dark:text-gray-100",
                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                    focusedIndex === index &&
                      "bg-gray-100 dark:bg-gray-800",
                    option.value === value &&
                      "bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100",
                    option.disabled &&
                      "opacity-50 cursor-not-allowed pointer-events-none"
                  )}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {helperText || "This field is required"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Combobox.displayName = "Combobox"

export { Combobox }
