import { useState, useMemo } from "react";
import { academicEvents } from "../data";

export const useCalendar = () => {
  const [startMonth, setStartMonth] = useState(new Date(2024, 0)); // Start with Jan 2024
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
  const handleNext = () => {
    const nextStart = new Date(startMonth);
    nextStart.setMonth(startMonth.getMonth() + 4);
    setStartMonth(nextStart);
  };

  const handlePrev = () => {
    const prevStart = new Date(startMonth);
    prevStart.setMonth(startMonth.getMonth() - 4);
    setStartMonth(prevStart);
  };

  const visibleMonths = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => {
      const d = new Date(startMonth);
      d.setMonth(startMonth.getMonth() + i);
      return {
        name: d.toLocaleString("default", { month: "long" }),
        date: d,
      };
    });
  }, [startMonth]);

  const modifiers = useMemo(() => {
    const highlighted: Date[] = [];
    const outlined: Date[] = [];
    
    academicEvents.forEach(group => {
      group.events.forEach(event => {
        if (event.type === "highlighted") highlighted.push(event.date);
        else outlined.push(event.date);
      });
    });
    
    return { highlighted, outlined };
  }, []);

  return {
    startMonth,
    selectedDate,
    setSelectedDate,
    handleNext,
    handlePrev,
    visibleMonths,
    modifiers,
  };
};
