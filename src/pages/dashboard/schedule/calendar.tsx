import React from "react";
import { Check, Edit2, Pen, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ScheduleHeader from "./ScheduleHeader";
import { useCalendar } from "./model/useCalendar";
import CalendarViewSelector from "./parts/CalendarViewSelector";
import CalendarYearView from "./parts/CalendarYearView";
import CalendarSpecialDates from "./parts/CalendarSpecialDates";
import CalendarSessionView from "./parts/CalendarSessionView";
import CalendarTermView from "./parts/CalendarTermView";
import CalendarUpdateForm from "./parts/CalendarUpdateForm";

const CalendarPage = () => {
  const {
    view,
    setView,
    sessionMode,
    setSessionMode,
    hasSession,
    setHasSession,
    startMonth,
    selectedDate,
    setSelectedDate,
    handleNext,
    handlePrev,
    visibleMonths,
    modifiers,
    triggerNewSession,
    triggerEditSession,
    isUpdating,
    setIsUpdating,
    toggleUpdate,
    saveUpdate,
  } = useCalendar();

  return (
    <div className="min-h-screen bg-white font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
          {view === "Session" ? (
            sessionMode === "" ? (
              <button
                onClick={triggerNewSession}
                className="flex items-center gap-2 px-10 py-2 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-colors"
              >
                <Plus className="w-4 h-4" />
                New Sessions
              </button>
            ) :  sessionMode === "create" ? (
              <button
                onClick={() => setSessionMode("view")}
                className="flex items-center gap-2 px-10 py-2 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-colors"
              >
                <Check className="w-4 h-4" />
                Save
              </button>
            ) : (
              <button
                onClick={() => setSessionMode("view")}
                className="flex items-center gap-2 px-10 py-2 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-colors"
              >
                <Check className="w-4 h-4" />
                Save
              </button>
            )
          ) : view === "Year" ? (
            <button
              onClick={isUpdating ? saveUpdate : toggleUpdate}
              className="flex items-center gap-2 px-6 py-2 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-colors"
            >
              {isUpdating ? (
                <>
                  <Check className="w-4 h-4" />
                  Save update
                </>
              ) : (
                <>
                  <Pen className="w-4 h-4" />
                  Update Calendar
                </>
              )}
            </button>
          ) : (
            <button
              onClick={triggerNewSession}
              className="flex items-center gap-2 px-6 py-2 bg-[#1C3A1C] text-white rounded-lg font-bold hover:bg-[#152a15] transition-colors"
            >
              <Plus className="w-4 h-4" />
              New session
            </button>
          )}
        </div>
        <ScheduleHeader title="" />

        <div className="mt-8">
          <CalendarViewSelector view={view} setView={setView} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <AnimatePresence mode="wait">
            {view === "Year" ? (
              <motion.div
                key="year"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-1"
              >
                {isUpdating ? (
                  <CalendarUpdateForm selectedDate={selectedDate} />
                ) : (
                  <CalendarYearView
                    visibleMonths={visibleMonths}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    modifiers={modifiers}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                  />
                )}
              </motion.div>
            ) : view === "Session" ? (
              <motion.div
                key="session"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-1"
              >
                <CalendarSessionView
                  mode={sessionMode}
                  setMode={setSessionMode}
                  hasSession={hasSession}
                  setHasSession={setHasSession}
                />
              </motion.div>
            ) : (
              <motion.div
                key="term"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-1"
              >
                 <CalendarTermView />
               </motion.div>
            )}
          </AnimatePresence>

          <CalendarSpecialDates />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
