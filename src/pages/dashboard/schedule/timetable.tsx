import { Search, Edit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { timeSlots } from "./data";
import { useTimetable } from "./model/useTimetable";

import ScheduleHeader from "./ScheduleHeader";
import TimetableFilters from "./parts/TimetableFilters";
import TimetableGrid from "./parts/TimetableGrid";
import emptysearch from "@/assets/empty-search.png";

const AdminScheduleTimetable = () => {
  const { 
    hasSearched, 
    isEditMode, 
    filters, 
    gridData, 
    handleSearch, 
    updateFilter, 
    toggleEditMode,
    handleCellChange,
    saveTimetable 
  } = useTimetable();

  return (
    <div className="min-h-screen bg-white font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScheduleHeader title="Timetable" />
        
        <div className="mt-10 max-w-4xl mx-auto">
          <TimetableFilters 
            filters={filters} 
            updateFilter={updateFilter} 
            isEditMode={isEditMode} 
          />

          {!isEditMode && (
            <div className="flex justify-center mt-10">
              <button 
                onClick={handleSearch}
                className="w-full max-w-lg bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          )}
        </div>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            {!hasSearched && !isEditMode ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="relative mb-8">
                  <img src={emptysearch} alt="Empty Search" className="w-40 h-40" />
                </div>
                <p className="text-gray-400 text-2xl font-montserrat">You've not set your filter</p>
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-12"
              >
                <TimetableGrid 
                  timeSlots={timeSlots} 
                  timetableData={gridData} 
                  isEditMode={isEditMode} 
                  onCellChange={handleCellChange}
                />

                <div className="flex justify-center mt-10 pb-10">
                   <button 
                    onClick={isEditMode ? saveTimetable : toggleEditMode}
                    className="w-full max-w-lg bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isEditMode ? "Save" : (
                      <>
                        <Edit2 className="w-5 h-5" />
                        Edit timetable
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AdminScheduleTimetable;