// Tokens semânticos Aurora — tema claro, inspirado no pôr do sol
import { primitives } from '../primitive';

export const aurora = {
  // ─── Brand colors ─────────────────────────────────────────────────
  colorPrimary: primitives.aurora_orange_600,
  colorSecondary: primitives.aurora_salmon_400,
  colorPrimarySubtle: primitives.aurora_peach_100,

  // ─── Surfaces ─────────────────────────────────────────────────────
  colorSurface: primitives.aurora_cream_50,
  colorInputBg: primitives.aurora_white,

  // ─── Text ─────────────────────────────────────────────────────────
  colorTextPrimary: primitives.aurora_brown_900,
  colorTextSecondary: primitives.aurora_brown_600,
  colorTextOnPrimary: '#FFFFFF', // AA 4.79:1
  colorTextOnSecondary: primitives.aurora_brown_900, // AAA 7.03:1

  // ─── Borders & placeholders ───────────────────────────────────────
  colorBorder: primitives.aurora_peach_300,
  colorPlaceholder: primitives.aurora_peach_200,

  // ─── Status colors ────────────────────────────────────────────────
  colorError: primitives.red_600,
  colorSuccess: primitives.green_700,
  colorWarning: primitives.orange_600,

  // ─── Focus ring ───────────────────────────────────────────────────
  colorFocusRing: primitives.aurora_orange_600,
} as const;

export type AuroraTokens = typeof aurora;
