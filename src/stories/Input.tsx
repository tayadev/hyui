import React from 'react';
import './input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below input */
  helperText?: string;
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Full width input */
  fullWidth?: boolean;
}

/** Input component for text entry */
export const Input = ({
  label,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const sizeClass = `input__field--${size}`;
  const errorClass = error ? 'input__field--error' : '';
  const fullWidthClass = fullWidth ? 'input--full-width' : '';

  return (
    <div className={['input', fullWidthClass, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={inputId} className="input__label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={['input__field', sizeClass, errorClass].filter(Boolean).join(' ')}
        {...props}
      />
      {error && <span className="input__error">{error}</span>}
      {!error && helperText && <span className="input__helper">{helperText}</span>}
    </div>
  );
};
