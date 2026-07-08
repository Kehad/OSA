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
         
        </div>
        <ScheduleHeader title="" />

      <div className="m-12">
        <AnimatePresence mode="wait">

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
          
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
};

export default EventsPage;
