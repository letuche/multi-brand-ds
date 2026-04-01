import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Button } from './Button';
import { ThemeProvider } from '../../themes';

// Renderiza com ThemeProvider — componentes precisam das CSS variables
function renderWithTheme(
  ui: React.ReactElement,
  brand: 'aurora' | 'nebula' = 'aurora',
) {
  return render(<ThemeProvider brand={brand}>{ui}</ThemeProvider>);
}

describe('Button', () => {
  // ─── Renderização ───────────────────────────────────────────────

  it('renders with children text', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('has type="button" by default', () => {
    renderWithTheme(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('allows overriding type to "submit"', () => {
    renderWithTheme(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  // ─── Variantes ──────────────────────────────────────────────────

  it('applies primary variant class by default', () => {
    renderWithTheme(<Button>Primary</Button>);
    expect(screen.getByRole('button').className).toMatch(/primary/);
  });

  it('applies secondary variant class when specified', () => {
    renderWithTheme(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button').className).toMatch(/secondary/);
  });

  // ─── Loading ────────────────────────────────────────────────────

  it('shows spinner when loading', () => {
    renderWithTheme(<Button loading>Save</Button>);
    expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
  });

  it('sets aria-busy when loading', () => {
    renderWithTheme(<Button loading>Save</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('does not set aria-busy when not loading', () => {
    renderWithTheme(<Button>Save</Button>);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy');
  });

  it('provides visually hidden loading text for screen readers', () => {
    renderWithTheme(<Button loading>Save</Button>);
    const hiddenText = screen.getByRole('button').querySelector('[class*="visuallyHidden"]');
    expect(hiddenText).toBeInTheDocument();
    expect(hiddenText).toHaveTextContent(/loading/i);
  });

  it('prevents clicks when loading', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    renderWithTheme(<Button loading onClick={handleClick}>Save</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('is disabled when loading', () => {
    renderWithTheme(<Button loading>Save</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  // ─── Disabled ───────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('prevents clicks when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    renderWithTheme(<Button disabled onClick={handleClick}>Disabled</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  // ─── Click ──────────────────────────────────────────────────────

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // ─── Ref forwarding ─────────────────────────────────────────────

  it('forwards ref to the button element', () => {
    const ref = { current: null } as React.RefObject<HTMLButtonElement | null>;
    renderWithTheme(<Button ref={ref}>Ref test</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  // ─── Props nativas ──────────────────────────────────────────────

  it('passes through native HTML button attributes', () => {
    renderWithTheme(
      <Button data-testid="custom" aria-label="Custom label">
        Native props
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'custom');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('applies custom className alongside internal classes', () => {
    renderWithTheme(<Button className="custom-class">Styled</Button>);
    expect(screen.getByRole('button').className).toContain('custom-class');
  });

  // ─── Acessibilidade (axe-core) ─────────────────────────────────

  it('has no a11y violations (primary)', async () => {
    const { container } = renderWithTheme(<Button>Accessible</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations (secondary)', async () => {
    const { container } = renderWithTheme(
      <Button variant="secondary">Accessible</Button>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations when loading', async () => {
    const { container } = renderWithTheme(<Button loading>Loading</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations when disabled', async () => {
    const { container } = renderWithTheme(<Button disabled>Disabled</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
