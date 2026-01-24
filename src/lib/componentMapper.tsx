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
  
  // First, check if there's a Select component - handle it specially to avoid parsing options
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

  // For Select components (and other components that might have nested tags),
  // we need to find the matching closing tag by counting opening/closing tags
  if (componentName === "Select" || componentName === "select") {
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

  // Extract string props: prop="value" or prop='value'
  const stringProps = propsString.matchAll(/(\w+)="([^"]*)"/g);
  for (const match of stringProps) {
    props[match[1]] = match[2];
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
