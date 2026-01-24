"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
};

// Icon mapping
export const iconMap: Record<string, React.ComponentType<any>> = {
  InfoIcon,
  CheckCircle2,
  AlertTriangle,
  XCircle,
};

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

  const componentMatch = code.match(/<(\w+)([^>]*)>(.*?)<\/\1>/);
  if (!componentMatch) return null;

  const componentName = componentMatch[1];
  const propsString = componentMatch[2];
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
      if (['closable', 'disabled', 'required', 'readonly'].includes(word)) {
        props[word] = true;
      }
    }
  }

  return props;
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

  // Default: try to find in component map
  const Component = componentMap[componentName];
  if (Component) {
    return <Component {...props}>{children}</Component>;
  }

  return <div className="text-red-500 text-sm">Unknown component: {componentName}</div>;
}
