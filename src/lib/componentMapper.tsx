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
import { Fieldset } from "@/components/ui/fieldset";
import { Link } from "@/components/ui/link";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Modal } from "@/components/ui/modal";
import { Tooltip } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { IconButton } from "@/components/ui/icon-button";
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
  Fieldset,
  Link,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Modal,
  Tooltip,
  Progress,
  Spinner,
  IconButton,
};

// Icon mapping
export const iconMap: Record<string, React.ComponentType<any>> = {
  InfoIcon,
  CheckCircle2,
  AlertTriangle,
  XCircle,
};

/**
 * Wrapper for live demos: shows a trigger button and controls modal open state
 * so the modal is previewed on the docs page instead of opening immediately.
 */
function ModalWithTrigger({
  title,
  description,
  size,
  closable,
  children,
}: {
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl";
  closable?: boolean;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        size={size ?? "md"}
        closable={closable !== false}
      >
        {children}
      </Modal>
    </>
  );
}

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

  const fieldsetMatch = code.match(/<Fieldset([^>]*)>([\s\S]*?)<\/Fieldset>/i);
  if (fieldsetMatch) {
    // This is a Fieldset component, don't parse its nested children as separate components
    const propsString = fieldsetMatch[1];
    const childrenContent = fieldsetMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Fieldset",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }

  const tableMatch = code.match(/<Table([^>]*)>([\s\S]*?)<\/Table>/i);
  if (tableMatch) {
    // This is a Table component, don't parse its nested children as separate components
    const propsString = tableMatch[1];
    const childrenContent = tableMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Table",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }

  const modalMatch = code.match(/<Modal([^>]*)>([\s\S]*?)<\/Modal>/i);
  if (modalMatch) {
    // This is a Modal component, don't parse its nested children as separate components
    const propsString = modalMatch[1];
    const childrenContent = modalMatch[2]?.trim();
    const props = parseProps(propsString);
    components.push({
      component: "Modal",
      props,
      children: childrenContent || undefined,
    });
    return components;
  }
  
  // Skip wrapper divs, fieldset, etc. - extract only actual components
  // Match all self-closing components: <Component prop="value" />
  // Use matchAll for more reliable matching of all occurrences
  const selfClosingRegex = /<(\w+)([^>]*?)\s*\/>/g;
  const skipTags = ['div', 'fieldset', 'legend', 'span', 'p', 'ul', 'ol', 'li', 'option', 'optgroup', 'button', 'svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'g', 'a', 'img', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  
  // Use matchAll to get all matches at once
  const matches = Array.from(code.matchAll(selfClosingRegex));
  
  for (const match of matches) {
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
  const tagRegex = /<(\w+)([^>]*)>([\s\S]*?)<\/\1>/g;
  const processedComponents = new Set<string>();
  let match;
  
  // First pass: find all wrapper tags and extract their inner content
  const wrapperContents: string[] = [];
  let wrapperMatch;
  const wrapperRegex = /<(\w+)([^>]*)>([\s\S]*?)<\/\1>/g;
  
  while ((wrapperMatch = wrapperRegex.exec(code)) !== null) {
    const wrapperName = wrapperMatch[1];
    if (skipTags.includes(wrapperName.toLowerCase())) {
      wrapperContents.push(wrapperMatch[3]);
    }
  }
  
  // If we found wrapper content, search for components in it
  const searchContent = wrapperContents.length > 0 ? wrapperContents.join('') : code;
  
  // Now find all top-level component tags in the content (excluding nested ones)
  // We need to find components that are at the same level, not nested inside each other
  const componentNames = Object.keys(componentMap);
  let searchIndex = 0;
  const foundRanges: Array<{ start: number; end: number }> = [];
  
  // First, find all component instances and their positions
  const allComponentMatches: Array<{
    name: string;
    start: number;
    end: number;
    props: ComponentProps;
    children: string;
  }> = [];
  
  for (const compName of componentNames) {
    const compRegex = new RegExp(`<${compName}([^>]*)>([\\s\\S]*?)<\\/${compName}>`, 'g');
    let compMatch;
    while ((compMatch = compRegex.exec(searchContent)) !== null) {
      const propsString = compMatch[1];
      const childrenContent = compMatch[2]?.trim();
      const props = parseProps(propsString);
      allComponentMatches.push({
        name: compName,
        start: compMatch.index,
        end: compMatch.index + compMatch[0].length,
        props,
        children: childrenContent,
      });
    }
  }
  
  // Sort by start position
  allComponentMatches.sort((a, b) => a.start - b.start);
  
  // Filter out nested components (components that are inside other components)
  const topLevelComponents = allComponentMatches.filter((comp, index) => {
    // Check if this component is nested inside any previous component
    for (let i = 0; i < index; i++) {
      const prevComp = allComponentMatches[i];
      if (comp.start > prevComp.start && comp.end < prevComp.end) {
        // This component is nested inside a previous one, skip it
        return false;
      }
    }
    return true;
  });
  
  // Add top-level components to the results
  for (const comp of topLevelComponents) {
    const componentKey = `${comp.name}-${JSON.stringify(comp.props)}-${comp.start}`;
    if (!processedComponents.has(componentKey)) {
      processedComponents.add(componentKey);
      components.push({
        component: comp.name,
        props: comp.props,
        children: comp.children || undefined,
      });
    }
  }
  
  // Also handle components that might be at the top level (not in wrappers)
  while ((match = tagRegex.exec(code)) !== null) {
    const componentName = match[1];
    // Skip wrapper/container tags
    if (skipTags.includes(componentName.toLowerCase())) {
      continue;
    }
    // If it's a component we haven't already processed
    if (componentMap[componentName]) {
      const propsString = match[2];
      const childrenContent = match[3]?.trim();
      const props = parseProps(propsString);
      const componentKey = `${componentName}-${JSON.stringify(props)}-${match.index}`;
      if (!processedComponents.has(componentKey)) {
        processedComponents.add(componentKey);
        components.push({
          component: componentName,
          props,
          children: childrenContent || undefined,
        });
      }
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

  // Skip tags that are HTML elements, not React components
  const skipTags = ['div', 'fieldset', 'legend', 'span', 'p', 'ul', 'ol', 'li', 'option', 'optgroup', 'button', 'svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'g', 'a', 'img', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'article', 'section', 'header', 'footer', 'aside', 'main'];

  // Match component opening tag: <ComponentName prop="value">content</ComponentName>
  // or self-closing: <ComponentName prop="value" />
  const selfClosingMatch = code.match(/<(\w+)([^>]*)\s*\/>/);
  if (selfClosingMatch) {
    const componentName = selfClosingMatch[1];
    // Check if it's a React component first (PascalCase and in componentMap)
    // Only skip if it's actually an HTML element (lowercase) AND not a React component
    const isReactComponent = componentName[0] === componentName[0].toUpperCase() && componentMap[componentName];
    const isHTMLElement = componentName[0] === componentName[0].toLowerCase() && skipTags.includes(componentName.toLowerCase());
    
    // Skip HTML elements (but not React components)
    if (isHTMLElement && !isReactComponent) {
      return null;
    }
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
  
  // Check if it's a React component first (PascalCase and in componentMap)
  // Only skip if it's actually an HTML element (lowercase) AND not a React component
  const isReactComponent = componentName[0] === componentName[0].toUpperCase() && componentMap[componentName];
  const isHTMLElement = componentName[0] === componentName[0].toLowerCase() && skipTags.includes(componentName.toLowerCase());
  
  // Skip HTML elements - if the outer tag is an HTML element, try to find components inside it
  if (isHTMLElement && !isReactComponent) {
    // Extract the inner content and try to find components there
    const innerMatch = code.match(/<(\w+)([^>]*)>(.*?)<\/\1>/);
    if (innerMatch) {
      const innerContent = innerMatch[3];
      // Try to find components in the inner content using parseMultipleComponents
      const innerComponents = parseMultipleComponents(innerContent);
      if (innerComponents.length > 0) {
        // If we found components, return the first one (we'll handle the wrapper separately)
        // For now, just return the first component found
        return innerComponents[0];
      }
      // If no components found, return null
      return null;
    }
    return null;
  }

  const propsString = openingTagMatch[2];
  const openingTag = openingTagMatch[0];
  const startIndex = code.indexOf(openingTag) + openingTag.length;

  // For Select, Tabs, Accordion, Breadcrumb, Fieldset, Table, Modal, and IconButton components (and other components that might have nested tags),
  // we need to find the matching closing tag by counting opening/closing tags
  if (componentName === "Select" || componentName === "select" || componentName === "Tabs" || componentName === "Accordion" || componentName === "Breadcrumb" || componentName === "Fieldset" || componentName === "Table" || componentName === "Modal" || componentName === "IconButton") {
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
  
  if (!componentMatch) {
    return null;
  }

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
        <IconComponent className="h-5 w-5" />
        <div className="flex flex-col gap-1">
          {props.title && <AlertTitle>{props.title}</AlertTitle>}
          {(children || props.description) && (
            <AlertDescription>
              {children || props.description}
            </AlertDescription>
          )}
        </div>
      </Alert>
    );
  }

  // Handle Button component
  if (componentName === "Button") {
    // Ensure variant is always set - default to "default" if not provided
    const buttonVariant = props.variant ? props.variant : "default";
    // Map "md" size to "default" since Button component uses "default" not "md"
    const buttonSize = props.size === "md" ? "default" : (props.size || "default");
    
    return (
      <Button
        variant={buttonVariant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
        size={buttonSize as "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"}
        disabled={props.disabled === true || props.disabled === "true"}
        {...(props.className && { className: props.className })}
      >
        {children || props.children || "Button"}
      </Button>
    );
  }

  // Handle IconButton component
  if (componentName === "IconButton") {
    // Parse children if they're a string (like SVG markup)
    let iconChildren: React.ReactNode = children || props.children;
    
    if (typeof iconChildren === "string") {
      // If children is SVG markup, render it as HTML
      iconChildren = (
        <span dangerouslySetInnerHTML={{ __html: iconChildren.trim() }} />
      );
    }
    
    return (
      <IconButton
        variant={props.variant || "default"}
        size={props.size || "md"}
        disabled={props.disabled === true || props.disabled === "true"}
        aria-label={props["aria-label"] || props.ariaLabel || "Icon button"}
        className={props.className}
      >
        {iconChildren}
      </IconButton>
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

  // Handle Fieldset component
  if (componentName === "Fieldset") {
    // Parse nested form components from children string
    let fieldsetChildren: React.ReactNode = null;
    
    if (typeof children === "string") {
      // Clean and normalize the children string
      let cleanedChildren = children.trim();
      // Normalize whitespace: replace newlines with spaces, then collapse multiple spaces
      cleanedChildren = cleanedChildren.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      
      // Directly parse all self-closing components
      const skipTags = ['div', 'fieldset', 'legend', 'span', 'p', 'ul', 'ol', 'li', 'option', 'optgroup'];
      const parsedComponents: Array<{
        component: string;
        props: ComponentProps;
        children?: React.ReactNode;
      }> = [];
      
      // Use a regex that handles whitespace properly
      // Match: <ComponentName ...attributes... /> with any whitespace
      const componentPattern = /<(\w+)([^>]*?)\s*\/>/g;
      
      // Use matchAll for more reliable matching
      const allMatches = Array.from(cleanedChildren.matchAll(componentPattern));
      
      // Process all matches
      for (const match of allMatches) {
        const compName = match[1];
        // Skip wrapper/HTML tags
        if (!skipTags.includes(compName.toLowerCase())) {
          const propsString = match[2]?.trim() || '';
          const compProps = parseProps(propsString);
          parsedComponents.push({
            component: compName,
            props: compProps,
          });
        }
      }
      
      // If we found components, render them all
      if (parsedComponents.length > 0) {
        // Render each component individually to ensure all are rendered
        const renderedComponents = parsedComponents.map((comp, index) => {
          const rendered = renderComponent(comp);
          return <div key={index}>{rendered}</div>;
        });
        fieldsetChildren = <div className="space-y-2">{renderedComponents}</div>;
      } else {
        // Fallback: try parseMultipleComponents
        const fallbackParsed = parseMultipleComponents(cleanedChildren);
        if (fallbackParsed.length > 0) {
          fieldsetChildren = renderMultipleComponents(fallbackParsed);
        } else {
          // Last resort: render as plain text
          fieldsetChildren = cleanedChildren;
        }
      }
    } else if (children) {
      fieldsetChildren = children;
    }
    
    return (
      <Fieldset
        legend={props.legend}
        disabled={props.disabled === true || props.disabled === "true"}
        required={props.required === true || props.required === "true"}
        error={props.error === true || props.error === "true"}
        helperText={props.helperText}
        className={props.className}
      >
        {fieldsetChildren}
      </Fieldset>
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

  // Handle Link component
  if (componentName === "Link") {
    return (
      <Link
        href={props.href}
        variant={props.variant || "default"}
        external={props.external === true || props.external === "true"}
        className={props.className}
      >
        {children}
      </Link>
    );
  }

  // Handle Table components
  if (componentName === "Table") {
    // Parse nested Table components from children string
    let tableChildren: React.ReactNode = null;
    
    if (typeof children === "string") {
      const cleanedChildren = children.trim().replace(/\n/g, " ").replace(/\s+/g, " ");
      
      // Parse TableHeader, TableBody, TableRow, TableHead, TableCell
      const parsedComponents: React.ReactNode[] = [];
      
      // Parse TableHeader
      const headerMatch = cleanedChildren.match(/<TableHeader([^>]*)>([\s\S]*?)<\/TableHeader>/i);
      if (headerMatch) {
        const headerProps = parseProps(headerMatch[1]);
        const headerContent = headerMatch[2];
        // Parse rows within header
        const rowMatches = Array.from(headerContent.matchAll(/<TableRow([^>]*)>([\s\S]*?)<\/TableRow>/gi));
        const headerRows = rowMatches.map((rowMatch, idx) => {
          const rowProps = parseProps(rowMatch[1]);
          const rowContent = rowMatch[2];
          const headMatches = Array.from(rowContent.matchAll(/<TableHead([^>]*)>([^<]*)<\/TableHead>/gi));
          const heads = headMatches.map((headMatch, hIdx) => {
            const headProps = parseProps(headMatch[1]);
            return <TableHead key={hIdx} {...headProps}>{headMatch[2].trim()}</TableHead>;
          });
          return <TableRow key={idx} {...rowProps}>{heads}</TableRow>;
        });
        parsedComponents.push(<TableHeader key="header" {...headerProps}>{headerRows}</TableHeader>);
      }
      
      // Parse TableBody
      const bodyMatch = cleanedChildren.match(/<TableBody([^>]*)>([\s\S]*?)<\/TableBody>/i);
      if (bodyMatch) {
        const bodyProps = parseProps(bodyMatch[1]);
        const bodyContent = bodyMatch[2];
        // Parse rows within body
        const rowMatches = Array.from(bodyContent.matchAll(/<TableRow([^>]*)>([\s\S]*?)<\/TableRow>/gi));
        const bodyRows = rowMatches.map((rowMatch, idx) => {
          const rowProps = parseProps(rowMatch[1]);
          const rowContent = rowMatch[2];
          const cellMatches = Array.from(rowContent.matchAll(/<TableCell([^>]*)>([^<]*)<\/TableCell>/gi));
          const cells = cellMatches.map((cellMatch, cIdx) => {
            const cellProps = parseProps(cellMatch[1]);
            return <TableCell key={cIdx} {...cellProps}>{cellMatch[2].trim()}</TableCell>;
          });
          return <TableRow key={idx} {...rowProps}>{cells}</TableRow>;
        });
        parsedComponents.push(<TableBody key="body" {...bodyProps}>{bodyRows}</TableBody>);
      }
      
      tableChildren = parsedComponents.length > 0 ? parsedComponents : null;
    } else if (children) {
      tableChildren = children;
    }
    
    return (
      <Table
        striped={props.striped === true || props.striped === "true"}
        bordered={props.bordered === true || props.bordered === "true"}
        className={props.className}
      >
        {tableChildren}
      </Table>
    );
  }

  if (componentName === "TableHeader" || componentName === "TableBody" || componentName === "TableRow" || componentName === "TableHead" || componentName === "TableCell") {
    // These are handled within Table parsing, but provide fallback
    const Component = componentMap[componentName];
    if (Component) {
      return <Component {...props}>{children}</Component>;
    }
  }

  // Handle Modal component: in live demos show a trigger button so the modal
  // is previewed on the docs page instead of opening as a separate experience.
  if (componentName === "Modal") {
    const modalChildren =
      typeof children === "string"
        ? (() => {
            const trimmed = children.trim();
            const parsed = parseMultipleComponents(trimmed);
            if (parsed.length > 0) {
              return renderMultipleComponents(parsed);
            }
            // Plain HTML (e.g. <p>, <div>) — render as HTML so tags display
            if (trimmed.startsWith("<")) {
              return (
                <div
                  className="modal-demo-html prose dark:prose-invert max-w-none prose-p:text-foreground text-foreground"
                  dangerouslySetInnerHTML={{ __html: trimmed }}
                />
              );
            }
            return trimmed;
          })()
        : children;

    return (
      <ModalWithTrigger
        title={props.title}
        description={props.description}
        size={props.size || "md"}
        closable={props.closable !== false && props.closable !== "false"}
      >
        {modalChildren}
      </ModalWithTrigger>
    );
  }

  // Handle Tooltip component
  if (componentName === "Tooltip") {
    // Parse the wrapped child component
    let tooltipChild: React.ReactNode = null;
    
    if (typeof children === "string") {
      const trimmedChildren = children.trim();
      
      // First check if it's a valid React component
      const parsed = parseComponentCode(trimmedChildren);
      if (parsed && componentMap[parsed.component]) {
        tooltipChild = renderComponent(parsed);
      } else {
        // Try parseMultipleComponents in case there are multiple components
        const multipleParsed = parseMultipleComponents(trimmedChildren);
        if (multipleParsed.length > 0 && componentMap[multipleParsed[0].component]) {
          tooltipChild = renderComponent(multipleParsed[0]);
        } else {
          // Check if it's a Button component specifically (common case)
          const buttonMatch = trimmedChildren.match(/<Button([^>]*)>(.*?)<\/Button>/);
          if (buttonMatch) {
            const buttonProps = parseProps(buttonMatch[1]);
            const buttonChildren = buttonMatch[2]?.trim();
            tooltipChild = (
              <Button {...buttonProps}>
                {buttonChildren}
              </Button>
            );
          } else {
            // If it's HTML elements (like <button> with <svg>), render as HTML
            // Parse the outer tag to get the element type and props
            // Use a more robust regex that handles multiline and nested content
            const outerTagMatch = trimmedChildren.match(/^<(\w+)([^>]*?)>([\s\S]*?)<\/\1>$/);
            
            if (outerTagMatch) {
              const originalTagName = outerTagMatch[1];
              // Check if it's a React component (PascalCase) - if so, try to parse it as a component
              if (originalTagName[0] === originalTagName[0].toUpperCase() && componentMap[originalTagName]) {
                // It's a React component, parse it properly
                const componentParsed = parseComponentCode(trimmedChildren);
                if (componentParsed) {
                  tooltipChild = renderComponent(componentParsed);
                } else {
                  // Fallback to HTML rendering
                  const tagName = originalTagName.toLowerCase();
                  const propsString = outerTagMatch[2];
                  const innerHTML = outerTagMatch[3];
                  const htmlProps: any = {};
                  if (propsString) {
                    const classNameMatch = propsString.match(/className="([^"]*)"/);
                    if (classNameMatch) htmlProps.className = classNameMatch[1];
                    const ariaLabelMatch = propsString.match(/aria-label="([^"]*)"/);
                    if (ariaLabelMatch) htmlProps['aria-label'] = ariaLabelMatch[1];
                    const styleMatch = propsString.match(/style="([^"]*)"/);
                    if (styleMatch) htmlProps.style = styleMatch[1];
                  }
                  const HtmlTag = tagName as keyof React.JSX.IntrinsicElements;
                  tooltipChild = React.createElement(
                    HtmlTag,
                    { ...htmlProps, dangerouslySetInnerHTML: { __html: innerHTML } }
                  );
                }
              } else {
                // It's an HTML element (lowercase), render as HTML
                const tagName = originalTagName.toLowerCase();
                const propsString = outerTagMatch[2];
                const innerHTML = outerTagMatch[3];
                
                // Parse props from the props string
                const htmlProps: any = {};
                if (propsString) {
                  // Extract className
                  const classNameMatch = propsString.match(/className="([^"]*)"/);
                  if (classNameMatch) htmlProps.className = classNameMatch[1];
                  
                  // Extract aria-label
                  const ariaLabelMatch = propsString.match(/aria-label="([^"]*)"/);
                  if (ariaLabelMatch) htmlProps['aria-label'] = ariaLabelMatch[1];
                  
                  // Extract other common attributes
                  const styleMatch = propsString.match(/style="([^"]*)"/);
                  if (styleMatch) htmlProps.style = styleMatch[1];
                }
                
                // For button elements, ensure they have proper flexbox styling for icon buttons
                if (tagName === 'button') {
                  const existingClasses = htmlProps.className || '';
                  // Add inline-flex and items-center if not already present (for proper icon centering)
                  if (!existingClasses.includes('inline-flex') && !existingClasses.includes('flex')) {
                    htmlProps.className = `inline-flex items-center justify-center ${existingClasses}`.trim();
                  }
                  // If it looks like an icon button (has SVG), ensure it's square
                  if (innerHTML.includes('<svg') && !existingClasses.includes('aspect-square') && !existingClasses.includes('size-')) {
                    htmlProps.className = `${htmlProps.className} aspect-square`.trim();
                  }
                  // Ensure button has proper text color (for SVG icons and text)
                  if (!existingClasses.includes('text-') && !existingClasses.includes('text-gray-') && !existingClasses.includes('text-black') && !existingClasses.includes('text-white')) {
                    htmlProps.className = `${htmlProps.className} text-gray-900 dark:text-gray-100`.trim();
                  }
                }
                
                // Create the React element with the proper tag (lowercase for HTML elements)
                const HtmlTag = tagName as keyof React.JSX.IntrinsicElements;
                tooltipChild = React.createElement(
                  HtmlTag,
                  { ...htmlProps, dangerouslySetInnerHTML: { __html: innerHTML } }
                );
              }
            } else {
              // Fallback: render the entire HTML string directly
              // This handles cases where the regex didn't match (e.g., complex nested structures)
              tooltipChild = (
                <div 
                  dangerouslySetInnerHTML={{ __html: trimmedChildren }} 
                  style={{ display: 'inline-block' }}
                  className="text-gray-900 dark:text-gray-100"
                />
              );
            }
          }
        }
      }
    } else {
      tooltipChild = children;
    }
    
    return (
      <Tooltip
        content={props.content}
        placement={props.placement || "top"}
        delay={props.delay ? parseInt(props.delay, 10) : 200}
        disabled={props.disabled === true || props.disabled === "true"}
      >
        {tooltipChild}
      </Tooltip>
    );
  }

  // Handle Progress component
  if (componentName === "Progress") {
    return (
      <Progress
        value={props.value !== undefined ? (typeof props.value === "string" ? parseFloat(props.value) : props.value) : 0}
        max={props.max !== undefined ? (typeof props.max === "string" ? parseFloat(props.max) : props.max) : 100}
        showLabel={props.showLabel === true || props.showLabel === "true"}
        size={props.size || "md"}
        variant={props.variant || "default"}
        className={props.className}
      />
    );
  }

  // Handle Spinner component
  if (componentName === "Spinner") {
    return (
      <Spinner
        size={props.size || "md"}
        variant={props.variant || "default"}
        className={props.className}
      />
    );
  }

  // Default: try to find in component map
  const Component = componentMap[componentName];
  if (Component) {
    return <Component {...props}>{children}</Component>;
  }

  return <div className="text-red-500 text-sm">Unknown component: {componentName}</div>;
}
