import React, { useId } from 'react';
import './textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below textarea */
  helperText?: string;
  /** Textarea size */
  size?: 'small' | 'medium' | 'large';
  /** Full width textarea */
  fullWidth?: boolean;
}

/** Textarea component for multi-line text entry */
export const Textarea = ({
  label,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  className = '',
  id,
  ...props
}: TextareaProps) => {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const sizeClass = `textarea__field--${size}`;
  const errorClass = error ? 'textarea__field--error' : '';
  const fullWidthClass = fullWidth ? 'textarea--full-width' : '';

  return (
    <div className={['textarea', fullWidthClass, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={textareaId} className="textarea__label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={['textarea__field', sizeClass, errorClass].filter(Boolean).join(' ')}
        {...props}
      />
      {error && <span className="textarea__error">{error}</span>}
      {!error && helperText && <span className="textarea__helper">{helperText}</span>}
    </div>
  );
};
