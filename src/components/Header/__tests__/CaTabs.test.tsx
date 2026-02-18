import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { CaTabs } from '../CaTabs';
import { CaTab } from '../CaTab';

function TabsHarness({ initialValue = 'a' }: { initialValue?: string }) {
  const [value, setValue] = useState(initialValue);
  return (
    <CaTabs value={value} onChange={(_, v) => setValue(v)}>
      <CaTab value="a" label="Tab A" />
      <CaTab value="b" label="Tab B" />
      <CaTab value="c" label="Tab C" disabled />
    </CaTabs>
  );
}

describe('CaTabs', () => {
  it('renders a tablist with tab children', () => {
    render(
      <CaTabs value="a">
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab A' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab B' })).toBeInTheDocument();
  });

  it('marks the tab matching value as selected', () => {
    render(
      <CaTabs value="b">
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );

    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true');
  });

  it('calls onChange with new value when a tab is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CaTabs value="a" onChange={onChange}>
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );

    await user.click(screen.getByRole('tab', { name: 'Tab B' }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'b');
  });

  it('does not call onChange when disabled tab is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CaTabs value="a" onChange={onChange}>
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" disabled />
      </CaTabs>,
    );

    await user.click(screen.getByRole('tab', { name: 'Tab B' }));

    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies className to the tablist', () => {
    render(
      <CaTabs value="a" className="header-tabs">
        <CaTab value="a" label="Tab A" />
      </CaTabs>,
    );

    const list = screen.getByRole('tablist');
    expect(list).toHaveClass('ca-tabs', 'header-tabs');
  });

  it('navigates to next tab on ArrowRight', async () => {
    const user = userEvent.setup();
    render(<TabsHarness initialValue="a" />);

    screen.getByRole('tab', { name: 'Tab A' }).focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true');
  });

  it('navigates to previous tab on ArrowLeft', async () => {
    const user = userEvent.setup();
    render(<TabsHarness initialValue="b" />);

    screen.getByRole('tab', { name: 'Tab B' }).focus();
    await user.keyboard('{ArrowLeft}');

    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute('aria-selected', 'true');
  });

  it('wraps from last to first tab on ArrowRight when no disabled tabs', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CaTabs value="c" onChange={onChange}>
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
        <CaTab value="c" label="Tab C" />
      </CaTabs>,
    );
    screen.getByRole('tab', { name: 'Tab C' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'a');
  });

  it('does not change selection when ArrowRight targets disabled tab', async () => {
    const user = userEvent.setup();
    render(<TabsHarness initialValue="b" />);

    screen.getByRole('tab', { name: 'Tab B' }).focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true');
  });

  it('does not call onChange when key is not ArrowLeft or ArrowRight', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CaTabs value="a" onChange={onChange}>
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );
    screen.getByRole('tablist').focus();
    await user.keyboard('{Enter}');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange on keydown when onChange is not provided', async () => {
    const user = userEvent.setup();
    render(
      <CaTabs value="a">
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );
    screen.getByRole('tablist').focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute('aria-selected', 'true');
  });

  it('does not call onChange on keydown when value does not match any tab', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CaTabs value="unknown" onChange={onChange}>
        <CaTab value="a" label="Tab A" />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );
    screen.getByRole('tablist').focus();
    await user.keyboard('{ArrowRight}');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange on keydown when there are no tab children', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CaTabs value="a" onChange={onChange}>
        {null}
      </CaTabs>,
    );
    const list = screen.getByRole('tablist');
    list.focus();
    await user.keyboard('{ArrowRight}');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('calls tab onClick when provided and tab is selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onTabAClick = vi.fn();
    render(
      <CaTabs value="a" onChange={onChange}>
        <CaTab value="a" label="Tab A" onClick={onTabAClick} />
        <CaTab value="b" label="Tab B" />
      </CaTabs>,
    );
    await user.click(screen.getByRole('tab', { name: 'Tab B' }));
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'b');
    expect(onTabAClick).not.toHaveBeenCalled();
    await user.click(screen.getByRole('tab', { name: 'Tab A' }));
    expect(onTabAClick).toHaveBeenCalledTimes(1);
  });
});
