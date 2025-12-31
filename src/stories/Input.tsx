import React, { useId } from 'react';
import './input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
  const generatedId = useId();
  const inputId = id || generatedId;
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
