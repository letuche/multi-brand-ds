import type { AuroraTokens } from './brands/aurora';
import type { NebulaTokens } from './brands/nebula';

// Contrato que toda marca deve satisfazer
export type SemanticTokens = Record<keyof AuroraTokens, string>;

// Garante em compile-time que Nebula tem as mesmas chaves que Aurora
type _AssertNebulaShape = Record<keyof NebulaTokens, string>;
const _nebulaCheck: SemanticTokens = {} as _AssertNebulaShape;
void _nebulaCheck;

export type BrandName = 'aurora' | 'nebula';

function toKebabCase(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// Converte tokens semânticos em CSS custom properties
// Ex: { colorPrimary: '#C24D25' } → { '--color-primary': '#C24D25' }
export function tokensToCssVars(
  tokens: SemanticTokens,
): Record<string, string> {
  const vars: Record<string, string> = {};

  for (const [key, value] of Object.entries(tokens)) {
    vars[`--${toKebabCase(key)}`] = value;
  }

  return vars;
}
