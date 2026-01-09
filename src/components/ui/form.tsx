// src/components/entity/EntityForm/DynamicForm.tsx
import React from "react";
import { useForm, FieldValues, Control } from "react-hook-form";
import * as yup from "yup";
import Input from "./input"; // Assuming this handles text/date/password
import Button from "./button";

export interface FormField {
  name: string;
  label: string;
  type: "input" | "password" | "multiline" | "date" | "select" | "divider" | "custom";
  placeholder?: string;
  validation?: {
    required?: string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: any, formValues?: any) => string | boolean;
  };
  showPasswordRequirements?: boolean;
  helperText?: string;
  options?: { value: string; label: string }[];
  renderCustom?: (value: any) => React.ReactNode;
}

export interface DynamicFormProps<T extends FieldValues> {
  title?: string;
  fields: FormField[];
  initialValues?: Partial<T>;
  onSubmit: (data: T) => Promise<void> | void;
  submitButtonText?: string;
  className?: string;
  yupSchema?: yup.ObjectSchema<T>;
  children?: React.ReactNode;
  onBack?: () => void;
  readOnly?: boolean;
}

function DynamicForm<T extends FieldValues = any>({
  fields,
  initialValues = {},
  onSubmit,
  submitButtonText = "Submit",
  className = "w-full",
  yupSchema,
  children,
  onBack,
  readOnly = false,
}: DynamicFormProps<T>) {
  const {
    control,
    handleSubmit,
    register, // Needed for native selects
    formState: { errors, isSubmitting },
    watch,
  } = useForm<T>({
    defaultValues: initialValues as any,
  });

  const watchedValues = watch();

  // Helper for validation rules
  const getRules = (field: FormField) => {
    if (!field.validation) return {};
    return {
      required: field.validation.required,
      minLength: field.validation.minLength,
      maxLength: field.validation.maxLength,
      pattern: field.validation.pattern,
      validate: field.validation.validate
        ? (value: any) => field.validation!.validate!(value, watchedValues)
        : undefined,
    };
  };

  const handleFormSubmit = async (data: T) => {
    try {
      if (yupSchema) {
        await yupSchema.validate(data, { abortEarly: false });
      }
      console.log(data)
      await onSubmit(data);
    } catch (error: any) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Render children (like Profile Picture) before the grid */}
        {children}

        {/* The Grid Container */}
        <div className={`grid ${fields.length === 1 ? "grid-cols-1" : "md:grid-cols-2"} gap-x-8 gap-y-6`}>
          {fields.map((field) => {
            // 1. Handle Section Dividers
            if (field.type === "divider") {
              return (
                <div key={field.name} className="col-span-1 md:col-span-2 pt-2">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {field.label}
                  </h3>
                </div>
              );
            }

            // 2. Handle Inputs
            const inputProps = readOnly ? { disabled: true } : {};
            // console.log(initialValues[field.name])
            // console.log(initialValues)/

            return (
              <div key={field.name} className="flex flex-col gap-1.5">
                {readOnly ? (
                  // --- READ ONLY MODE ---
                  field.type === "custom" && field.renderCustom ? (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-500">
                        {field.label}
                      </label>
                      <div className="min-h-[46px] flex items-center">
                        {field.renderCustom(initialValues[field.name])}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-500">
                        {field.label}
                      </label>
                      <div className="w-full border border-gray-200 rounded-md p-3 bg-white text-gray-900 min-h-[46px]">
                        {/* @ts-ignore */}
                        {initialValues[field.name] || "—s"}
                      </div>
                    </div>
                  )
                ) : (
                  // --- EDIT MODE ---
                  // Removed the extra { } wrapper here
                  field.type === "custom" && field.renderCustom ? (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-500">
                        {field.label}
                      </label>
                      <div className="min-h-[46px] flex items-center">
                        {field.renderCustom(initialValues[field.name])}
                      </div>
                    </div>
                  ) : (
                    <Input
                      inputLabel={field.label}
                      name={field.name as any}
                      control={control as Control<any>}
                      type={field.type as any}
                      placeholderText={field.placeholder}
                      {...inputProps}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>


        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8 pt-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="px-12 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition shadow-sm"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${fields.length === 1 ? "w-full" : ""} px-12 py-2.5 rounded-lg bg-[#1b3b2a] text-white font-bold hover:bg-[#142d20] transition shadow-sm disabled:opacity-50`}
          >
            {isSubmitting ? "Saving..." : submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DynamicForm;