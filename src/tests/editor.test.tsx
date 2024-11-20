// editor.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import JSONEditor from '../components/JSONEditor';
import '@testing-library/jest-dom';

describe('JSONEditor', () => {
  const jsonData = {
    name: 'John Doe',
    gender: 'Male',
    description: 'A brief description.',
  };

  test('renders JSON editor with initial data', () => {
    render(<JSONEditor value={JSON.stringify(jsonData)} onChange={() => {}} />);

    // Check if initial JSON is rendered
    expect(screen.getByText('"name": "John Doe"')).toBeInTheDocument();
    expect(screen.getByText('"gender": "Male"')).toBeInTheDocument();
    expect(screen.getByText('"description": "A brief description."')).toBeInTheDocument();
  });

  test('user can edit JSON data', () => {
    const handleChange = jest.fn();
    render(<JSONEditor value={JSON.stringify(jsonData)} onChange={handleChange} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '{"name": "Jane Doe"}' } });

    // Check if the change event was triggered
    expect(handleChange).toHaveBeenCalledWith('{"name": "Jane Doe"}');
  });

  test('shows validation error for invalid JSON', async () => {
    const handleChange = jest.fn();
    render(<JSONEditor value={'{invalidJson}'} onChange={handleChange} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '{invalidJson}' } });

    // Assuming some validation feedback for invalid JSON
    await screen.findByText('Invalid JSON format');
  });
});
