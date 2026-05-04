import ScheduleHeader from "./ScheduleHeader";

const events = [
  {
    id: 1,
    title: "PTA Meeting",
    description:
      "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
  },
  {
    id: 2,
    title: "PTA Meeting",
    description:
      "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
  },
  {
    id: 3,
    title: "PTA Meeting",
    description:
      "The termly meeting for Parents, teachers, and staffs to interact and evaluate students performance and the schools performance and come up with be...",
    date: "24-10-2024",
    time: "12:00 P.M.",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScheduleHeader title="Events" />

        <div className="mt-10 ">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-6 w-full">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white w-full rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex gap-6 text-sm">
                    <p className="text-gray-500">
                      <span className="font-semibold">Date:</span> {event.date}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-semibold">Time:</span> {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
