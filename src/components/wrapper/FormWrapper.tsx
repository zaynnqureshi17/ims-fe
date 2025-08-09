"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type FormWrapperProps = React.FormHTMLAttributes<HTMLFormElement> & {
  disabled?: boolean;
  formRef?: React.ForwardedRef<HTMLFormElement>;
};

export function FormWrapper({
  onSubmit,
  disabled = false,
  formRef,
  children,
  className,
  ...props
}: FormWrapperProps) {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={cn("space-y-4", className)}
      {...props}
    >
      <fieldset
        disabled={disabled}
        className={cn("", disabled && "opacity-50 pointer-events-none")}
      >
        {children}
      </fieldset>
    </form>
  );
}
