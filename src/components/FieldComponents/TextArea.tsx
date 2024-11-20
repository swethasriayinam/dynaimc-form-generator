import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  required = false,
  placeholder = "",
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
      <textarea
        id={id}
        placeholder={placeholder}
        {...register(id, validationRules)}
        className={`border border-gray-300 rounded p-2 w-full h-20 ${
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

export default TextArea;
