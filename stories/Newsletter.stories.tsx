import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../packages/react/src/components/Button/Button';
import { TextInput } from '../packages/react/src/components/TextInput/TextInput';
import { useTheme } from '../packages/react/src/themes/ThemeContext';

const AuroraLogo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'center',
      marginBottom: 24,
    }}
  >
    <svg width="26" height="26" viewBox="0 0 26 26">
      <circle cx="13" cy="13" r="5" fill="#C24D25" />
      <circle
        cx="13"
        cy="13"
        r="9"
        fill="none"
        stroke="#F0997B"
        strokeWidth="1.5"
      />
      <circle
        cx="13"
        cy="13"
        r="12.5"
        fill="none"
        stroke="#F5C4B3"
        strokeWidth="1"
      />
    </svg>
    <span
      style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#4A1B0C',
        letterSpacing: '-0.4px',
      }}
    >
      Aurora
    </span>
  </div>
);

const NebulaLogo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'center',
      marginBottom: 24,
    }}
  >
    <svg width="26" height="26" viewBox="0 0 26 26">
      <circle cx="13" cy="13" r="3" fill="#21B586" />
      <ellipse
        cx="13"
        cy="13"
        rx="11"
        ry="4.5"
        fill="none"
        stroke="#7F77DD"
        strokeWidth="1.5"
      />
      <ellipse
        cx="13"
        cy="13"
        rx="4.5"
        ry="11"
        fill="none"
        stroke="#6A60CC"
        strokeWidth="1.5"
      />
    </svg>
    <span
      style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#CECBF6',
        letterSpacing: '-0.4px',
      }}
    >
      Nebula
    </span>
  </div>
);

const NewsletterForm = () => {
  const { brand } = useTheme();
  return (
    <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
      {brand === 'aurora' ? <AuroraLogo /> : <NebulaLogo />}
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 4,
          color: 'var(--color-text-primary)',
        }}
      >
        Fique por dentro
      </h2>
      <p
        style={{
          fontSize: 13,
          textAlign: 'center',
          marginBottom: 24,
          color: 'var(--color-text-secondary)',
        }}
      >
        Receba novidades e conteúdos exclusivos.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TextInput label="Nome" placeholder="Seu nome" />
        <TextInput label="E-mail" type="email" placeholder="you@example.com" />
        <div style={{ marginTop: 4 }}>
          <Button style={{ width: '100%' }}>Inscrever-se</Button>
        </div>
        <div style={{ marginTop: 4 }}>
          <Button variant="secondary" style={{ width: '100%' }}>
            Quero só dar uma olhada
          </Button>
        </div>
      </div>
      <p
        style={{
          fontSize: 12,
          textAlign: 'center',
          marginTop: 16,
          color: 'var(--color-text-secondary)',
        }}
      >
        Sem spam. Cancele quando quiser.
      </p>
    </div>
  );
};

const meta: Meta<typeof NewsletterForm> = {
  title: 'Examples/Newsletter',
  component: NewsletterForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsletterForm>;

export const Newsletter: Story = {};
