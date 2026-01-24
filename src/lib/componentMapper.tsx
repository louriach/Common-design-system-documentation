"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Combobox } from "@/components/ui/combobox";
import { Avatar } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { DatePicker } from "@/components/ui/date-picker";
import { InfoIcon, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface ComponentProps {
  [key: string]: any;
}

// Component mapping for live demos
export const componentMap: Record<string, React.ComponentType<any>> = {
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Input,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Toggle,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Combobox,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Breadcrumb,
  BreadcrumbItem,
  DatePicker,
};

// Icon mapping
export const iconMap: Record<string, React.ComponentType<any>> = {
  InfoIcon,
  CheckCircle2,
  AlertTriangle,
  XCircle,
};

/**
 * Parse multiple components from code (for groups like Radio buttons)
 */
export function parseMultipleComponents(code: string): Array<{
  component: string;
  props: ComponentProps;
  children?: React.ReactNode;
}> {
  const components: Array<{
    component: string;
    props: ComponentProps;
    children?: React.ReactNode;
  }> = [];
  
  // First, check if there's a Select or Tabs component - handle them specially to avoid parsing nested children
  const selectMatch = code.match(/<Select([^>]*)>([\s\S]*?)<\/Select>/i);
  if (selectMatch) {
    // This is a Select component, don't parse its option children as separate components
    const propsString = selectMatch[1];
    const childrenContent = selectMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Select",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }

  const tabsMatch = code.match(/<Tabs([^>]*)>([\s\S]*?)<\/Tabs>/i);
  if (tabsMatch) {
    // This is a Tabs component, don't parse its nested children as separate components
    const propsString = tabsMatch[1];
    const childrenContent = tabsMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Tabs",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }

  const accordionMatch = code.match(/<Accordion([^>]*)>([\s\S]*?)<\/Accordion>/i);
  if (accordionMatch) {
    // This is an Accordion component, don't parse its nested children as separate components
    const propsString = accordionMatch[1];
    const childrenContent = accordionMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Accordion",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }

  const breadcrumbMatch = code.match(/<Breadcrumb([^>]*)>([\s\S]*?)<\/Breadcrumb>/i);
  if (breadcrumbMatch) {
    // This is a Breadcrumb component, don't parse its nested children as separate components
    const propsString = breadcrumbMatch[1];
    const childrenContent = breadcrumbMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Breadcrumb",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }
  
  // Skip wrapper divs, fieldset, etc. - extract only actual components
  // Match all self-closing components: <Component prop="value" />
  const selfClosingRegex = /<(\w+)([^>]*)\s*\/>/g;
  let match;
  const skipTags = ['div', 'fieldset', 'legend', 'span', 'p', 'ul', 'ol', 'li', 'option', 'optgroup'];
  
  while ((match = selfClosingRegex.exec(code)) !== null) {
    const componentName = match[1];
    // Skip wrapper/container tags, but extract actual components
    if (skipTags.includes(componentName.toLowerCase())) {
      continue;
    }
    const propsString = match[2];
    const props = parseProps(propsString);
    components.push({
      component: componentName,
      props,
    });
  }
  
  // If we found multiple self-closing components, return them
  if (components.length > 1) {
    return components;
  }
  
  // If we found one, also check for opening/closing tags
  // Match opening/closing tags (but skip wrappers)
  const tagRegex = /<(\w+)([^>]*)>(.*?)<\/\1>/g;
  const processedComponents = new Set<string>();
  
  while ((match = tagRegex.exec(code)) !== null) {
    const componentName = match[1];
    // Skip wrapper/container tags and option/optgroup (they're children of Select)
    if (skipTags.includes(componentName.toLowerCase())) {
      // Extract components from inside wrappers by running regex on inner content
      const innerContent = match[3];
      if (innerContent) {
        // Find all component tags in inner content
        const innerSelfClosing = /<(\w+)([^>]*)\s*\/>/g;
        let innerMatch;
        while ((innerMatch = innerSelfClosing.exec(innerContent)) !== null) {
          const innerComponentName = innerMatch[1];
          if (!skipTags.includes(innerComponentName.toLowerCase())) {
            const innerPropsString = innerMatch[2];
            const innerProps = parseProps(innerPropsString);
            const componentKey = `${innerComponentName}-${JSON.stringify(innerProps)}`;
            if (!processedComponents.has(componentKey)) {
              processedComponents.add(componentKey);
              components.push({
                component: innerComponentName,
                props: innerProps,
              });
            }
          }
        }
      }
      continue;
    }
    // Not a wrapper, it's an actual component
    const propsString = match[2];
    const childrenContent = match[3]?.trim();
    const props = parseProps(propsString);
    const componentKey = `${componentName}-${JSON.stringify(props)}`;
    if (!processedComponents.has(componentKey)) {
      processedComponents.add(componentKey);
      components.push({
        component: componentName,
        props,
        children: childrenContent || undefined,
      });
    }
  }
  
  return components;
}

/**
 * Parse component code and extract component name and props
 */
export function parseComponentCode(code: string): {
  component: string;
  props: ComponentProps;
  children?: React.ReactNode;
  icon?: string;
} | null {
  // Remove leading/trailing whitespace and normalize
  code = code.trim().replace(/\n/g, " ").replace(/\s+/g, " ");

  // Match component opening tag: <ComponentName prop="value">content</ComponentName>
  // or self-closing: <ComponentName prop="value" />
  const selfClosingMatch = code.match(/<(\w+)([^>]*)\s*\/>/);
  if (selfClosingMatch) {
    const componentName = selfClosingMatch[1];
    const propsString = selfClosingMatch[2];
    const props = parseProps(propsString);
    return {
      component: componentName,
      props,
    };
  }

  // For components with children, we need to handle nested tags properly
  // Find the opening tag
  const openingTagMatch = code.match(/<(\w+)([^>]*)>/);
  if (!openingTagMatch) return null;

  const componentName = openingTagMatch[1];
  const propsString = openingTagMatch[2];
  const openingTag = openingTagMatch[0];
  const startIndex = code.indexOf(openingTag) + openingTag.length;

  // For Select, Tabs, Accordion, and Breadcrumb components (and other components that might have nested tags),
  // we need to find the matching closing tag by counting opening/closing tags
  if (componentName === "Select" || componentName === "select" || componentName === "Tabs" || componentName === "Accordion" || componentName === "Breadcrumb") {
    let depth = 1;
    let currentIndex = startIndex;
    let closingIndex = -1;

    while (currentIndex < code.length && depth > 0) {
      const nextOpen = code.indexOf(`<${componentName}`, currentIndex);
      const nextClose = code.indexOf(`</${componentName}>`, currentIndex);
      
      if (nextClose === -1) break;
      
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        currentIndex = nextOpen + componentName.length + 1;
      } else {
        depth--;
        if (depth === 0) {
          closingIndex = nextClose;
          break;
        }
        currentIndex = nextClose + componentName.length + 3;
      }
    }

    if (closingIndex !== -1) {
      const childrenContent = code.substring(startIndex, closingIndex).trim();
      const props = parseProps(propsString);
      return {
        component: componentName,
        props,
        children: childrenContent || undefined,
      };
    }
  }

  // For other components, use simple regex (non-greedy match)
  const componentMatch = code.match(/<(\w+)([^>]*)>(.*?)<\/\1>/);
  if (!componentMatch) return null;

  const childrenContent = componentMatch[3]?.trim();
  const props = parseProps(propsString);

  return {
    component: componentName,
    props,
    children: childrenContent || undefined,
  };
}

function parseProps(propsString: string): ComponentProps {
  const props: ComponentProps = {};
  
  if (!propsString) return props;

  // Extract array props: prop={[{ value: "...", label: "..." }, ...]}
  // This handles Combobox options and similar array props
  // Use [\s\S] instead of . with s flag for ES2017 compatibility
  const arrayProps = propsString.match(/(\w+)=\{\[([\s\S]*?)\]\}/);
  if (arrayProps) {
    const propName = arrayProps[1];
    const arrayContent = arrayProps[2];
    
    // Parse array of objects: { value: "...", label: "..." }
    if (propName === "options") {
      const options: Array<{ value: string; label: string; disabled?: boolean }> = [];
      const optionRegex = /\{\s*value:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["'](?:\s*,\s*disabled:\s*(true|false))?\s*\}/g;
      let optionMatch;
      while ((optionMatch = optionRegex.exec(arrayContent)) !== null) {
        options.push({
          value: optionMatch[1],
          label: optionMatch[2],
          disabled: optionMatch[3] === "true"
        });
      }
      if (options.length > 0) {
        props[propName] = options;
      }
    }
  }

  // Extract string props: prop="value" or prop='value'
  const stringProps = propsString.matchAll(/(\w+)="([^"]*)"/g);
  for (const match of stringProps) {
    if (!props[match[1]]) { // Don't override array props
      props[match[1]] = match[2];
    }
  }

  // Extract boolean props (standalone words that aren't already in props)
  const words = propsString.match(/\b(\w+)\b/g) || [];
  for (const word of words) {
    if (word !== 'type' && !props[word] && !word.includes('=')) {
      // Check if it's a valid boolean prop name
      if (['closable', 'disabled', 'required', 'readonly', 'checked', 'indeterminate', 'error', 'defaultChecked'].includes(word)) {
        props[word] = true;
      }
    }
  }

  return props;
}

/**
 * Render multiple components (for groups)
 */
export function renderMultipleComponents(
  components: Array<{
    component: string;
    props: ComponentProps;
    children?: React.ReactNode;
  }>
): React.ReactNode {
  // Check if all components are the same type (e.g., Radio group)
  const firstComponent = components[0];
  if (!firstComponent) return null;
  
  const allSameType = components.every(c => c.component === firstComponent.component);
  
  // Handle Radio groups (vertical layout)
  if (allSameType && firstComponent.component === "Radio") {
    return (
      <div className="space-y-2">
        {components.map((comp, index) => {
          const rendered = renderComponent(comp);
          return <div key={index}>{rendered}</div>;
        })}
      </div>
    );
  }
  
  // Handle Button groups (horizontal layout)
  if (allSameType && firstComponent.component === "Button") {
    return (
      <div className="flex flex-wrap gap-2">
        {components.map((comp, index) => {
          const rendered = renderComponent(comp);
          return <div key={index}>{rendered}</div>;
        })}
      </div>
    );
  }
  
  // Handle other groups (vertical layout by default)
  return (
    <div className="space-y-2">
      {components.map((comp, index) => {
        const rendered = renderComponent(comp);
        return <div key={index}>{rendered}</div>;
      })}
    </div>
  );
}

/**
 * Render a component from parsed code
 */
export function renderComponent(parsed: {
  component: string;
  props: ComponentProps;
  children?: React.ReactNode;
  icon?: string;
}): React.ReactNode {
  const { component: componentName, props, children } = parsed;

  // Handle Alert component with variants
  if (componentName === "Alert") {
    const variant = props.type === "success" ? "success" :
                   props.type === "warning" ? "warning" :
                   props.type === "error" ? "destructive" :
                   props.type === "info" ? "info" : "default";

    const IconComponent = 
      variant === "success" ? CheckCircle2 :
      variant === "warning" ? AlertTriangle :
      variant === "destructive" ? XCircle :
      InfoIcon;

    return (
      <Alert variant={variant as any}>
        <IconComponent className="h-4 w-4" />
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {(children || props.description) && (
          <AlertDescription>
            {children || props.description}
          </AlertDescription>
        )}
      </Alert>
    );
  }

  // Handle Button component
  if (componentName === "Button") {
    return (
      <Button
        variant={props.variant || "default"}
        size={props.size}
        disabled={props.disabled === true || props.disabled === "true"}
      >
        {children || props.children || "Button"}
      </Button>
    );
  }

  // Handle Card component
  if (componentName === "Card") {
    return (
      <Card>
        {(props.title || props.description) && (
          <CardHeader>
            {props.title && <CardTitle>{props.title}</CardTitle>}
            {props.description && <CardDescription>{props.description}</CardDescription>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
      </Card>
    );
  }

  // Handle Badge component
  if (componentName === "Badge") {
    // Parse count if provided as string
    const count = props.count !== undefined ? 
      (typeof props.count === "string" ? parseInt(props.count, 10) : props.count) : 
      undefined;
    
    return (
      <Badge
        variant={props.variant || "default"}
        size={props.size}
        shape={props.shape}
        count={count}
        dot={props.dot === true || props.dot === "true"}
        showZero={props.showZero === true || props.showZero === "true"}
        overflowCount={props.overflowCount ? parseInt(props.overflowCount, 10) : 99}
      >
        {children}
      </Badge>
    );
  }

  // Handle Input component
  if (componentName === "Input") {
    return (
      <Input
        type={props.type || "text"}
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.disabled === true || props.disabled === "true"}
        required={props.required === true || props.required === "true"}
        error={props.error === true || props.error === "true"}
        helperText={props.helperText}
        value={props.value}
        defaultValue={props.defaultValue}
        maxLength={props.maxLength ? parseInt(props.maxLength, 10) : undefined}
        minLength={props.minLength ? parseInt(props.minLength, 10) : undefined}
        pattern={props.pattern}
        autoComplete={props.autoComplete}
        name={props.name}
        id={props.id}
      />
    );
  }

  // Handle DatePicker component
  if (componentName === "DatePicker") {
    return (
      <DatePicker
        label={props.label}
        disabled={props.disabled === true || props.disabled === "true"}
        required={props.required === true || props.required === "true"}
        error={props.error === true || props.error === "true"}
        helperText={props.helperText}
        value={props.value}
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        name={props.name}
        id={props.id}
      />
    );
  }

  // Handle Textarea component
  if (componentName === "Textarea") {
    return (
      <Textarea
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.disabled === true || props.disabled === "true"}
        required={props.required === true || props.required === "true"}
        readOnly={props.readOnly === true || props.readOnly === "readOnly"}
        error={props.error === true || props.error === "true"}
        helperText={props.helperText}
        value={props.value}
        defaultValue={props.defaultValue || (typeof children === "string" ? children : undefined)}
        rows={props.rows ? parseInt(props.rows, 10) : undefined}
        cols={props.cols ? parseInt(props.cols, 10) : undefined}
        maxLength={props.maxLength ? parseInt(props.maxLength, 10) : undefined}
        minLength={props.minLength ? parseInt(props.minLength, 10) : undefined}
        name={props.name}
        id={props.id}
      />
    );
  }

  // Handle Tabs components
  if (componentName === "Tabs") {
    // Parse nested Tabs components from children string
    let tabsChildren: React.ReactNode = null;
    
    if (typeof children === "string") {
      const tabsChildrenArray: React.ReactNode[] = [];
      
      // Parse TabsList
      const tabsListRegex = /<TabsList([^>]*)>([\s\S]*?)<\/TabsList>/g;
      let listMatch;
      while ((listMatch = tabsListRegex.exec(children)) !== null) {
        const listProps = parseProps(listMatch[1]);
        const listContent = listMatch[2];
        
        // Parse TabsTrigger components within TabsList
        const triggerRegex = /<TabsTrigger\s+([^>]*)>([^<]*)<\/TabsTrigger>/g;
        const triggers: React.ReactNode[] = [];
        let triggerMatch;
        while ((triggerMatch = triggerRegex.exec(listContent)) !== null) {
          const triggerProps = parseProps(triggerMatch[1]);
          triggers.push(
            <TabsTrigger
              key={triggerProps.value || triggerMatch[2]}
              value={triggerProps.value || triggerMatch[2]}
              disabled={triggerProps.disabled === true || triggerProps.disabled === "true"}
            >
              {triggerMatch[2]}
            </TabsTrigger>
          );
        }
        
        tabsChildrenArray.push(
          <TabsList key="tabslist" {...listProps}>
            {triggers}
          </TabsList>
        );
      }
      
      // Parse TabsContent components
      const contentRegex = /<TabsContent\s+([^>]*)>([\s\S]*?)<\/TabsContent>/g;
      let contentMatch;
      while ((contentMatch = contentRegex.exec(children)) !== null) {
        const contentProps = parseProps(contentMatch[1]);
        tabsChildrenArray.push(
          <TabsContent
            key={contentProps.value}
            value={contentProps.value}
          >
            {contentMatch[2].trim()}
          </TabsContent>
        );
      }
      
      tabsChildren = tabsChildrenArray.length > 0 ? tabsChildrenArray : null;
    } else if (children) {
      tabsChildren = children;
    }
    
    return (
      <Tabs
        defaultValue={props.defaultValue}
        value={props.value}
        onValueChange={props.onValueChange}
        className={props.className}
      >
        {tabsChildren}
      </Tabs>
    );
  }

  if (componentName === "TabsList") {
    return (
      <TabsList className={props.className}>
        {children}
      </TabsList>
    );
  }

  if (componentName === "TabsTrigger") {
    return (
      <TabsTrigger
        value={props.value || children}
        disabled={props.disabled === true || props.disabled === "true"}
        className={props.className}
      >
        {children}
      </TabsTrigger>
    );
  }

  if (componentName === "TabsContent") {
    return (
      <TabsContent
        value={props.value}
        className={props.className}
      >
        {children}
      </TabsContent>
    );
  }

  // Handle Combobox component
  if (componentName === "Combobox") {
    // Parse options array from props
    // The options prop will be in the format: options={[{ value: "us", label: "United States" }, ...]}
    let options: Array<{ value: string; label: string; disabled?: boolean }> = []
    
    // Try to parse options from props.options if it's a string representation
    if (props.options && typeof props.options === "string") {
      try {
        // Match the array: [{ value: "...", label: "..." }, ...]
        // Handle both single and multi-line formats
        const arrayContent = props.options.trim()
        // Match individual option objects
        const optionRegex = /\{\s*value:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["'](?:\s*,\s*disabled:\s*(true|false))?\s*\}/g
        let optionMatch
        while ((optionMatch = optionRegex.exec(arrayContent)) !== null) {
          options.push({
            value: optionMatch[1],
            label: optionMatch[2],
            disabled: optionMatch[3] === "true"
          })
        }
      } catch (e) {
        console.warn("Failed to parse Combobox options:", e)
      }
    } else if (Array.isArray(props.options)) {
      options = props.options
    }
    
    // Default options if none parsed
    if (options.length === 0) {
      options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
      ]
    }
    
    return (
      <Combobox
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.disabled === true || props.disabled === "true"}
        required={props.required === true || props.required === "required"}
        error={props.error === true || props.error === "true"}
        helperText={props.helperText}
        value={props.value}
        onChange={props.onChange}
        onInputChange={props.onInputChange}
        options={options}
        id={props.id}
      />
    )
  }

  // Handle Avatar component
  if (componentName === "Avatar") {
    return (
      <Avatar
        src={props.src}
        alt={props.alt}
        name={props.name || children}
        size={props.size || "md"}
        status={props.status}
        fallback={props.fallback}
        className={props.className}
      />
    )
  }

  // Handle Accordion components
  if (componentName === "Accordion") {
    // Parse nested Accordion components from children string
    let accordionChildren: React.ReactNode = null;
    
    if (typeof children === "string") {
      const accordionChildrenArray: React.ReactNode[] = [];
      
      // Parse AccordionItem components
      const itemRegex = /<AccordionItem\s+([^>]*)>([\s\S]*?)<\/AccordionItem>/g;
      let itemMatch;
      while ((itemMatch = itemRegex.exec(children)) !== null) {
        const itemProps = parseProps(itemMatch[1]);
        const itemContent = itemMatch[2];
        
        // Parse AccordionTrigger within AccordionItem
        const triggerMatch = itemContent.match(/<AccordionTrigger[^>]*>([\s\S]*?)<\/AccordionTrigger>/);
        const triggerText = triggerMatch ? triggerMatch[1].trim() : "";
        
        // Parse AccordionContent within AccordionItem
        const contentMatch = itemContent.match(/<AccordionContent[^>]*>([\s\S]*?)<\/AccordionContent>/);
        const contentText = contentMatch ? contentMatch[1].trim() : "";
        
        accordionChildrenArray.push(
          <AccordionItem key={itemProps.value} value={itemProps.value || `item-${accordionChildrenArray.length}`}>
            <AccordionTrigger>{triggerText}</AccordionTrigger>
            <AccordionContent>{contentText}</AccordionContent>
          </AccordionItem>
        );
      }
      
      accordionChildren = accordionChildrenArray.length > 0 ? accordionChildrenArray : null;
    } else if (children) {
      accordionChildren = children;
    }
    
    return (
      <Accordion
        type={props.type || "single"}
        defaultValue={props.defaultValue}
        value={props.value}
        onValueChange={props.onValueChange}
        collapsible={props.collapsible !== false}
        className={props.className}
      >
        {accordionChildren}
      </Accordion>
    );
  }

  if (componentName === "AccordionItem") {
    return (
      <AccordionItem value={props.value || children} className={props.className}>
        {children}
      </AccordionItem>
    );
  }

  if (componentName === "AccordionTrigger") {
    return (
      <AccordionTrigger className={props.className}>
        {children}
      </AccordionTrigger>
    );
  }

  if (componentName === "AccordionContent") {
    return (
      <AccordionContent className={props.className}>
        {children}
      </AccordionContent>
    );
  }

  // Handle Breadcrumb components
  if (componentName === "Breadcrumb") {
    // Parse nested BreadcrumbItem components from children string
    let breadcrumbChildren: React.ReactNode = null;
    
    if (typeof children === "string") {
      const breadcrumbChildrenArray: React.ReactNode[] = [];
      
      // Parse BreadcrumbItem components
      const itemRegex = /<BreadcrumbItem\s+([^>]*)>([^<]*)<\/BreadcrumbItem>/g;
      let itemMatch;
      while ((itemMatch = itemRegex.exec(children)) !== null) {
        const itemProps = parseProps(itemMatch[1]);
        const itemText = itemMatch[2].trim();
        
        breadcrumbChildrenArray.push(
          <BreadcrumbItem key={itemProps.href || itemText} href={itemProps.href}>
            {itemText}
          </BreadcrumbItem>
        );
      }
      
      breadcrumbChildren = breadcrumbChildrenArray.length > 0 ? breadcrumbChildrenArray : null;
    } else if (children) {
      breadcrumbChildren = children;
    }
    
    return (
      <Breadcrumb separator={props.separator} className={props.className}>
        {breadcrumbChildren}
      </Breadcrumb>
    );
  }

  if (componentName === "BreadcrumbItem") {
    return (
      <BreadcrumbItem href={props.href} className={props.className}>
        {children}
      </BreadcrumbItem>
    );
  }

  // Handle Toggle component
  if (componentName === "Toggle") {
    // For live demos, use defaultChecked instead of checked so it's interactive
    const hasCheckedProp = 
      props.checked === true || 
      props.checked === "true" || 
      props.checked === "checked" ||
      (typeof props.checked === "string" && props.checked.toLowerCase() === "true")
    
    return (
      <Toggle
        label={props.label || children}
        defaultChecked={hasCheckedProp || (props.defaultChecked === true || props.defaultChecked === "true")}
        disabled={props.disabled === true || props.disabled === "true" || props.disabled === "disabled"}
        required={props.required === true || props.required === "true" || props.required === "required"}
        error={props.error === true || props.error === "true" || props.error === "error"}
        helperText={props.helperText}
        name={props.name}
        value={props.value}
        id={props.id}
      />
    );
  }

  // Handle Checkbox component
  if (componentName === "Checkbox") {
    // For live demos, use defaultChecked instead of checked so it's interactive
    // Check for checked prop in various formats
    const hasCheckedProp = 
      props.checked === true || 
      props.checked === "true" || 
      props.checked === "checked" ||
      (typeof props.checked === "string" && props.checked.toLowerCase() === "true")
    
    return (
      <Checkbox
        label={props.label || children}
        defaultChecked={hasCheckedProp || (props.defaultChecked === true || props.defaultChecked === "true")}
        indeterminate={props.indeterminate === true || props.indeterminate === "true" || props.indeterminate === "indeterminate"}
        disabled={props.disabled === true || props.disabled === "true" || props.disabled === "disabled"}
        required={props.required === true || props.required === "true" || props.required === "required"}
        error={props.error === true || props.error === "true" || props.error === "error"}
        helperText={props.helperText}
        name={props.name}
        value={props.value}
        id={props.id}
      />
    );
  }

  // Handle Radio component
  if (componentName === "Radio") {
    // For live demos, use defaultChecked instead of checked so it's interactive
    const hasCheckedProp = 
      props.checked === true || 
      props.checked === "true" || 
      props.checked === "checked" ||
      (typeof props.checked === "string" && props.checked.toLowerCase() === "true")
    
    return (
      <Radio
        label={props.label || children}
        name={props.name || "radio-group"}
        value={props.value || props.label || children}
        defaultChecked={hasCheckedProp || (props.defaultChecked === true || props.defaultChecked === "true")}
        disabled={props.disabled === true || props.disabled === "true" || props.disabled === "disabled"}
        required={props.required === true || props.required === "true" || props.required === "required"}
        error={props.error === true || props.error === "true" || props.error === "error"}
        helperText={props.helperText}
        id={props.id}
      />
    );
  }

  // Handle Select component
  if (componentName === "Select") {
    // Parse option children from the children string
    // Children might be a string containing <option> tags or already parsed React nodes
    let optionElements: React.ReactNode = null;
    
    if (typeof children === "string") {
      // Parse options from string like "<option value='1'>Option 1</option><option value='2'>Option 2</option>"
      // Handle options with or without attributes
      const optionRegex = /<option\s*([^>]*)>([^<]*)<\/option>/g;
      const optgroupRegex = /<optgroup\s+label="([^"]*)">([\s\S]*?)<\/optgroup>/g;
      const options: React.ReactNode[] = [];
      let match;
      
      // First check for optgroups
      const optgroupMatches: Array<{ label: string; content: string }> = [];
      let optgroupMatch;
      let lastIndex = 0;
      
      while ((optgroupMatch = optgroupRegex.exec(children)) !== null) {
        optgroupMatches.push({
          label: optgroupMatch[1],
          content: optgroupMatch[2],
        });
        lastIndex = optgroupRegex.lastIndex;
      }
      
      // Process optgroups
      optgroupMatches.forEach((group) => {
        const groupOptions: React.ReactNode[] = [];
        const groupOptionRegex = /<option\s*([^>]*)>([^<]*)<\/option>/g;
        let groupMatch;
        
        while ((groupMatch = groupOptionRegex.exec(group.content)) !== null) {
          const optionProps = parseProps(groupMatch[1]);
          groupOptions.push(
            <option key={`${group.label}-${groupMatch[2]}`} value={optionProps.value || groupMatch[2]} {...optionProps}>
              {groupMatch[2]}
            </option>
          );
        }
        
        if (groupOptions.length > 0) {
          options.push(
            <optgroup key={group.label} label={group.label}>
              {groupOptions}
            </optgroup>
          );
        }
      });
      
      // Process standalone options (not in optgroups)
      if (lastIndex === 0) {
        // No optgroups found, parse all options
        while ((match = optionRegex.exec(children)) !== null) {
          const optionProps = parseProps(match[1]);
          options.push(
            <option key={match[2]} value={optionProps.value || match[2]} {...optionProps}>
              {match[2]}
            </option>
          );
        }
      } else {
        // Parse options outside of optgroups
        const remainingContent = children.substring(lastIndex);
        while ((match = optionRegex.exec(remainingContent)) !== null) {
          const optionProps = parseProps(match[1]);
          options.push(
            <option key={match[2]} value={optionProps.value || match[2]} {...optionProps}>
              {match[2]}
            </option>
          );
        }
      }
      
      optionElements = options.length > 0 ? options : null;
    } else if (children) {
      // Children are already React nodes
      optionElements = children;
    }
    
    return (
      <Select
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.disabled === true || props.disabled === "true" || props.disabled === "disabled"}
        required={props.required === true || props.required === "true" || props.required === "required"}
        error={props.error === true || props.error === "true" || props.error === "error"}
        helperText={props.helperText}
        value={props.value}
        defaultValue={props.defaultValue}
        name={props.name}
        id={props.id}
      >
        {optionElements}
      </Select>
    );
  }

  // Default: try to find in component map
  const Component = componentMap[componentName];
  if (Component) {
    return <Component {...props}>{children}</Component>;
  }

  return <div className="text-red-500 text-sm">Unknown component: {componentName}</div>;
}
