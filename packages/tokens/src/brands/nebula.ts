// Tokens semânticos Nebula — tema escuro, inspirado no cosmos
import { primitives } from '../primitive';

export const nebula = {
  // ─── Brand colors ─────────────────────────────────────────────────
  colorPrimary: primitives.nebula_indigo_600,
  colorSecondary: primitives.nebula_teal_500,
  colorPrimarySubtle: primitives.nebula_indigo_900,

  // ─── Surfaces ─────────────────────────────────────────────────────
  colorSurface: primitives.nebula_black_950,
  colorInputBg: primitives.nebula_indigo_950,

  // ─── Text ─────────────────────────────────────────────────────────
  colorTextPrimary: primitives.nebula_lavender_100,
  colorTextSecondary: primitives.nebula_lavender_300,
  colorTextOnPrimary: primitives.nebula_lavender_100, // AAA 7.50:1
  colorTextOnSecondary: primitives.nebula_black_950, // AAA 7.38:1

  // ─── Borders & placeholders ───────────────────────────────────────
  colorBorder: primitives.nebula_indigo_400,
  colorPlaceholder: primitives.nebula_indigo_350,

  // ─── Status colors ────────────────────────────────────────────────
  colorError: primitives.red_600,
  colorSuccess: primitives.green_700,
  colorWarning: primitives.orange_600,

  // ─── Focus ring ───────────────────────────────────────────────────
  colorFocusRing: primitives.nebula_teal_400,
} as const;

export type NebulaTokens = typeof nebula;
