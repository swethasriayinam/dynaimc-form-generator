import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormRenderer from "./components/FormRenderer";
import { FormSchema } from "./types/FormSchema"; // Import the FormSchema type
import "./styles/index.css";

const App: React.FC = () => {
  
  const [jsonSchema, setJsonSchema] = useState<string>("");

  const handleSchemaChange = (value: string) => {
    setJsonSchema(value);
  };

  const parseJsonSchema = (): FormSchema | null => {
    try {
      const parsed = JSON.parse(jsonSchema);
      // Here you can add validation for the parsed schema if necessary
      return parsed as FormSchema;
    } catch (error) {
      console.error("Invalid JSON schema", error);
      return null; // Return null if the schema is invalid
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">JSON Schema Editor</h1>
        <JSONEditor value={jsonSchema} onChange={handleSchemaChange} />
      </div>
      <div className="w-full lg:w-1/2 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Generated Form</h1>
        {jsonSchema && parseJsonSchema() ? (
          <FormRenderer schema={parseJsonSchema() as FormSchema} />
        ) : (
          <p className="text-red-500">Invalid JSON schema</p>
        )}
      </div>
    </div>
  );
};

export default App;
