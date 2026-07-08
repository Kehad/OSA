import { useForm } from "react-hook-form";
import Input from "@/components/ui/input";

import { CalendarUpdateFormProps } from "../types";

const CalendarUpdateForm: React.FC<CalendarUpdateFormProps> = ({ selectedDate }) => {
  const { control } = useForm({
    defaultValues: {
      date: selectedDate ? selectedDate.toISOString().split('T')[0] : "",
      eventTitle: "",
      eventType: "highlighted"
    }
  });

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex-1">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Update Calendar Event</h2>
      
      <div className="space-y-6 max-w-xl">
        <Input
          name="date"
          control={control}
          inputLabel="Event Date"
          type="date"
        />

        <Input
          name="eventTitle"
          control={control}
          inputLabel="Event Title"
          placeholderText="Enter event title e.g. First Term Resumption"
        />

        <Input
          name="eventType"
          control={control}
          inputLabel="Event Type"
          type="select"
          options={[
            { label: "Holiday / Important (Green Highlight)", value: "highlighted" },
            { label: "Assessment / Exam (Green Outline)", value: "outlined" },
          ]}
        />

        <div className="pt-4 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">
           <p className="text-xs text-gray-500 italic text-center">
             Select a date on the calendar to prepopulate the date field.
           </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarUpdateForm;
