import React from 'react';
import './select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below select */
  helperText?: string;
  /** Select size */
  size?: 'small' | 'medium' | 'large';
  /** Full width select */
  fullWidth?: boolean;
  /** Options to display */
  options: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
}

/** Select component for dropdown selection */
export const Select = ({
  label,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  options,
  placeholder,
  className = '',
  id,
  ...props
}: SelectProps) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const sizeClass = `select__field--${size}`;
  const errorClass = error ? 'select__field--error' : '';
  const fullWidthClass = fullWidth ? 'select--full-width' : '';

  return (
    <div className={['select', fullWidthClass, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={selectId} className="select__label">
          {label}
        </label>
      )}
      <div className="select__wrapper">
        <select
          id={selectId}
          className={['select__field', sizeClass, errorClass].filter(Boolean).join(' ')}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select__arrow">▼</span>
      </div>
      {error && <span className="select__error">{error}</span>}
      {!error && helperText && <span className="select__helper">{helperText}</span>}
    </div>
  );
};
