import type { ChangeEvent, SubmitEvent } from 'react';
import { useState } from 'react';

// --- Типы ---
interface FormFields {
  name: string;
  email: string;
  age: string;
}

interface FormErrors {
  nameError: string;
  emailError: string;
  ageError: string;
}

// --- Validation functions (Ch. 4) ---
function validateName(name: string): string {
  if (!name.trim()) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters';
  return '';
}

function validateEmail(email: string): string {
  if (!email.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Invalid email format';
  return '';
}

function validateAge(age: string): string {
  if (!age) return 'Age is required';
  if (Number.isNaN(Number(age))) return 'Age must be a number';
  if (Number(age) < 18) return 'You must be at least 18 years old';
  return '';
}

export default function RegistrationForm() {
  // State for form fields
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    age: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState<FormErrors>({
    nameError: '',
    emailError: '',
    ageError: '',
  });

  // State for success message
  const [success, setSuccess] = useState<boolean>(false);

  // Generic onChange handler — updates field + validates on change (Ch. 4)
  const handleChange =
    (field: keyof FormFields) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;

      setFields((prev) => ({ ...prev, [field]: value }));

      // Validate the changed field immediately
      const errorKey = `${field}Error` as keyof FormErrors;
      const validators: Record<keyof FormFields, (v: string) => string> = {
        name: validateName,
        email: validateEmail,
        age: validateAge,
      };
      setErrors((prev) => ({ ...prev, [errorKey]: validators[field](value) }));
    };

  // onSubmit handler — uses synthetic event (Ch. 4 — Using synthetic event objects)
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent default page reload

    // Validate all fields before submit
    const newErrors: FormErrors = {
      nameError: validateName(fields.name),
      emailError: validateEmail(fields.email),
      ageError: validateAge(fields.age),
    };

    setErrors(newErrors);

    // If any error exists — abort
    if (newErrors.nameError || newErrors.emailError || newErrors.ageError) return;

    // On success — show message and reset form
    setSuccess(true);
    setFields({ name: '', email: '', age: '' });
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>User Registration</h2>

      {/* Success message */}
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}

      {/* Controlled form (Ch. 4 — Controlled Component) */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Name"
            value={fields.name}
            onChange={handleChange('name')}
            style={{ display: 'block', width: '100%', padding: 8 }}
          />
          {errors.nameError && (
            <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.nameError}</p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={fields.email}
            onChange={handleChange('email')}
            style={{ display: 'block', width: '100%', padding: 8 }}
          />
          {errors.emailError && (
            <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.emailError}</p>
          )}
        </div>

        {/* Age */}
        <div style={{ marginBottom: 12 }}>
          <input
            type="number"
            placeholder="Age"
            value={fields.age}
            onChange={handleChange('age')}
            style={{ display: 'block', width: '100%', padding: 8 }}
          />
          {errors.ageError && (
            <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.ageError}</p>
          )}
        </div>

        <button type="submit" style={{ padding: '8px 24px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
