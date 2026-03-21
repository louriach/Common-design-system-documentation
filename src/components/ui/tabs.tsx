"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue>({
  activeTab: "",
  setActiveTab: () => {},
})

interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children?: React.ReactNode
}

function Tabs({ defaultValue = "", value, onValueChange, className, children }: TabsProps) {
  const [activeTab, setActiveTabState] = React.useState(defaultValue)
  const current = value ?? activeTab

  const setActiveTab = (v: string) => {
    setActiveTabState(v)
    onValueChange?.(v)
  }

  return (
    <TabsContext.Provider value={{ activeTab: current, setActiveTab }}>
      <div className={cn("ds-tabs", className)}>{children}</div>
    </TabsContext.Provider>
  )
}
Tabs.displayName = "Tabs"

interface TabsListProps {
  className?: string
  children?: React.ReactNode
}

function TabsList({ className, children }: TabsListProps) {
  return (
    <div role="tablist" className={cn("ds-tabs-list", className)}>
      {children}
    </div>
  )
}
TabsList.displayName = "TabsList"

interface TabsTriggerProps {
  value: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

function TabsTrigger({ value, className, children, disabled }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = React.useContext(TabsContext)
  const isActive = activeTab === value

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      className={cn("ds-tabs-trigger", isActive && "ds-tabs-trigger--active", className)}
      onClick={() => !disabled && setActiveTab(value)}
    >
      {children}
    </button>
  )
}
TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps {
  value: string
  className?: string
  children?: React.ReactNode
}

function TabsContent({ value, className, children }: TabsContentProps) {
  const { activeTab } = React.useContext(TabsContext)
  const isActive = activeTab === value

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!isActive}
      className={cn("ds-tabs-content", className)}
    >
      {children}
    </div>
  )
}
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
