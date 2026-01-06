// src/components/entity/EntityForm/Step1_PersonalInfo.jsx
import Input from "../../ui/Input";

const Step1_PersonalInfo = ({ formData, onChange }) => (
  <div>
    <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
    <div className="grid grid-cols-2 gap-4">
      <Input label="Full Name *" value={formData.fullName || ""} onChange={(e) => onChange("fullName", e.target.value)} />
      <Input label="Phone Number *" value={formData.phoneNumber || ""} onChange={(e) => onChange("phoneNumber", e.target.value)} />
      <Input label="Email Address" value={formData.emailAddress || ""} onChange={(e) => onChange("emailAddress", e.target.value)} />
      <Input label="Date of Birth" value={formData.dateOfBirth || ""} onChange={(e) => onChange("dateOfBirth", e.target.value)} />
    </div>
    <Input label="House Address *" value={formData.houseAddress || ""} onChange={(e) => onChange("houseAddress", e.target.value)} multiline />
  </div>
);

export default Step1_PersonalInfo;