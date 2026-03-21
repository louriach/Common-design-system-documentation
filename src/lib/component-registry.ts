/**
 * COMPONENT REGISTRY
 * ==================
 * This is the only file you need to edit to wire up your own components.
 *
 * How it works:
 *   1. Import your component (from your own library, a package, wherever)
 *   2. Add it to the registry below under the same name used in your .md files
 *
 * Example — swapping in your own Button:
 *
 *   import { Button } from "@your-org/ui"
 *
 *   export const componentRegistry = {
 *     ...defaultRegistry,
 *     Button,   // ← your component replaces the default
 *   }
 *
 * The name in the registry must match the component name used in the markdown
 * code blocks, e.g. <Button variant="outline"> maps to registry["Button"].
 */

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
import type { ComponentType } from "react";

export const componentRegistry: Record<string, ComponentType<any>> = {
  // ── Actions ──────────────────────────────────────────────────────────────
  Button,
  IconButton,

  // ── Layout ───────────────────────────────────────────────────────────────
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,

  // ── Feedback ─────────────────────────────────────────────────────────────
  Alert,
  AlertTitle,
  AlertDescription,
  Modal,
  Progress,
  Spinner,
  Tooltip,

  // ── Data display ─────────────────────────────────────────────────────────
  Avatar,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,

  // ── Navigation ───────────────────────────────────────────────────────────
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,

  // ── Forms ────────────────────────────────────────────────────────────────
  Checkbox,
  Combobox,
  DatePicker,
  Fieldset,
  Input,
  Radio,
  Select,
  Textarea,
  Toggle,
};
