"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  className?: string
  children?: React.ReactNode
}

function Accordion({ className, children }: AccordionProps) {
  return <div className={cn("ds-accordion-root", className)}>{children}</div>
}
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  className?: string
  children?: React.ReactNode
  value?: string
  defaultOpen?: boolean
}

function AccordionItem({ className, children, value, defaultOpen = false }: AccordionItemProps) {
  return (
    <details className={cn("ds-accordion-item", className)} data-value={value} open={defaultOpen}>
      {children}
    </details>
  )
}
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps {
  className?: string
  children?: React.ReactNode
}

function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  return (
    <summary className={cn("ds-accordion-trigger", className)}>
      {children}
      <svg
        className="ds-accordion-chevron"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </summary>
  )
}
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  className?: string
  children?: React.ReactNode
}

function AccordionContent({ className, children }: AccordionContentProps) {
  return <div className={cn("ds-accordion-content", className)}>{children}</div>
}
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
