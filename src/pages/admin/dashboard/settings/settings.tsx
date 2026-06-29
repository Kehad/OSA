import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, ChevronRight, X, Key, Check, Bell, ShieldCheck, Mail, User } from "lucide-react";
import { useSettings } from "./model/useSettings";
import { usePasswordFlow } from "./model/usePasswordFlow";
import { useNotifications } from "./model/useNotifications";
import change_password from "@/assets/change_password.png";

const SettingsPage = () => {
  const { profile, activeModal, setActiveModal, updateName } = useSettings();
  const { step, sendRequest, submitNewPassword, resetFlow } = usePasswordFlow();
  const { settings, toggleSetting } = useNotifications();

  // Local state for modal inputs
  const [nameForm, setNameForm] = useState({ firstName: profile.firstName, lastName: profile.lastName });

  const closeModal = () => {
    setActiveModal(null);
    resetFlow();
  };

  const SettingsItem = ({ label, value, onClick, icon: Icon, showChevron = true, showEdit = false }: any) => (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl p-6 mb-4 border-2 border-gray-200 flex items-center justify-between cursor-pointer hover:shadow-md transition-all active:scale-[0.99]`}
    >
      <div className="flex-1">
        <p className="text-xs text-gray-400 font-medium mb-1">{label}</p>
        <p className="text-gray-800 font-semibold">{value}</p>
      </div>
      {showEdit && <Pencil className="w-8 h-8 text-black" />}
      {showChevron && <ChevronRight className="w-8 h-8 text-black" />}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-lato p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-10">Settings</h1>

      <div className="">
        {/* Profile Section */}
        <div className="mb-10 flex items-start gap-8 max-w-sm">
          <div className="flex-1">
            <p className="text-gray-800 font-bold mb-2">Profile photo</p>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">This image will be displayed as your<br />profile photo</p>
            <button className="bg-white border border-gray-200 px-6 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              Change photo
            </button>
          </div>
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Settings Fields */}
        <div className="space-y-4">
          <SettingsItem 
            label="Full name" 
            value={`${profile.firstName} ${profile.lastName}`} 
            showEdit 
            showChevron={false} 
            onClick={() => setActiveModal("name")} 
          />
          <SettingsItem 
            label="Email address" 
            value={profile.email} 
            showChevron={false} 
          />
          <SettingsItem 
            label="Role" 
            value={profile.role} 
            showChevron={false} 
          />
          <SettingsItem 
            label="Change password" 
            value="xxxxxxxxxxxx" 
            onClick={() => setActiveModal("password")} 
          />
          <SettingsItem 
            label="Notification settings" 
            value={settings.all ? "All notifications" : "Custom notifications"} 
            onClick={() => setActiveModal("notifications")} 
          />
        </div>
      </div>

      {/* Modals Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-10 relative">
                <button onClick={closeModal} className="absolute right-8 top-8 text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>

                {/* Edit Name Modal */}
                {activeModal === "name" && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-8">Edit Full Name</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Surname</label>
                        <input 
                          type="text" 
                          value={nameForm.lastName}
                          onChange={(e) => setNameForm({...nameForm, lastName: e.target.value})}
                          className="w-full bg-white text-black border border-gray-100 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-900/10 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                        <input 
                          type="text" 
                          value={nameForm.firstName}
                          onChange={(e) => setNameForm({...nameForm, firstName: e.target.value})}
                          className="w-full bg-white text-black border border-gray-100 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-900/10 transition-all"
                        />
                      </div>
                      <button 
                        onClick={() => updateName(nameForm.firstName, nameForm.lastName)}
                        className="w-full bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] transition-all mt-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                {/* Notification Settings Modal */}
                {activeModal === "notifications" && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-8">Notification Settings</h2>
                    <div className="space-y-4">
                      {[
                        { key: "all", label: "All notifications" },
                        { key: "events", label: "Events notification" },
                        { key: "calendar", label: "Calendar notification" },
                        { key: "proPlan", label: "Pro plan renewal" },
                        { key: "newsletter", label: "New newsletter subscriber" },
                        { key: "insurance", label: "Insurance renewal" },
                      ].map((item) => (
                        <div 
                          key={item.key}
                          onClick={() => toggleSetting(item.key as any)}
                          className="flex items-center justify-between py-2 cursor-pointer group"
                        >
                          <span className={`text-sm font-medium ${settings[item.key as keyof typeof settings] ? 'text-gray-800' : 'text-gray-400'}`}>
                            {item.label}
                          </span>
                          <div className={`w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center ${
                            settings[item.key as keyof typeof settings] 
                              ? 'bg-[#1C3A1C] border-[#1C3A1C]' 
                              : 'border-gray-200 group-hover:border-gray-300'
                          }`}>
                            {settings[item.key as keyof typeof settings] && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      ))}
                      <button 
                        onClick={closeModal}
                        className="w-full bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] transition-all mt-8"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                {/* Password Flow Modal */}
                {activeModal === "password" && (
                  <div className="text-center">
                    {step === "request" && (
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center mb-8">
                          <img src={change_password} alt="Change Password Icon" className="h-40 w-40 object-cover" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Request for permission from your Admin</h2>
                        <button 
                          onClick={sendRequest}
                          className="w-full bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] transition-all mt-8"
                        >
                          Send Request
                        </button>
                      </div>
                    )}

                    {step === "processing" && (
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center mb-8 relative">
                         
                          <img src={change_password} alt="Change -Password Icon" className="h-20 w-20 object-cover animate-pulse" />

                          <div className="absolute inset-0 border-4 border-t-[#1C3A1C] border-gray-100 rounded-full animate-spin" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Your request is being processed,<br />you'll get a response soon</h2>
                      </div>
                    )}

                    {step === "form" && (
                      <div className="text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-8">Change Password</h2>
                        <div className="space-y-6">
                          {["Old Password", "New Password", "Confirm Password"].map((label) => (
                            <div key={label} className="space-y-2">
                              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</label>
                              <div className="relative">
                                <input 
                                  type="password" 
                                  placeholder="Enter your password"
                                  className="w-full bg-white text-black border border-gray-100 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-900/10 transition-all placeholder:text-gray-300"
                                />
                                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                              </div>
                            </div>
                          ))}
                          <button 
                            onClick={submitNewPassword}
                            className="w-full bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] transition-all mt-4"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}

                    {step === "success" && (
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8">
                          <img src={change_password} alt="Change -Password Icon" className="h-20 w-20 object-cover animate-pulse" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Your password has been changed successfully.</h2>
                        <button 
                          onClick={closeModal}
                          className="w-full bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] transition-all mt-8"
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SettingsPage;
