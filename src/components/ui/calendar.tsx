// "use client";

// import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { DayPicker } from "react-day-picker";

// import { cn } from "@/lib/utils";

// export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// function Calendar({
//   className,
//   classNames,
//   showOutsideDays = true,
//   ...props
// }: CalendarProps) {
//   return (
//     <DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn("p-4", className)}
//       classNames={{
//         months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
//         month: "space-y-4",
//         month_caption: "flex justify-center pt-1 relative items-center mb-4",
//         caption_label: "text-sm font-semibold text-gray-700",
//         nav: "space-x-1 flex items-center",
//         button_previous: cn(
//           "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 z-10 transition-opacity"
//         ),
//         button_next: cn(
//           "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 z-10 transition-opacity"
//         ),
//         month_grid: "w-full border-collapse space-y-1",
//         weekdays: "flex",
//         weekday: "text-gray-400 rounded-md w-10 font-medium text-[0.85rem] mb-2",
//         week: "flex w-full mt-1",
//         day: "h-10 w-10 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
//         day_button: cn(
//           "h-10 w-10 p-0 font-normal transition-all rounded-lg hover:bg-gray-100 flex items-center justify-center"
//         ),
//         selected: "bg-[#1A2E1A] text-white hover:bg-[#1A2E1A] hover:text-white focus:bg-[#1A2E1A] focus:text-white font-bold",
//         today: "text-[#1A2E1A] font-bold ring-1 ring-[#1A2E1A] ring-offset-2",
//         outside: "text-gray-300 opacity-50",
//         disabled: "text-gray-300 opacity-50",
//         range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
//         hidden: "invisible",
//         ...classNames,
//       }}
//       components={{
//         Chevron: (props) => {
//           if (props.orientation === "left") {
//             return <ChevronLeft className="h-4 w-4" />;
//           }
//           return <ChevronRight className="h-4 w-4" />;
//         },
//       }}
//       {...props}
//     />
//   );
// }
// Calendar.displayName = "Calendar";

// export { Calendar };


"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-xs font-medium text-gray-500",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 z-10 transition-opacity"
        ),
        button_next: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 z-10 transition-opacity"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-gray-400 rounded-md w-9 font-normal text-[0.75rem] mb-1",
        week: "flex w-full mt-0.5",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day_button: cn(
          "h-9 w-9 p-0 font-normal text-sm transition-colors rounded-md hover:bg-gray-100 flex items-center justify-center"
        ),
        selected: "bg-[#1C3A1C] text-white hover:bg-[#1C3A1C] hover:text-white focus:bg-[#1C3A1C] focus:text-white rounded-md",
        today: "bg-accent text-accent-foreground",
        outside: "text-gray-300 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-gray-300 opacity-50",
        range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft className="h-4 w-4" />;
          }
          return <ChevronRight className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };