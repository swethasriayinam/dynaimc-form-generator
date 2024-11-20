import React, { useState } from "react";
import { validateJSON } from "../utils/schemaValidator";

interface JSONEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    try {
      validateJSON(newValue);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-80 border border-gray-300 rounded p-2 font-mono text-sm"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter JSON schema here..."
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
