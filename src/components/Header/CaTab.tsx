import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface CaTabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  value: string;
  label?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CaTab = ({
  value,  
  label,
  selected = false,
  disabled = false,
  onSelect,
  className = '',
  ...buttonProps
}: CaTabProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onSelect?.(event);
    buttonProps.onClick?.(event);
  };

  const classes = [
    'ca-tab',
    selected ? 'ca-tab--selected' : '',
    disabled ? 'ca-tab--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      className={classes}
      onClick={handleClick}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
