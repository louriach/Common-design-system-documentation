"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: string
  children: React.ReactNode
  placement?: "top" | "right" | "bottom" | "left"
  delay?: number
  disabled?: boolean
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, placement = "top", delay = 200, disabled, ...props }, ref) => {
    if (disabled) {
      return <div ref={ref}>{children}</div>
    }
    return (
      <div ref={ref} className="relative inline-block">
        <TooltipPrimitive.Provider delayDuration={delay}>
          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
              <span className="inline-block">{children}</span>
            </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              side={placement}
              sideOffset={8}
              className={cn("ds-tooltip-content")}
            >
              {content}
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
      </div>
    )
  }
)
Tooltip.displayName = "Tooltip"

export { Tooltip }
