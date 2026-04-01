import { forwardRef, useId, type ComponentPropsWithRef } from 'react';
import styles from './TextInput.module.css';

export interface TextInputProps extends ComponentPropsWithRef<'input'> {
  label: string;
  error?: string;
  hint?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { label, error, hint, disabled, className, id: externalId, ...rest },
    ref,
  ) {
    const autoId = useId();
    const inputId = externalId || autoId;
    const messageId = `${inputId}-message`;

    const message = error || hint;
    const hasError = Boolean(error);

    const wrapperClasses = [
      styles.wrapper,
      hasError && styles.error,
      disabled && styles.disabled,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [styles.input, className].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={message ? messageId : undefined}
          className={inputClasses}
          {...rest}
        />
        {message && (
          <span
            id={messageId}
            className={hasError ? styles.errorMessage : styles.hint}
          >
            {message}
          </span>
        )}
      </div>
    );
  },
);
