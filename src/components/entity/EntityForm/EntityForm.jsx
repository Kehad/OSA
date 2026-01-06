// src/components/entity/EntityForm/EntityForm.jsx
import Button from "../../ui/Button";
import Step1_PersonalInfo from "./Step1_PersonalInfo";
import Step2_WorkInfo from "./Step2_WorkInfo";
import Step3_NextOfKin from "./Step3_NextOfKin";
import Step4_ParentInfo from "./Step4_ParentInfo";

const stepsMap = {
  staff: [Step1_PersonalInfo, Step2_WorkInfo, Step3_NextOfKin],
  student: [Step1_PersonalInfo, Step4_ParentInfo, Step2_WorkInfo],
  parent: [Step1_PersonalInfo, Step4_ParentInfo, Step3_NextOfKin],
};

const EntityForm = ({
  entityType,
  isEdit,
  currentStep,
  formData,
  onSave,
  onBack,
  onNext,
  onChange,
  config,
}) => {
  const Steps = stepsMap[entityType];
  const CurrentStepComponent = Steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isEdit ? `Edit ${entityType}` : `Add new ${entityType}`}
          </h1>
          <button
            onClick={onSave}
            className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900"
          >
            Save
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 text-right text-sm text-gray-600">{currentStep}/{Steps.length}</div>
          <div className="mb-6 h-1 bg-gray-200 rounded-full">
            <div
              className="h-1 bg-yellow-400 rounded-full transition-all"
              style={{ width: `${(currentStep / Steps.length) * 100}%` }}
            />
          </div>

          <CurrentStepComponent
            formData={formData}
            isEdit={isEdit}
            onChange={onChange}
            entityType={entityType}
          />

          <div className="flex justify-center gap-5 mt-8">
            <Button
              text={currentStep === 1 ? "Cancel" : "Back"}
              onClick={onBack}
              variant="outline"
              className="px-20 font-bold"
            />
            <Button
              text={currentStep === Steps.length ? "Save" : "Next"}
              onClick={currentStep === Steps.length ? onSave : onNext}
              className="px-20 font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityForm;