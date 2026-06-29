import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/input";

interface AddBillFormProps {
  onCancel: () => void;
  onSubmit: (data: any) => void;
}

const AddBillForm: React.FC<AddBillFormProps> = ({ onCancel, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      class: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      occupation: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">Add Bill</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        <Input
          name="class"
          control={control}
          type="select"
          inputLabel="Class"
          placeholderText="Select class"
          options={[
            { label: "SS1", value: "SS1" },
            { label: "SS2", value: "SS2" },
            { label: "SS3", value: "SS3" },
            { label: "JSS1", value: "JSS1" },
            { label: "JSS2", value: "JSS2" },
            { label: "JSS3", value: "JSS3" },
          ]}
          rules={{ required: "Class is required" }}
        />
        <Input
          name="firstName"
          control={control}
          inputLabel="First name"
          placeholderText="Enter first name"
          rules={{ required: "First name is required" }}
        />
        <Input
          name="lastName"
          control={control}
          inputLabel="Last name"
          placeholderText="Enter last name"
          rules={{ required: "Last name is required" }}
        />
        <Input
          name="phoneNumber"
          control={control}
          inputLabel="Phone number"
          placeholderText="Enter phone number"
          rules={{ required: "Phone number is required" }}
        />
        <Input
          name="email"
          control={control}
          inputLabel="Email address"
          placeholderText="Enter email address"
          rules={{ 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          }}
        />
        <Input
          name="occupation"
          control={control}
          inputLabel="Occupation"
          placeholderText="Enter occupation"
          rules={{ required: "Occupation is required" }}
        />
      </div>

      <div className="mt-12 flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-8 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-12 py-3 rounded-xl bg-[#1C3A1C] text-white font-bold hover:bg-[#152a15] transition-all shadow-lg shadow-[#1C3A1C]/20"
        >
          Add bill
        </button>
      </div>
    </form>
  );
};

export default AddBillForm;
