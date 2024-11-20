import React from "react";
import { FieldErrors, UseFormRegister, FieldError } from "react-hook-form";

interface TextInputProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type,
  required = false,
  placeholder = "",
  register,
  errors,
  validation = {},
}) => {
  const validationRules = {
    required: required ? `${label} is required` : undefined,
    pattern: validation.pattern
      ? { value: validation.pattern, message: validation.message || `${label} is invalid` }
      : undefined,
  };

  // Ensure that errors[id]?.message is a string
  const errorMessage = errors[id]?.message as string || `${label} is invalid`;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, validationRules)}
        className={`border border-gray-300 rounded p-2 w-full ${
          errors[id] ? "border-red-500" : ""
        }`}
      />
      {errors[id] && (
        <span className="text-red-500 text-sm mt-1">
          {errorMessage} {/* This will now always be a string */}
        </span>
      )}
    </div>
  );
};

export default TextInput;
