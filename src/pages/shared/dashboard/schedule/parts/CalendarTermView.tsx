import { ChevronDown, Edit2, Pen } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/input";

import { TermEvent } from "../types";

const initialEvents = [
  {
    label: "Begins / Ends",
    name: "main",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
  {
    label: "First Assessment",
    name: "first_assessment",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
  {
    label: "Mid-Term Break",
    name: "mid_term",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
  {
    label: "Second Assessment",
    name: "second_assessment",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
  {
    label: "Revision Week",
    name: "revision",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
  {
    label: "Examinations",
    name: "exams",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
  {
    label: "Holiday",
    name: "holiday",
    begins: "2024-10-24",
    ends: "2024-10-24",
  },
];

const CalendarTermView: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: initialEvents.reduce(
      (acc, curr) => ({
        ...acc,
        [`${curr.name}_begins`]: curr.begins,
        [`${curr.name}_ends`]: curr.ends,
      }),
      {},
    ),
  });

  const onSubmit = (data: any) => {
    console.log("Saving term dates:", data);
    setIsEditMode(false);
  };

  const toggleEdit = () => setIsEditMode(!isEditMode);

  return (
    <div className="bg-white w-full rounded-[2rem] p-8 shadow-sm border border-gray-100 flex-1">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Terms</h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-2xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors">
              First Term
            </span>
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
          <span className="px-5 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
            Ongoing
          </span>
        </div>

        {isEditMode && (
          <h3 className="text-xl font-bold text-gray-800 mt-4 mb-8">
            Edit First Term; 2024/2025 Academic Session
          </h3>
        )}

        <div className="space-y-2">
          {initialEvents.map((event, idx) => (
            <div key={idx} className="space-y-4 pb-2">
              {!isEditMode && (
                <h4 className="text-sm font-bold text-gray-800">
                  {event.label}
                </h4>
              )}
              <div className="grid grid-cols-2 gap-8">
                <Input
                  name={`${event.name}_begins` as any}
                  control={control}
                  inputLabel={isEditMode ? `${event.label} Begins` : "Begins"}
                  type={isEditMode ? "date" : "input"}
                  editable={isEditMode}
                />
                <Input
                  name={`${event.name}_ends` as any}
                  control={control}
                  inputLabel={isEditMode ? `${event.label} Ends` : "Ends"}
                  type={isEditMode ? "date" : "input"}
                  editable={isEditMode}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <button
            type="button"
            onClick={toggleEdit}
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#1C3A1C] text-white rounded-xl font-bold hover:bg-[#152a15] transition-all shadow-lg"
          >
            {!isEditMode && <Pen className="w-4 h-4" />}
            {isEditMode ? "Save Term" : "Edit Term"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalendarTermView;
