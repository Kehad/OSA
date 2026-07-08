import { useState } from "react";

import { Event } from "../types";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "PTA Meeting",
    description: "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
    recipients: "Parents and Staffs",
    sendNotification: "Yes"
  },
  {
    id: "2",
    title: "PTA Meeting",
    description: "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
    recipients: "Parents and Staffs",
    sendNotification: "Yes"
  },
];

export const useEvents = () => {
  const [viewMode, setViewMode] = useState<"list" | "create" | "edit">("list");
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const triggerCreate = () => {
    setSelectedEvent(null);
    setViewMode("create");
  };

  const triggerEdit = (event: Event) => {
    setSelectedEvent(event);
    setViewMode("edit");
  };

  const triggerDelete = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const saveEvent = (data: Omit<Event, "id">) => {
    if (viewMode === "edit" && selectedEvent) {
      setEvents(prev => prev.map(e => e.id === selectedEvent.id ? { ...data, id: e.id } : e));
    } else {
      const newEvent = { ...data, id: Math.random().toString(36).substr(2, 9) };
      setEvents(prev => [...prev, newEvent]);
    }
    setViewMode("list");
  };

  return {
    viewMode,
    setViewMode,
    events,
    selectedEvent,
    triggerCreate,
    triggerEdit,
    triggerDelete,
    saveEvent,
  };
};
