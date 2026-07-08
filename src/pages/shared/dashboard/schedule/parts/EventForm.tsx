import { useForm } from "react-hook-form";
import Input from "@/components/ui/input";
import { EventFormProps } from "../types";

const EventForm: React.FC<EventFormProps> = ({ mode, initialData, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialData || {
      title: "",
      description: "",
      date: "",
      time: "",
      recipients: "",
      sendNotification: ""
    }
  });

  return (
    <div className="bg-white p-8 pt-0 shadow-sm flex-1 max-w-2xl animate-in fade-in zoom-in-95 duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">
        {mode === "create" ? "Create Events" : "Edit Events"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          name="title"
          control={control}
          inputLabel="Event title *"
          placeholderText="Enter event title"
          rules={{ required: "Event title is required" }}
        />

        <Input
          name="description"
          control={control}
          type="multiline"
          inputLabel="Event description *"
          placeholderText="Enter event description"
          rules={{ required: "Event description is required" }}
          textInputProps={{ rows: 4 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            name="date"
            control={control}
            type="date"
            inputLabel="Event date *"
            rules={{ required: "Event date is required" }}
          />
          <Input
            name="time"
            control={control}
            type="input"
            inputLabel="Event time *"
            placeholderText="e.g. 12:00 P.M."
            rules={{ required: "Event time is required" }}
          />
        </div>

        <Input
          name="recipients"
          control={control}
          type="select"
          inputLabel="Recipients *"
          placeholderText="Select Recipients"
          options={[
            { label: "Parents and Staffs", value: "Parents and Staffs" },
            { label: "Students only", value: "Students only" },
            { label: "All", value: "All" },
          ]}
          rules={{ required: "Recipients selection is required" }}
        />

        <Input
          name="sendNotification"
          control={control}
          type="select"
          inputLabel="Send notification *"
          placeholderText="Select option"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          rules={{ required: "Notification choice is required" }}
        />

        <div className="pt-8">
          <button
            type="submit"
            className="w-full py-4 bg-[#1C3A1C] text-white rounded-xl font-bold hover:bg-[#152a15] transition-all shadow-lg text-lg active:scale-[0.99]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
