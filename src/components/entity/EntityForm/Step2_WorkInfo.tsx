// src/components/entity/EntityForm/Step2_WorkInfo.tsx

interface Step2Props {
  formData: Record<string, any>;
  onChange: (key: string, value: any) => void;
}

const Step2_WorkInfo = ({ formData, onChange }: Step2Props) => (
  <div>
    <h2 className="text-lg font-semibold mb-6">Work Information</h2>
    <div className="grid grid-cols-2 gap-4">
      <select
        value={formData.role || ""}
        onChange={(e) => onChange("role", e.target.value)}
        className="input"
      >
        <option>Select Role</option>
        <option>Teacher</option>
        <option>Administrative staff</option>
      </select>
      <select
        value={formData.designation || ""}
        onChange={(e) => onChange("designation", e.target.value)}
        className="input"
      >
        <option>Select Designation</option>
        <option>Senior Teacher</option>
        <option>Admin Officer</option>
      </select>
    </div>
  </div>
);

export default Step2_WorkInfo;
