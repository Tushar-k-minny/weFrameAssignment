"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "../ui/Icons";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function DateCard({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 0),
  });

  return (
    <div className={cn("grid  gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[auto] px-[30px] py-[20px]  justify-start text-left text-[14px] ",
              !date && "text-muted-foreground"
            )}>
            {date?.from ? (
              date.to ? (
                <div className="flex gap-3 font-semibold ">
                  <div className="flex gap-2">
                    <div>{format(date.from, "dd-LLL-yyyy")}</div>
                    <div>{CalendarIcon}</div>
                  </div>
                  <div>OR</div>
                  <div className="flex gap-2">
                    <div>{format(date.to, "dd-LLL-yyyy")}</div>
                    <div>{CalendarIcon}</div>
                  </div>
                </div>
              ) : (
                format(date.from, "dd-LLL-yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DateCard;
