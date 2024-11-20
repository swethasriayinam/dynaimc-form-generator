import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface RadioFieldProps {
  id: string;
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const RadioField: React.FC<RadioFieldProps> = ({
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
      <label className="block font-medium mb-1">{label}</label>
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option.value}
              {...register(id, validationRules)}
              className="form-radio"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors[id] && (
        <span className="text-red-500 text-sm mt-1">
          {errorMessage} {/* This ensures the error message is always a string */}
        </span>
      )}
    </div>
  );
};

export default RadioField;
