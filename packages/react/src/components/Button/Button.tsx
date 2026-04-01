import { forwardRef, type ComponentPropsWithRef } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'primary', loading, disabled, className, children, onClick, ...rest },
    ref,
  ) {
    const isDisabled = disabled || loading;

    const classNames = [
      styles.button,
      styles[variant],
      isDisabled && styles.disabled,
      loading && styles.loading,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={classNames}
        onClick={isDisabled ? undefined : onClick}
        {...rest}
      >
        {loading && (
          <svg
            className={styles.spinner}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="31.4 31.4"
            />
          </svg>
        )}
        {children}
        {loading && (
          <span className={styles.visuallyHidden}>Loading…</span>
        )}
      </button>
    );
  },
);
