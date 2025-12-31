import React, { useId } from 'react';
import './checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Checkbox label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Checkbox size */
  size?: 'small' | 'medium' | 'large';
}

/** Checkbox component for boolean selection */
export const Checkbox = ({
  label,
  error,
  size = 'medium',
  className = '',
  id,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const sizeClass = `checkbox--${size}`;
  const errorClass = error ? 'checkbox--error' : '';

  return (
    <div className={['checkbox', sizeClass, errorClass, className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        id={checkboxId}
        className="checkbox__input"
        {...props}
      />
      <label htmlFor={checkboxId} className="checkbox__label">
        <span className="checkbox__box">
          <span className="checkbox__checkmark">✓</span>
        </span>
        {label && <span className="checkbox__text">{label}</span>}
      </label>
      {error && <span className="checkbox__error">{error}</span>}
    </div>
  );
};
