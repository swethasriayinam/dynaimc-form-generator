# Dynamic Form Generator

A dynamic form generator that takes a JSON schema and generates a styled, functional form in real-time. The application includes a JSON editor and a form preview side-by-side, updating in real time as the JSON schema is edited.

## Features

- **Real-time form generation:** As the JSON schema is edited, the form is updated immediately.
- **Validation:** The form validates input data according to the provided schema and displays error messages.
- **Responsive design:** The app is mobile-friendly with a split-screen view that stacks the editor and form preview on smaller screens.
- **Styling:** Tailwind CSS is used for consistent and responsive styling.
- **JSON editor:** Syntax highlighting, error messages, and validation for editing the JSON schema.
- **Form submission:** Submit the form data, and it will be logged to the console, with a success message displayed upon submission.
- **Testing:** The project includes Playwright for end-to-end testing and Jest for unit tests.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/dynamic-form-generator.git
