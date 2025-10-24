/* eslint-disable react/prop-types */
import PersonalInformationForm from "./PersonalInformation";
import { WorkInformationForm } from "./WorkForm";
import { NextOfKinForm } from "./NextofKinForm";

function CompleteForm({ formData, isEdit, onChange }) {
  return (
    <div>
      <PersonalInformationForm
        formData={formData}
        isEdit={isEdit}
        onChange={onChange}
      />

      <WorkInformationForm formData={formData} onChange={onChange} />

      <NextOfKinForm formData={formData} onChange={onChange} />
    </div>
  );
}

export default CompleteForm;
