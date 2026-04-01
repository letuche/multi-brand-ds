import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { TextInput } from './TextInput';
import { ThemeProvider } from '../../themes';

function renderWithTheme(
  ui: React.ReactElement,
  brand: 'aurora' | 'nebula' = 'aurora',
) {
  return render(<ThemeProvider brand={brand}>{ui}</ThemeProvider>);
}

describe('TextInput', () => {
  // ─── Renderização básica ───────────────────────────────────────

  it('renders input with associated label', () => {
    renderWithTheme(<TextInput label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('generates automatic id and associates via htmlFor', () => {
    renderWithTheme(<TextInput label="Nome" />);
    const input = screen.getByLabelText('Nome');
    expect(input).toHaveAttribute('id');
    expect(input.id).not.toBe('');
  });

  it('allows overriding id via props', () => {
    renderWithTheme(<TextInput label="Nome" id="custom-id" />);
    expect(screen.getByLabelText('Nome')).toHaveAttribute('id', 'custom-id');
  });

  it('renders placeholder when provided', () => {
    renderWithTheme(<TextInput label="Email" placeholder="you@example.com" />);
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
  });

  // ─── Hint e Error ─────────────────────────────────────────────

  it('renders hint text when provided', () => {
    renderWithTheme(<TextInput label="Email" hint="Formato: user@mail.com" />);
    expect(screen.getByText('Formato: user@mail.com')).toBeInTheDocument();
  });

  it('renders error message when provided', () => {
    renderWithTheme(<TextInput label="Email" error="Campo obrigatório" />);
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });

  it('shows only error when both hint and error are provided', () => {
    renderWithTheme(
      <TextInput label="Email" hint="Dica" error="Erro" />,
    );
    expect(screen.getByText('Erro')).toBeInTheDocument();
    expect(screen.queryByText('Dica')).not.toBeInTheDocument();
  });

  it('sets aria-invalid when error is present', () => {
    renderWithTheme(<TextInput label="Email" error="Inválido" />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not set aria-invalid when there is no error', () => {
    renderWithTheme(<TextInput label="Email" />);
    expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid');
  });

  it('aria-describedby points to hint when present', () => {
    renderWithTheme(<TextInput label="Email" hint="Uma dica" />);
    const input = screen.getByLabelText('Email');
    const hint = screen.getByText('Uma dica');
    expect(input).toHaveAttribute('aria-describedby', hint.id);
  });

  it('aria-describedby points to error when present', () => {
    renderWithTheme(<TextInput label="Email" error="Erro aqui" />);
    const input = screen.getByLabelText('Email');
    const error = screen.getByText('Erro aqui');
    expect(input).toHaveAttribute('aria-describedby', error.id);
  });

  // ─── Disabled ─────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<TextInput label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('applies disabled style to label', () => {
    renderWithTheme(<TextInput label="Email" disabled />);
    const label = screen.getByText('Email');
    expect(getComputedStyle(label).opacity).toBe('0.5');
  });

  // ─── Ref forwarding e props nativas ───────────────────────────

  it('forwards ref to the input element', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    renderWithTheme(<TextInput label="Ref test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('passes through native HTML input attributes', () => {
    renderWithTheme(
      <TextInput label="Native" data-testid="custom" aria-label="Custom" />,
    );
    const input = screen.getByLabelText('Native');
    expect(input).toHaveAttribute('data-testid', 'custom');
  });

  it('applies custom className alongside internal classes', () => {
    renderWithTheme(<TextInput label="Styled" className="my-class" />);
    const input = screen.getByLabelText('Styled');
    expect(input.className).toContain('my-class');
  });

  // ─── Acessibilidade (axe-core) ───────────────────────────────

  it('has no a11y violations in default state', async () => {
    const { container } = renderWithTheme(<TextInput label="Email" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations with error', async () => {
    const { container } = renderWithTheme(
      <TextInput label="Email" error="Campo obrigatório" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations when disabled', async () => {
    const { container } = renderWithTheme(<TextInput label="Email" disabled />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations with hint', async () => {
    const { container } = renderWithTheme(
      <TextInput label="Email" hint="Formato: user@mail.com" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
