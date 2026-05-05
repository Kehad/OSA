import { Plus } from "lucide-react";
import emptyEvent from "@/assets/empty-search.png"; // Reusing the high-quality empty state asset

interface EventEmptyStateProps {
  onCreate: () => void;
}

const EventEmptyState: React.FC<EventEmptyStateProps> = ({ onCreate }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative mb-12">
        <div className="w-56 h-56 rounded-full bg-gray-50 flex items-center justify-center border-4 border-white shadow-inner">
          <img src={emptyEvent} alt="No Events" className="w-36 h-36 opacity-60" />
        </div>
      </div>
      <p className="text-gray-400 text-2xl font-montserrat mb-10">There are no events yet</p>
      <button 
        onClick={onCreate}
        className="flex items-center gap-2 px-12 py-4 bg-[#1C3A1C] text-white rounded-xl font-bold hover:bg-[#152a15] active:scale-[0.98] transition-all shadow-lg shadow-[#1C3A1C]/20"
      >
        <Plus className="w-5 h-5" />
        Add new event
      </button>
    </div>
  );
};

export default EventEmptyState;
