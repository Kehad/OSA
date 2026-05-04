/* eslint-disable react/prop-types */

import { Plus } from "lucide-react";
import Input from "../../../../components/ui/input.tsx";
import { useForm } from "react-hook-form";
import Button from "../../../../components/ui/button.tsx";
import { Staff } from "./types";

interface PersonalInformationFormProps {
  formData: Partial<Staff>;
  isEdit: boolean;
  onChange: (field: keyof Staff, value: string) => void;
}

const PersonalInformationForm = ({ formData, isEdit, onChange }: PersonalInformationFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      confirmPassword: "",
      fullName: formData.fullName || "",
      phoneNumber: formData.phoneNumber || "",
      emailAddress: formData.emailAddress || "",
      dateOfBirth: formData.dateOfBirth || "",
      houseAddress: formData.houseAddress || "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg text-black font-semibold mb-6">
        Personal Information
      </h2>

      {/* Profile Photo */}
      <div className="mb-6 text-black flex items-center gap-2">
        {/* <button className="flex items-center gap-2 px-5 py-5 border border-[#EEEEEE] bg-[#EEEEEE] rounded-full hover:bg-gray-50">
          <Plus className="w-5 h-5" />
        </button> */}
        <Button
          leftIcon={Plus}
          className="flex items-center gap-2 px-5 py-5  border border-[#EEEEEE] bg-[#EEEEEE] rounded-[100%] hover:bg-gray-50"
        />
        {isEdit ? "Edit Picture" : "Add profile picture"}
      </div>

      {/* Staff ID (readonly) */}
      {isEdit && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Staff ID
          </label>
          <input
            type="text"
            value={formData.id}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
      )}

      {/* Full Name & Phone Number */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input
          inputLabel="Full Name *"
          name="fullName"
          control={control}
          type="input"
          placeholderText="Enter full name"
          rules={{ required: "Full name is required" }}
          autoFocus={false}
          textInputProps={{}}
        />

        <Input
          inputLabel="Phone Number *"
          name="phoneNumber"
          control={control}
          type="input"
          placeholderText="Enter phone number"
          rules={{ required: "Phone number is required" }}
          autoFocus={false}
        />
      </div>

      {/* Email + DOB */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input
          inputLabel="Email Address"
          name="emailAddress"
          control={control}
          type="input"
          placeholderText="Enter email"
          autoFocus={false}
        />

        <Input
          inputLabel="Date of Birth *"
          name="dateOfBirth"
          control={control}
          type="input"
          placeholderText="Select date of birth"
          rules={{ required: "Date of birth required" }}
          autoFocus={false}
        />
      </div>

      {/* House Address */}
      <Input
        inputLabel="House Address *"
        name="houseAddress"
        control={control}
        type="multiline"
        placeholderText="Enter house address"
        rules={{ required: "House address is required" }}
      />
    </form>
  );
};

export default PersonalInformationForm;
