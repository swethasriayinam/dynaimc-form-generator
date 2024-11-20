import React from "react";
import { FieldErrors, UseFormRegister, FieldError } from "react-hook-form";

interface SelectFieldProps {
  id: string;
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  required = false,
  options,
  register,
  errors,
}) => {
  // Define validation rules
  const validationRules = {
    required: required ? `${label} is required` : undefined,
  };

  // Ensure that errors[id]?.message is a string
  const errorMessage = errors[id]?.message as string || `${label} is invalid`;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
      </label>
      <select
        id={id}
        {...register(id, validationRules)}
        className={`border border-gray-300 rounded p-2 w-full ${
          errors[id] ? "border-red-500" : ""
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[id] && (
        <span className="text-red-500 text-sm mt-1">
          {errorMessage} {/* This will now always be a string */}
        </span>
      )}
    </div>
  );
};

export default SelectField;
