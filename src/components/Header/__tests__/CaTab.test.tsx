import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { CaTab } from '../CaTab';

describe('CaTab', () => {
  it('renders with label and value', () => {
    render(<CaTab value="tab1" label="Tab One" />);

    const tab = screen.getByRole('tab', { name: 'Tab One' });
    expect(tab).toBeInTheDocument();
    expect(tab).toHaveAttribute('type', 'button');
  });

  it('has aria-selected false when not selected', () => {
    render(<CaTab value="tab1" label="Tab One" selected={false} />);
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'false');
  });

  it('has aria-selected true when selected', () => {
    render(<CaTab value="tab1" label="Tab One" selected />);
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'true');
  });

  it('has aria-disabled when disabled', () => {
    render(<CaTab value="tab1" label="Tab One" disabled />);
    expect(screen.getByRole('tab')).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies ca-tab and ca-tab--selected classes when selected', () => {
    render(<CaTab value="tab1" label="Tab One" selected />);
    const tab = screen.getByRole('tab');
    expect(tab).toHaveClass('ca-tab', 'ca-tab--selected');
  });

  it('applies ca-tab--disabled class when disabled', () => {
    render(<CaTab value="tab1" label="Tab One" disabled />);
    expect(screen.getByRole('tab')).toHaveClass('ca-tab', 'ca-tab--disabled');
  });

  it('calls onSelect when clicked and not disabled', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<CaTab value="tab1" label="Tab One" onSelect={onSelect} />);

    await user.click(screen.getByRole('tab', { name: 'Tab One' }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(expect.any(Object));
  });

  it('does not call onSelect when clicked and disabled', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<CaTab value="tab1" label="Tab One" disabled onSelect={onSelect} />);

    await user.click(screen.getByRole('tab', { name: 'Tab One' }));

    expect(onSelect).not.toHaveBeenCalled();
  });

  it('calls onClick when provided and tab is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<CaTab value="tab1" label="Tab One" onSelect={vi.fn()} onClick={onClick} />);

    await user.click(screen.getByRole('tab', { name: 'Tab One' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('merges custom className with default classes', () => {
    render(<CaTab value="tab1" label="Tab One" className="custom-tab" />);
    const tab = screen.getByRole('tab');
    expect(tab).toHaveClass('ca-tab', 'custom-tab');
  });
});
