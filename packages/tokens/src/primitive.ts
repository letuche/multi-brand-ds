// Tokens primitivos — paleta de valores brutos, sem significado semântico
// Convenção: {marca}_{matiz}_{intensidade}
export const primitives = {
  // ─── Aurora palette (warm / sunset) ───────────────────────────────
  aurora_orange_600: '#C24D25', // Primary — deep burnt orange
  aurora_salmon_400: '#FF8C69', // Secondary — salmon sunset
  aurora_peach_100: '#FAECE7', // Primary-subtle — soft peach
  aurora_cream_50: '#FFF8F4', // Surface — warm cream
  aurora_brown_900: '#3D1508', // Text primary — deep brown
  aurora_brown_600: '#8A3518', // Text secondary — warm brown
  aurora_peach_300: '#F0997B', // Border — muted peach
  aurora_peach_200: '#D5A898', // Placeholder — dusty peach
  aurora_white: '#FFFFFF', // Input background

  // ─── Nebula palette (dark / cosmic) ───────────────────────────────
  nebula_indigo_600: '#463E9B', // Primary — deep indigo
  nebula_teal_500: '#21B586', // Secondary — cosmic teal
  nebula_indigo_900: '#26215C', // Primary-subtle — dark indigo
  nebula_black_950: '#0E0B1F', // Surface — deep space
  nebula_lavender_100: '#EEEDFE', // Text primary — near-white lavender
  nebula_lavender_300: '#AFA9EC', // Text secondary — soft lavender
  nebula_indigo_400: '#6A60CC', // Border — medium indigo
  nebula_indigo_350: '#8078D4', // Placeholder — ajustado para contraste AA
  nebula_indigo_950: '#1A1535', // Input background
  nebula_teal_400: '#5DCAA5', // Accent/links — bright teal
  nebula_purple_400: '#7F77DD', // Logo accent — purple ring
  nebula_red_400: '#EF5350', // Error — ajustado para contraste AA em fundo escuro

  // ─── Shared status colors ─────────────────────────────────────────
  red_600: '#D32F2F', // Error
  green_700: '#2E7D32', // Success
  orange_600: '#F57C00', // Warning
} as const;

export type PrimitiveToken = (typeof primitives)[keyof typeof primitives];
