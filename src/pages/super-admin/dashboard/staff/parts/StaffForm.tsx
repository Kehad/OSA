/* eslint-disable react/prop-types */

import Button from "@/components/ui/button";
// import CompleteForm from "./CompleteForm";
import { NextOfKinForm } from "./NextofKinForm";
import PersonalInformationForm from "./PersonalInformation";
import { WorkInformationForm } from "./WorkForm";
import { Staff } from "./types";

interface StaffFormProps {
  currentStep: number;
  formData: Partial<Staff>;
  onSave: () => void;
  onBack: () => void;
  onNext: () => void;
  onChange: (field: keyof Staff, value: string) => void;
}

// Add/Edit Staff Form Component
const StaffForm = ({
  currentStep,
  formData,
  onSave,
  onBack,
  onNext,
  onChange,
}: StaffFormProps) => (
  <div className="min-h-screen bg-white p-8">
    <div className="">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Add new staff
        </h1>
        <button
          onClick={onSave}
          className="px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900"
        >
          Save
        </button>
      </div>

      <div className="p-6">
        <div className="mb-6 flex justify-end">
          <span className="text-sm text-gray-600">{currentStep}/3</span>
        </div>

        <div className="mb-6">
          <div className="h-1 bg-gray-200 rounded-full">
            <div
              className="h-1 bg-yellow-400 rounded-full transition-all"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {currentStep === 1 && (
          <PersonalInformationForm
            formData={formData}
            isEdit={false}
            onChange={onChange}
          />
        )}

        {currentStep === 2 && (
          <WorkInformationForm formData={formData} onChange={onChange} />
        )}

        {currentStep === 3 && (
          <NextOfKinForm formData={formData} onChange={onChange} />
        )}

        <div className="flex justify-center items-center mt-8 gap-5">
          <Button
            text={currentStep === 1 ? "Cancel" : "Back"}
            onClick={onBack}
            variant="outline"
            colorScheme="gray"
            className="px-20 font-bold"
            size="lg"
          />
          <Button
            text={currentStep === 3 ? "Done" : "Next"}
            onClick={currentStep === 3 ? onSave : onNext}
            className="px-20 font-bold"
            size="lg"
          />
        </div>
      </div>
    </div>
  </div>
);

export default StaffForm;
