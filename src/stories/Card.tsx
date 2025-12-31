import React from 'react';

import './card.css';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card content */
  children: React.ReactNode;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional className for custom styling */
  className?: string;
}

/** Card component for displaying content in a contained, styled box */
export const Card = ({
  title,
  children,
  footer,
  onClick,
  className = '',
  ...props
}: CardProps) => {
  const clickableClass = onClick ? 'card--clickable' : '';

  return (
    <div
      className={['card', clickableClass, className].filter(Boolean).join(' ')}
      onClick={onClick}
      {...props}
    >
      <div className="card__content">
        {title && <div className="card__header">{title}</div>}
        <div className="card__body">{children}</div>
        {footer && <div className="card__footer">{footer}</div>}
      </div>
      <div className="card__decals"></div>
    </div>
  );
};
