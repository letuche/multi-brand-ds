import { useState, useMemo, type ReactNode } from 'react';
import {
  aurora,
  nebula,
  tokensToCssVars,
  fontFamily,
  type BrandName,
  type SemanticTokens,
} from '@multi-brand-ds/tokens';
import { ThemeContext } from './ThemeContext';

const brandTokens: Record<BrandName, SemanticTokens> = {
  aurora,
  nebula,
};

export interface ThemeProviderProps {
  brand: BrandName;
  children: ReactNode;
}

export function ThemeProvider({
  brand: initialBrand,
  children,
}: ThemeProviderProps) {
  const [brand, setBrand] = useState<BrandName>(initialBrand);

  const cssVars = useMemo(() => {
    const tokens = brandTokens[brand];
    return {
      ...tokensToCssVars(tokens),
      '--font-family-sans': fontFamily.sans,
    };
  }, [brand]);

  const contextValue = useMemo(() => ({ brand, setBrand }), [brand]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div data-theme={brand} style={cssVars as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
