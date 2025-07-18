"use client";

import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DateRangePicker() {
  const [from, setFrom] = useState<Date | undefined>();
  const [to, setTo] = useState<Date | undefined>();

  return (
    <div className="space-y-2 w-full">
      <Label>Date Range</Label>
      <div className="flex  gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-auto  justify-start text-left font-normal", !from && "text-muted-foreground")}
            >
              {from ? format(from, "MM/dd/yyyy") : "mm/dd/yyyy"}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={from} onSelect={setFrom} initialFocus />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-auto  justify-start text-left font-normal", !to && "text-muted-foreground")}
            >
              {to ? format(to, "MM/dd/yyyy") : "mm/dd/yyyy"}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={to} onSelect={setTo} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
