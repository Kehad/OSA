import { useState } from "react";

export type PasswordStep = "request" | "processing" | "form" | "success";

export const usePasswordFlow = () => {
  const [step, setStep] = useState<PasswordStep>("processing");

  const sendRequest = () => {
    setStep("processing");
    // In a real app, this would be an API call
    setTimeout(() => {
      setStep("form");
    }, 1500);
  };

  const submitNewPassword = () => {
    // In a real app, this would be an API call
    setStep("success");
  };

  const resetFlow = () => {
    setStep("request");
  };

  return {
    step,
    sendRequest,
    submitNewPassword,
    resetFlow,
  };
};
