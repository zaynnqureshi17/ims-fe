"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime());
}

type Calendar28Props = {
  name: string;
  label?: string;
  control: any;
};

export function Calendar28({ name, label, control }: Calendar28Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const dateValue = field.value ? new Date(field.value) : undefined;
        const [month, setMonth] = React.useState<Date | undefined>(dateValue);
        const [value, setValue] = React.useState(formatDate(dateValue));

        return (
          <div className="flex flex-col gap-3">
            {label && (
              <Label htmlFor={name} className="px-1">
                {label}
              </Label>
            )}
            <div className="relative flex gap-2">
              <Input
                id={name}
                value={value}
                placeholder="Select date"
                className="bg-background pr-10"
                onChange={(e) => {
                  const d = new Date(e.target.value);
                  setValue(e.target.value);
                  if (isValidDate(d)) {
                    field.onChange(d.toISOString());
                    setMonth(d);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }}
              />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id={`${name}-picker`}
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={dateValue}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(d) => {
                      if (d) {
                        field.onChange(d.toISOString());
                        setValue(formatDate(d));
                      }
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        );
      }}
    />
  );
}
