import { FieldValues } from "react-hook-form";

// Custom hook for validation logic
const useValidation = () => {

  // Function to validate required fields
  const validateRequired = (value: string, label: string): string | boolean => {
    if (!value || value.trim() === "") {
      return `${label} is required`;
    }
    return true;
  };

  // Function to validate pattern (e.g., email, phone number)
  const validatePattern = (
    value: string,
    pattern: string,
    message: string
  ): string | boolean => {
    const regex = new RegExp(pattern);
    if (!regex.test(value)) {
      return message || "Invalid input";
    }
    return true;
  };

  // Function to validate the field length (for example, minimum and maximum length)
  const validateLength = (value: string, minLength: number, maxLength: number, label: string): string | boolean => {
    if (value.length < minLength) {
      return `${label} should have at least ${minLength} characters`;
    }
    if (value.length > maxLength) {
      return `${label} should not exceed ${maxLength} characters`;
    }
    return true;
  };

  // Main function to return the appropriate validation rules for each field
  const getValidationRules = (
    field: string,
    required: boolean = false,
    pattern?: string,
    patternMessage?: string,
    minLength?: number,
    maxLength?: number
  ) => {
    const validationRules: { [key: string]: any } = {};

    // Validate required
    if (required) {
      validationRules.required = (value: string) => validateRequired(value, field);
    }

    // Validate pattern
    if (pattern) {
      validationRules.pattern = {
        value: new RegExp(pattern),
        message: patternMessage || "Invalid input",
      };
    }

    // Validate length
    if (minLength || maxLength) {
      validationRules.minLength = {
        value: minLength,
        message: `${field} should have at least ${minLength} characters`,
      };
      validationRules.maxLength = {
        value: maxLength,
        message: `${field} should not exceed ${maxLength} characters`,
      };
    }

    return validationRules;
  };

  return {
    validateRequired,
    validatePattern,
    validateLength,
    getValidationRules,
  };
};

export default useValidation;
