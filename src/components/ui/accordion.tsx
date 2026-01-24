"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  collapsible?: boolean
}

const AccordionContext = React.createContext<{
  type: "single" | "multiple"
  value: string | string[]
  onValueChange: (value: string) => void
  collapsible: boolean
} | null>(null)

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = "single",
      defaultValue,
      value,
      onValueChange,
      collapsible = true,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue || (type === "multiple" ? [] : "")
    )
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleValueChange = React.useCallback(
      (itemValue: string) => {
        if (type === "single") {
          const newValue = currentValue === itemValue && collapsible ? "" : itemValue
          if (!isControlled) {
            setInternalValue(newValue)
          }
          onValueChange?.(newValue as string)
        } else {
          const currentArray = Array.isArray(currentValue) ? currentValue : []
          const newValue = currentArray.includes(itemValue)
            ? currentArray.filter((v) => v !== itemValue)
            : [...currentArray, itemValue]
          if (!isControlled) {
            setInternalValue(newValue)
          }
          onValueChange?.(newValue)
        }
      },
      [type, currentValue, collapsible, isControlled, onValueChange]
    )

    const isOpen = React.useCallback(
      (itemValue: string) => {
        if (type === "single") {
          return currentValue === itemValue
        }
        return Array.isArray(currentValue) && currentValue.includes(itemValue)
      },
      [type, currentValue]
    )

    return (
      <AccordionContext.Provider
        value={{
          type,
          value: currentValue,
          onValueChange: handleValueChange,
          collapsible,
        }}
      >
        <div ref={ref} className={cn("w-full space-y-1", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    if (!context) {
      throw new Error("AccordionItem must be used within Accordion")
    }

    const isOpen = context.type === "single"
      ? context.value === value
      : Array.isArray(context.value) && context.value.includes(value)

    return (
      <div
        ref={ref}
        className={cn(
          "border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as Record<string, any>
            if (child.type === AccordionTrigger || (child as any).type?.displayName === "AccordionTrigger") {
              return React.cloneElement(child, {
                ...childProps,
                value,
                isOpen,
              } as any)
            }
            if (child.type === AccordionContent || (child as any).type?.displayName === "AccordionContent") {
              return React.cloneElement(child, {
                ...childProps,
                value,
                isOpen,
              } as any)
            }
          }
          return child
        })}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string
  isOpen?: boolean
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, value, isOpen, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    if (!context) {
      throw new Error("AccordionTrigger must be used within Accordion")
    }

    const handleClick = () => {
      if (value) {
        context.onValueChange(value)
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100",
          "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  isOpen?: boolean
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, value, isOpen, children, ...props }, ref) => {
    if (!isOpen) {
      return null
    }

    return (
      <div
        ref={ref}
        role="region"
        className={cn(
          "px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
