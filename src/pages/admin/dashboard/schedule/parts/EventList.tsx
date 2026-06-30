
import { Event } from "../model/useEvents";

interface EventListProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="space-y-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white w-full rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start gap-6 hover:shadow-md transition-shadow group"
        >
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
              {event.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm max-w-2xl">
              {event.description}
            </p>
            <div className="flex gap-8 pt-2">
              <p className="text-sm font-medium text-gray-800">
                <span className="text-gray-400 font-bold mr-2">Date:</span> {event.date}
              </p>
              <p className="text-sm font-medium text-gray-800">
                <span className="text-gray-400 font-bold mr-2">Time:</span> {event.time}
              </p>
            </div>
            <button className="text-[#00AEEF] text-xs font-bold hover:underline pt-2">
              View Details
            </button>
          </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default EventList;
