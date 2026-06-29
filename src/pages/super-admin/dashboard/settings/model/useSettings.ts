import { useState } from "react";

export const useSettings = () => {
  const [profile, setProfile] = useState({
    firstName: "Oluwatosin",
    lastName: "John",
    email: "oluwatosinjohn@gmail.com",
    role: "Staff",
    avatar: "https://i.ibb.co/L5hY8pS/avatar.jpg" 
  });

  const [activeModal, setActiveModal] = useState<"name" | "password" | "notifications" | null>(null);

  const updateName = (firstName: string, lastName: string) => {
    setProfile(prev => ({ ...prev, firstName, lastName }));
    setActiveModal(null);
  };

  return {
    profile,
    activeModal,
    setActiveModal,
    updateName,
  };
};
