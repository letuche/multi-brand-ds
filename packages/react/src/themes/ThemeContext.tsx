import { createContext, useContext } from 'react';
import type { BrandName } from '@multi-brand-ds/tokens';

export interface ThemeContextValue {
  brand: BrandName;
  setBrand: (brand: BrandName) => void;
}

// Sem valor default — o ThemeProvider é obrigatório
export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used within a <ThemeProvider>. ' +
        'Wrap your application with <ThemeProvider brand="aurora"> or ' +
        '<ThemeProvider brand="nebula">.',
    );
  }

  return context;
}
