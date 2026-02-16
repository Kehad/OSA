/* eslint-disable prettier/prettier */
import React, {
  useState,
  useMemo,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  useRef,
} from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import * as yup from "yup";

type PasswordRequirement = {
  text: string;
  met: boolean;
};

interface InputProps<T extends FieldValues> {
  placeholderText?: string;
  inputLabel?: string;
  name: Path<T>;
  type?: "input" | "password" | "multiline" | "date" | "select";
  control: Control<T>;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  editable?: boolean;
  textInputProps?:
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
  | SelectHTMLAttributes<HTMLSelectElement>;
  autoFocus?: boolean;
  showPasswordRequirements?: boolean;
  helperText?: string;
  options?: { label: string; value: string | number }[];
}

// Yup password validation schema
export const passwordValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .matches(/\d/, "At least 1 digit")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least 1 special character")
    .required("Password is required"),
});

// Individual validation functions for real-time feedback
export const passwordValidations = {
  minLength: (password: string): boolean => password.length >= 8,
  hasUppercase: (password: string): boolean => /[A-Z]/.test(password),
  hasDigit: (password: string): boolean => /\d/.test(password),
  hasSpecialChar: (password: string): boolean =>
    /[!@#$%^&*(),.?":{}|<>]/.test(password),
};

const Input = <TFieldValues extends FieldValues>({
  placeholderText = "",
  inputLabel = "",
  name,
  type = "input",
  control,
  rules = {},
  editable = true,
  textInputProps,
  autoFocus = true,
  showPasswordRequirements = false,
  helperText,
  options,
}: InputProps<TFieldValues>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Password validation logic
  const validatePassword = (password: string): PasswordRequirement[] => {
    if (!password) {
      return [
        { text: "At least 8 characters", met: false },
        { text: "At least 1 uppercase letter", met: false },
        { text: "At least 1 digit", met: false },
        { text: "At least 1 special character", met: false },
      ];
    }

    return [
      {
        text: "At least 8 characters",
        met: passwordValidations.minLength(password),
      },
      {
        text: "At least 1 uppercase letter",
        met: passwordValidations.hasUppercase(password),
      },
      { text: "At least 1 digit", met: passwordValidations.hasDigit(password) },
      {
        text: "At least 1 special character",
        met: passwordValidations.hasSpecialChar(password),
      },
    ];
  };

  // Custom Yup validator for react-hook-form
  const yupPasswordValidator = (value: string): boolean | string => {
    try {
      passwordValidationSchema.validateSync({ password: value });
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return error.message;
      }
      return "An unknown validation error occurred";
    }
  };

  const renderPasswordInput = () => (
    <div className="mb-1">
      {inputLabel && (
        <p className="font-normal text-[22px] text-black mb-1">{inputLabel}</p>
      )}
      <Controller
        control={control}
        name={name}
        rules={{
          ...rules,
          validate: {
            ...rules.validate,
            yupValidation: yupPasswordValidator,
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          const requirements = useMemo(
            () => validatePassword(value || ""),
            [value]
          );
          const allRequirementsMet = requirements.every((req) => req.met);

          return (
            <>
              <div
                className={`flex items-center rounded-lg border px-2 h-[60px] bg-transparent mt-2 ${error
                  ? "border-red-600"
                  : allRequirementsMet && value
                    ? "border-green-500"
                    : "border-gray-400"
                  }`}
              >
                <input
                  {...(textInputProps as InputHTMLAttributes<HTMLInputElement>)}
                  className="flex-1 h-full border-none text-[20px] outline-none bg-transparent text-black placeholder:text-gray-400"
                  onChange={(e) => onChange(e.target.value)}
                  onBlur={onBlur}
                  disabled={!editable}
                  value={value || ""}
                  placeholder={placeholderText}
                  type={isPasswordVisible ? "text" : "password"}
                  autoFocus={autoFocus}
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="bg-none border-none cursor-pointer ml-2 p-1 flex items-center justify-center"
                  tabIndex={-1}
                >
                  {isPasswordVisible ? (
                    <svg width="24" height="24" fill="none">
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    <svg width="24" height="24" fill="none">
                      <path d="m1 1 22 22" stroke="black" strokeWidth="2" />
                      <path
                        d="M6.7 6.7C3.7 8.8 2 12 2 12s3 8 10 8c1.7 0 3.2-.5 4.6-1.3"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M14.6 14.5c-.6.6-1.4 1-2.4 1-1.8 0-3.3-1.4-3.3-3.3 0-.9.4-1.7 1-2.3"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M19.3 17.3C21.3 15.2 22 12 22 12s-3-8-10-8c-1.7 0-3.2.5-4.6 1.3"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Password Requirements */}
              {showPasswordRequirements && (
                <div className="mt-3 space-y-1">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center ${req.met ? "bg-green-500" : "border-2 border-gray-300"
                          }`}
                      >
                        {req.met && (
                          <svg width="10" height="8" fill="none">
                            <path
                              d="M9 1L3.5 6.5L1 4"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm ${req.met ? "text-green-600" : "text-gray-600"
                          }`}
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {error && (
                <p className="text-red-600 text-xs mt-1">{error.message}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );

  const renderTextInput = () => (
    <div className="mb-2">
      {inputLabel && (
        <p className="font-normal text-[16px] text-black mb-1">{inputLabel}</p>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <div
              className={`flex items-center text-[20px] rounded-lg border border-gray-400 px-[10px] h-[60px] bg-transparent mt-2 ${error ? "border-red-600" : ""
                }`}
            >
              <input
                {...(textInputProps as InputHTMLAttributes<HTMLInputElement>)}
                className="flex-1 h-full border-none outline-none bg-transparent text-black placeholder:text-gray-400"
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                disabled={!editable}
                autoFocus={autoFocus}
                value={value || ""}
                placeholder={placeholderText}
              />
            </div>

            {error && (
              <p className="text-red-600 text-xs mt-1">{error.message}</p>
            )}

            {helperText && (
              <p className="text-black-600 text-[16px] mt-1">{helperText}</p>
            )}
          </>
        )}
      />
    </div>
  );

  const renderMultiLineInput = () => (
    <div className="mb-2">
      {inputLabel && (
        <p className="font-normal text-[16px] text-black mb-1">{inputLabel}</p>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <textarea
              {...(textInputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
              className="w-full h-32 rounded-md border border-black px-[10px] py-2 resize-vertical outline-none bg-transparent placeholder:text-gray-400"
              onChange={(e) => onChange(e.target.value)}
              onBlur={onBlur}
              disabled={!editable}
              value={value || ""}
              placeholder={placeholderText}
            />

            {error && (
              <p className="text-red-600 text-xs mt-1">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );

  const renderDateInput = () => (
    <div className="mb-2">
      {inputLabel && (
        <p className="font-normal text-[16px] text-black mb-1">{inputLabel}</p>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value, ref: fieldRef },
          fieldState: { error },
        }) => (
          <>
            <div
              className={`relative flex items-center text-[20px] rounded-lg border border-gray-400 px-[10px] h-[60px] bg-transparent mt-2 ${error ? "border-red-600" : ""
                }`}
            >
              <input
                {...(textInputProps as InputHTMLAttributes<HTMLInputElement>)}
                ref={(e) => {
                  fieldRef(e);
                  dateInputRef.current = e;
                }}
                className={`flex-1 h-full border-none outline-none bg-transparent text-black placeholder:text-gray-400 ${!value ? "text-transparent" : ""
                  }`}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                disabled={!editable}
                autoFocus={autoFocus}
                value={value || ""}
                type="date"
                onClick={() => dateInputRef.current?.showPicker()}
              />
              <div
                className="cursor-pointer ml-2"
                // onClick={() => dateInputRef.current?.showPicker()}
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg> */}
              </div>
              {!value && (
                <span className="absolute left-[10px] text-gray-400 pointer-events-none">
                  {placeholderText}
                </span>
              )}
            </div>

            {error && (
              <p className="text-red-600 text-xs mt-1">{error.message}</p>
            )}

            {helperText && (
              <p className="text-black-600 text-[16px] mt-1">{helperText}</p>
            )}
          </>
        )}
      />
    </div>
  );

  const renderSelectInput = () => (
    <div className="mb-2">
      {inputLabel && (
        <p className="font-normal text-[16px] text-black mb-1">{inputLabel}</p>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <div
              className={`flex items-center text-[20px] rounded-lg border border-gray-400 px-[10px] h-[60px] bg-transparent mt-2 ${error ? "border-red-600" : ""
                }`}
            >
              <select
                className="flex-1 h-full border-none outline-none bg-transparent text-black placeholder:text-gray-400"
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                disabled={!editable}
                value={value || ""}
              >
                <option value="" disabled>
                  {placeholderText || "Select an option"}
                </option>
                {options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-red-600 text-xs mt-1">{error.message}</p>
            )}

            {helperText && (
              <p className="text-black-600 text-[16px] mt-1">{helperText}</p>
            )}
          </>
        )}
      />
    </div>
  );

  if (type === "input") return renderTextInput();
  if (type === "password") return renderPasswordInput();
  if (type === "multiline") return renderMultiLineInput();
  if (type === "date") return renderDateInput();
  if (type === "select") return renderSelectInput();


  return null;
};

export default Input;
