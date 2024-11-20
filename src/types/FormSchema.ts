// src/types/FormSchema.ts

export interface FormField {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    options?: string[];
  }
  
  export interface FormSchema {
    title: string;
    fields: FormField[];
  }
  