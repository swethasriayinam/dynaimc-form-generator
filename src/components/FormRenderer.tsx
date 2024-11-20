// FormRenderer.tsx

import React from 'react';

interface FormField {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

interface FormSchema {
  title: string;
  fields: FormField[];
}

interface FormRendererProps {
  schema: FormSchema; // Define the schema prop as an object with the proper type
}

const FormRenderer: React.FC<FormRendererProps> = ({ schema }) => {
  return (
    <form>
      <h1>{schema.title}</h1>
      {schema.fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'text' && <input type="text" id={field.name} />}
          {field.type === 'select' && (
            <select id={field.name}>
              {field.options?.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {field.type === 'textarea' && <textarea id={field.name}></textarea>}
        </div>
      ))}
    </form>
  );
};

export default FormRenderer;
