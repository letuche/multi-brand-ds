// Tokens compartilhados entre todas as marcas

// ─── Tipografia ─────────────────────────────────────────────────────

// Fontes do sistema — o DS não impõe fonte customizada
export const fontFamily = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as const;

// Escala em rem para respeitar configuração do navegador (WCAG 1.4.4)
export const fontSize = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.25rem', // 20px
  xl: '1.5rem', // 24px
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

// Valores sem unidade — escalam proporcionalmente com font-size
export const lineHeight = {
  tight: '1.25',
  normal: '1.5',
  relaxed: '1.75',
} as const;

// ─── Espaçamento ────────────────────────────────────────────────────

// Grid de 4px em rem
export const spacing = {
  '1': '0.25rem', //  4px
  '2': '0.5rem', //  8px
  '3': '0.75rem', // 12px
  '4': '1rem', // 16px
  '5': '1.25rem', // 20px
  '6': '1.5rem', // 24px
  '8': '2rem', // 32px
  '10': '2.5rem', // 40px
  '12': '3rem', // 48px
  '16': '4rem', // 64px
} as const;

// ─── Border Radius ──────────────────────────────────────────────────

// Em px (não rem) — decorativo, não deve escalar com font-size
export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
} as const;
