import React from 'react';

import './iconbutton.css';

export interface IconButtonProps {
  /** Icon to display (can be text, emoji, or SVG) */
  icon?: React.ReactNode;
  /** Accessible label for screen readers */
  ariaLabel: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
  /** Optional disabled state */
  disabled?: boolean;
}

/** Icon button component for actions like close, menu, etc. */
export const IconButton = ({
  icon = '×',
  ariaLabel,
  size = 'medium',
  disabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={['icon-button', `icon-button--${size}`].join(' ')}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
};
