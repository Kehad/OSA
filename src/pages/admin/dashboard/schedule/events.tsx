import { Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ScheduleHeader from "./ScheduleHeader";
import { useEvents } from "./model/useEvents";
import EventEmptyState from "./parts/EventEmptyState";
import EventList from "./parts/EventList";
import EventForm from "./parts/EventForm";

const EventsPage = () => {
  const {
    viewMode,
    setViewMode,
    events,
    selectedEvent,
    triggerCreate,
    triggerEdit,
    triggerDelete,
    saveEvent,
  } = useEvents();

  return (
    <div className="min-h-screen bg-white font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Events</h1>
          {viewMode === "list" ? (
            <button
              onClick={triggerCreate}
              className="flex items-center gap-2 px-8 py-2.5 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-all shadow-md active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add new event
            </button>
          ) : (
            <button
              onClick={() => document.querySelector("form")?.requestSubmit()}
              className="flex items-center gap-2 px-10 py-2.5 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-all shadow-md active:scale-95"
            >
              <Check className="w-4 h-4" />
              Save
            </button>
          )}
        </div>
        <ScheduleHeader title="" />

      <div className="m-12">
        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Upcoming Events
              </h2>

              {events.length === 0 ? (
                <EventEmptyState onCreate={triggerCreate} />
              ) : (
                <EventList
                  events={events}
                  onEdit={triggerEdit}
                  onDelete={triggerDelete}
                />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <EventForm
                mode={viewMode}
                initialData={selectedEvent}
                onSubmit={saveEvent}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
};

export default EventsPage;
