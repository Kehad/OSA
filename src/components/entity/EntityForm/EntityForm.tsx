import Step1_ParentInfo from "@/pages/dashboard/students/parts/Step1_ParentInfo";
import Button from "../../ui/button"; // Ensure this path is correct for your project
import Step2_PersonalInfo from "@/pages/dashboard/students/parts/Step2_PersonalInfo";
import Step3_HealthInfo from "@/pages/dashboard/students/parts/Step3_HealthInfo";

interface EntityFormProps {
  entityType: "staff" | "student" | "parent";
  isEdit: boolean;
  currentStep: number;
  formData: Record<string, any>;
  onSave: () => void;
  onBack: () => void;
  onNext: () => void;
  onChange: (data: Record<string, any>) => void;
  config?: any;
}

// const stepsMap = {
//   staff: [Step1_PersonalInfo, Step2_WorkInfo, Step3_NextOfKin],
//   student: [Step1_PersonalInfo, Step4_ParentInfo, Step2_WorkInfo],
//   parent: [Step1_PersonalInfo, Step4_ParentInfo, Step3_NextOfKin],
// };

// Inside EntityForm.tsx
// import Step1_ParentSearch from "./Step1_ParentSearch";
// import Step2_StudentPersonal from "./Step2_StudentPersonal";
// import Step3_StudentHealth from "./Step3_StudentHealth";

const stepsMap = {
  // Update the student flow to match your screenshots
  student: [Step1_ParentInfo, Step2_PersonalInfo, Step3_HealthInfo],
  staff: [Step1_ParentInfo, Step2_PersonalInfo, Step3_HealthInfo], // Placeholder
  parent: [Step1_ParentInfo, Step2_PersonalInfo, Step3_HealthInfo], // Placeholder
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
}: EntityFormProps) => {
  const Steps = stepsMap[entityType] || [];
  const CurrentStepComponent = Steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-white p-2">
      <div className="mx-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isEdit ? `Edit ${entityType}` : `Add new ${entityType}`}
          </h1>
          <Button
            onClick={onSave}
            className="bg-green-800 text-white hover:bg-green-900"
          >
            Save
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-6 text-right text-md text-gray-600">
            {currentStep}/{Steps.length}
          </div>
          <div className="mb-6 h-1.5 bg-gray-200 rounded-full">
            <div
              className="h-1.5 bg-yellow-400 rounded-full transition-all"
              style={{ width: `${(currentStep / Steps.length) * 100}%` }}
            />
          </div>

          {/* FIX: Uncommented and added null check */}
          {CurrentStepComponent ? (
            <CurrentStepComponent
              formData={formData}
              isEdit={isEdit}
              onChange={onChange}
              onNext={onNext}
              onBack={onBack}
              onSave={onSave}
              entityType={entityType}
              config={config}
            />
          ) : (
            <div>Step component not found</div>
          )}
          {currentStep !== 10 && <div className="flex justify-center gap-5 mt-8">
            {/* FIX: Use children for text, not text="" prop */}
            {/* <Button
              onClick={onBack}
              variant="outline"
              className="px-20 font-bold"
            >
              {currentStep === 1 ? "Cancel" : "Back"}
            </Button>
            
            <Button
              onClick={currentStep === Steps.length ? onSave : onNext}
              className="px-20 font-bold"
            >
              {currentStep === Steps.length ? "Save" : "Next"}
            </Button> */}
          </div>}
        </div>
      </div>
    </div>

  );
};

export default EntityForm;