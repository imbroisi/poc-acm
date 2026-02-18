import type { KeyboardEvent, ReactElement, ReactNode, SyntheticEvent } from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import type { CaTabProps } from './CaTab';

export interface CaTabsProps {
  value: string;
  onChange?: (event: SyntheticEvent, value: string) => void;
  children: ReactNode;
  className?: string;
}

export const CaTabs = ({ value, onChange, children, className = '' }: CaTabsProps) => {
  const tabs = Children.toArray(children).filter(isValidElement) as ReactElement<CaTabProps>[];

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onChange || tabs.length === 0) return;

    const currentIndex = tabs.findIndex((tab) => tab.props.value === value);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else {
      return;
    }

    const nextTab = tabs[nextIndex];
    if (nextTab.props.disabled) return;

    onChange(event, nextTab.props.value);
  };

  const enhancedChildren = tabs.map((tab) =>
    cloneElement(tab, {
      selected: tab.props.value === value,
      onSelect: (event) => {
        if (tab.props.disabled) return;
        onChange?.(event, tab.props.value);
        tab.props.onClick?.(event);
      },
    }),
  );

  return (
    <div
      role="tablist"
      tabIndex={0}
      className={['ca-tabs', className].filter(Boolean).join(' ')}
      onKeyDown={handleKeyDown}
    >
      {enhancedChildren}
    </div>
  );
};
