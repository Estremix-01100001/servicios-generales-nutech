// Utilidades para testing de componentes

import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Mock de motion para testing
jest.mock('motion/react', () => ({
  motion: {
    div: 'div',
    section: 'section',
    button: 'button',
    nav: 'nav',
    a: 'a',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    img: 'img',
    svg: 'svg',
    path: 'path'
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children
}));

// Provider personalizado para testing
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock de window.matchMedia para responsive testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock de IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

export * from '@testing-library/react';
export { customRender as render };
