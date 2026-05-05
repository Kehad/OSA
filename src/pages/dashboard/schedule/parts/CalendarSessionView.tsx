import { Edit3, Plus } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import Input from "@/components/ui/input";
import emptySession from "@/assets/empty-search.png";

interface CalendarSessionViewProps {
  mode: "view" | "create" | "edit" | "";
  setMode: (mode: "view" | "create" | "edit" | "") => void;
  hasSession: boolean;
  setHasSession: (has: boolean) => void;
}

const CalendarSessionView: React.FC<CalendarSessionViewProps> = ({
  mode,
  setMode,
  hasSession,
  setHasSession,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      sessionName: "2024/2025 academic session",
      sessionBegins: "2024-10-24",
      sessionEnds: "2024-10-24",
      terms: [
        { name: "", begins: "", ends: "" }
      ]
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "terms"
  });

  const onSubmit = (data: any) => {
    console.log("Saving session:", data);
    setHasSession(true);
    setMode("view");
  };

  const handleCreateNew = () => {
    console.log("Create new session");
    setMode("create");
    setHasSession(true);
  };

  if (!hasSession) {
    return (
      <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-gray-100 flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
           <div className="w-48 h-48 rounded-full bg-gray-50 flex items-center justify-center border-4 border-white shadow-inner">
              <img src={emptySession} alt="No Session" className="w-32 h-32 opacity-50" />
           </div>
        </div>
        <h3 className="text-xl font-bold text-gray-400 mb-8">No session has been set up yet</h3>
        <button 
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-10 py-4 bg-[#1C3A1C] text-white rounded-xl font-bold hover:bg-[#152a15] transition-all shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Set up new session
        </button>
      </div>
    );
  }

  if (mode === "create" || mode === "edit") {
    return (
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex-1 max-w-2x mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          {mode === "create" ? "Create New Session" : "Edit Session"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <Input
              name="sessionName"
              control={control}
              inputLabel="Session name *"
              placeholderText="Enter Session name e.g. 2024/2025 academic session"
              rules={{ required: "Session name is required" }}
            />

            <Input
              name="sessionBegins"
              control={control}
              inputLabel="Session begins"
              type="date"
            />

            <Input
              name="sessionEnds"
              control={control}
              inputLabel="Session ends"
              type="date"
            />
          </div>

          <div className="pt-4 space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Terms</h3>
            
            {fields.map((field, index) => (
              <div key={field.id} className="space-y-6">
                <Input
                  name={`terms.${index}.name`}
                  control={control}
                  inputLabel="Term name *"
                  placeholderText="Enter Term name e.g. First term"
                  rules={{ required: "Term name is required" }}
                />

                <Input
                  name={`terms.${index}.begins`}
                  control={control}
                  inputLabel="Term begins"
                  type="date"
                />

                <Input
                  name={`terms.${index}.ends`}
                  control={control}
                  inputLabel="Term ends"
                  type="date"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({ name: "", begins: "", ends: "" })}
              className="w-full py-6 bg-gray-100/50 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 text-gray-400 hover:bg-gray-100 transition-all"
            >
              <Plus className="w-6 h-6" />
              <span className="text-sm font-bold text-gray-500">Add Term</span>
            </button>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-full py-4 bg-[#1C3A1C] text-white rounded-xl font-bold hover:bg-[#152a15] transition-all shadow-lg text-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex-1">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold text-gray-800">
          Current Session: <span className="font-montserrat">2024/2025 Academic Session</span>
        </h2>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <Input
            name="sessionBegins"
            control={control}
            inputLabel="Session begins"
            editable={false}
          />
          <Input
            name="sessionEnds"
            control={control}
            inputLabel="Session ends"
            editable={false}
          />
        </div>

        <div className="space-y-6 pt-4">
          <h3 className="text-lg font-bold text-gray-800">Terms</h3>
          
          {["First term", "Second term", "Third term"].map((term, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-gray-800">{term}</span>
                <span className={`px-4 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                  idx === 0 ? "bg-green-500 text-white" : "bg-yellow-200 text-yellow-800"
                }`}>
                  {idx === 0 ? "Ongoing" : "Upcoming"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400">Begins</label>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-800 text-sm">
                    24-10-2024
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400">{idx === 2 ? "Begins" : "Ends"}</label>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-800 text-sm">
                    24-10-2024
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <button 
            onClick={() => setMode("edit")}
            className="flex items-center gap-2 px-8 py-4 bg-[#1C3A1C] text-white rounded-xl font-bold hover:bg-[#152a15] transition-all shadow-lg shadow-[#1C3A1C]/20 w-full justify-center"
          >
            <Edit3 className="w-5 h-5" />
            Edit Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarSessionView;
