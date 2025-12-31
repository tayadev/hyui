import React, { useId } from 'react';
import './radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Radio label */
  label?: string;
  /** Radio size */
  size?: 'small' | 'medium' | 'large';
}

/** Radio component for single selection in a group */
export const Radio = ({
  label,
  size = 'medium',
  className = '',
  id,
  ...props
}: RadioProps) => {
  const generatedId = useId();
  const radioId = id || generatedId;
  const sizeClass = `radio--${size}`;

  return (
    <div className={['radio', sizeClass, className].filter(Boolean).join(' ')}>
      <input
        type="radio"
        id={radioId}
        className="radio__input"
        {...props}
      />
      <label htmlFor={radioId} className="radio__label">
        <span className="radio__circle">
          <span className="radio__dot"></span>
        </span>
        {label && <span className="radio__text">{label}</span>}
      </label>
    </div>
  );
};
