import * as React from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  content: string
  children: React.ReactNode
  placement?: "top" | "right" | "bottom" | "left"
  disabled?: boolean
  className?: string
}

function Tooltip({ content, children, placement = "top", disabled, className }: TooltipProps) {
  if (disabled) return <>{children}</>

  return (
    <span
      className={cn("ds-tooltip-wrap", className)}
      data-tooltip={content}
      data-placement={placement}
    >
      {children}
    </span>
  )
}

Tooltip.displayName = "Tooltip"

export { Tooltip }
