# Multi-Brand Design System

Biblioteca de componentes React acessíveis com suporte a múltiplas marcas via design tokens e CSS custom properties.

## Marcas

- **Aurora** — Tema claro, inspirado no pôr do sol. Tons quentes de laranja, salmão e creme.
- **Nebula** — Tema escuro, inspirado no cosmos. Tons de índigo, lavanda e teal.

## Estrutura

```
packages/
  tokens/   # Design tokens (primitivos, semânticos, utilitários)
  react/    # Componentes React
stories/    # Documentação e exemplos no Storybook
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run storybook     # Inicia o Storybook em localhost:6006
npm test              # Roda os testes
npm run build         # Builda os pacotes
```

## Uso

Adicione o `ThemeProvider` na raiz do projeto, informando a marca desejada:

```tsx
import { ThemeProvider, Button, TextInput } from '@multi-brand-ds/react';

<ThemeProvider brand="aurora">
  <Button variant="primary">Salvar</Button>
  <TextInput label="E-mail" placeholder="you@example.com" />
</ThemeProvider>
```

## Componentes

- **Button** — Variantes `primary` e `secondary`, estados `loading` e `disabled`
- **TextInput** — Com `label`, `hint`, mensagem de `error` e validação acessível (WCAG 2.1)

## Acessibilidade

Todos os componentes seguem as diretrizes WCAG 2.1 AA. Testes automatizados com `vitest-axe` e `@storybook/addon-a11y`.

---

## Se você tivesse mais tempo, o que evoluiria nesse Design System e por quê?

**Mais componentes** — Select, Checkbox, Radio, Modal e Toast cobririam os casos de uso mais comuns. Um componente composto como `FormField` (que agrupa label + input + mensagem de erro) reduziria boilerplate nas aplicações consumidoras. Adicionaria também uma `size` prop nos componentes existentes (`sm`, `md`, `lg`) para cobrir diferentes densidades de interface.

**Wrappers para Web Components** — Publicaria versões agnósticas de framework usando a Web Components API, permitindo que times que não usam React consumam os mesmos tokens e a mesma lógica de acessibilidade sem depender do ecossistema React.

**Tokens com suporte a dark/light mode por marca** — A arquitetura atual já suporta múltiplas marcas com facilidade. Caso desejado, seria possível adicionar facilmente também variantes de modo por marca: `aurora-light`, `aurora-dark`, `nebula-light`, `nebula-dark`. Como os tokens semânticos compartilham as mesmas chaves entre marcas, bastaria criar novas entradas no mapa de tokens — a estrutura já está preparada para isso.

**Style Dictionary** — Migraria os tokens de TypeScript puro para o Style Dictionary, gerando automaticamente saídas em CSS, JSON, iOS e Android a partir de uma única fonte. Isso facilitaria a adoção por times mobile e sincronização com o Figma via plugins de tokens.

**Testes de regressão visual** — Integraria o Chromatic para detectar mudanças visuais não intencionais a cada PR. Em um DS multimarcas, uma alteração em um token pode afetar dezenas de componentes — testes visuais automatizados são a rede de segurança essencial para isso.

**Publicação no npm** — Removeria o `private: true` dos pacotes e configuraria um fluxo de release com Changesets para versionar e publicar `@multi-brand-ds/tokens` e `@multi-brand-ds/react`, permitindo consumo real por projetos externos sem necessidade de estar no mesmo repositório.

**Suporte a `prefers-color-scheme`** — Adicionaria uma opção no `ThemeProvider` para detectar automaticamente a preferência de tema escuro/claro do sistema operacional do usuário, tornando a alternância de marcas mais natural e acessível.

---
*Letícia Monteiro para Môre (2026)*
