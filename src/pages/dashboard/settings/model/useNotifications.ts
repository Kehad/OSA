import { useState } from "react";

export const useNotifications = () => {
  const [settings, setSettings] = useState({
    all: true,
    events: false,
    calendar: false,
    proPlan: false,
    newsletter: false,
    insurance: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => {
      const newVal = !prev[key];
      // If "all" is toggled, set everything to that value
      if (key === "all") {
        return {
          all: newVal,
          events: newVal,
          calendar: newVal,
          proPlan: newVal,
          newsletter: newVal,
          insurance: newVal,
        };
      }
      // If an individual setting is toggled OFF, set "all" to OFF
      if (!newVal) {
        return { ...prev, [key]: false, all: false };
      }
      return { ...prev, [key]: true };
    });
  };

  return {
    settings,
    toggleSetting,
  };
};
