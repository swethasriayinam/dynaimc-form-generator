// form.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormRenderer from '../components/FormRenderer';
import '@testing-library/jest-dom';

describe('FormRenderer', () => {
  const formSchema = {
    title: 'Test Form',
    fields: [
      {
        type: 'text',
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        options: ['Male', 'Female', 'Other'],
      },
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
      },
    ],
  };

  test('renders form with correct title and fields', () => {
    render(<FormRenderer schema={formSchema} />);

    // Check for form title
    expect(screen.getByText(formSchema.title)).toBeInTheDocument();

    // Check if text input field is rendered
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    
    // Check if select field is rendered
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();

    // Check if textarea is rendered
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  test('user can input data into form fields', async () => {
    render(<FormRenderer schema={formSchema} />);

    const nameField = screen.getByLabelText('Name') as HTMLInputElement;
    fireEvent.change(nameField, { target: { value: 'John Doe' } });

    expect(nameField.value).toBe('John Doe');

    const genderField = screen.getByLabelText('Gender') as HTMLSelectElement;
    fireEvent.change(genderField, { target: { value: 'Male' } });

    expect(genderField.value).toBe('Male');
  });

  test('form validation works correctly', async () => {
    render(<FormRenderer schema={formSchema} />);

    const nameField = screen.getByLabelText('Name') as HTMLInputElement;
    const genderField = screen.getByLabelText('Gender') as HTMLSelectElement;

    fireEvent.change(nameField, { target: { value: '' } });
    fireEvent.change(genderField, { target: { value: '' } });

    // Assuming some validation logic (e.g., required fields) exists
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Check for validation error messages
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Gender is required')).toBeInTheDocument();
    });
  });
});
