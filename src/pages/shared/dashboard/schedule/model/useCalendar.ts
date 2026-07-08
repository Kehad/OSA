import { useState, useMemo } from "react";
import { academicEvents } from "../data";

export const useCalendar = () => {
  const [view, setView] = useState<"Year" | "Session" | "Term">("Year");
  const [sessionMode, setSessionMode] = useState<"view" | "create" | "edit" | "">("");
  const [hasSession, setHasSession] = useState(false); // Mock state
  const [isUpdating, setIsUpdating] = useState(false);
  
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

  const triggerNewSession = () => {
    setView("Session");
    setSessionMode("create");
    setHasSession(true);
  };

  const triggerEditSession = () => {
    setView("Session");
    setSessionMode("edit");
  };

  const toggleUpdate = () => {
    setIsUpdating(!isUpdating);
  };

  const saveUpdate = () => {
    console.log("Saving calendar update for:", selectedDate);
    setIsUpdating(false);
  };

  return {
    view,
    setView,
    sessionMode,
    setSessionMode,
    hasSession,
    setHasSession,
    isUpdating,
    setIsUpdating,
    startMonth,
    selectedDate,
    setSelectedDate,
    handleNext,
    handlePrev,
    visibleMonths,
    modifiers,
    triggerNewSession,
    triggerEditSession,
    toggleUpdate,
    saveUpdate,
  };
};
