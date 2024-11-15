import { cn } from "@/lib/utils";
import * as React from "react";

const createElement = <Elem extends HTMLElement>(el: string, classes: string) =>
  React.forwardRef<Elem, React.HTMLProps<Elem>>(
    ({ className, ...props }, ref) =>
      React.createElement(el, {
        className: cn(classes, className),
        ref,
        ...props,
      })
  );

export const TypographyP = createElement<HTMLParagraphElement>(
  "p",
  "text-justify leading-7 [&:not(:first-child)]:mt-4"
);

export const TypographyStrong = createElement<HTMLSpanElement>(
  "strong",
  "font-bold"
);

export const TypographyUl = createElement<HTMLUListElement>(
  "ul",
  "ml-6 list-disc [&>li]:mt-2"
);

export const TypographyA = createElement<HTMLAnchorElement>(
  "a",
  "font-medium text-primary underline underline-offset-4"
);
