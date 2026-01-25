"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface LinkProps extends React.ComponentProps<typeof Link> {
  variant?: "default" | "underline" | "subtle"
  external?: boolean
}

const LinkComponent = React.forwardRef<
  React.ElementRef<typeof Link>,
  LinkProps
>(({ className, variant = "default", external, href, children, ...props }, ref) => {
  const baseStyles = "text-blue-600 dark:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded"
  
  const variantStyles = {
    default: "hover:text-blue-700 dark:hover:text-blue-300",
    underline: "hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4",
    subtle: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
  }

  const linkHref = typeof href === "string" ? href : href
  const isExternal = external || (typeof linkHref === "string" && (linkHref.startsWith("http") || linkHref.startsWith("//")))

  if (isExternal) {
    return (
      <a
        href={linkHref as string}
        className={cn(baseStyles, variantStyles[variant], className)}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
})
LinkComponent.displayName = "Link"

export { LinkComponent as Link }
