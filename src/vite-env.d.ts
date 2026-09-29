/// <reference types="vite/client" />

interface CalNamespace {
  (action: string, options?: unknown): void;
  ns?: Record<string, unknown>;
}

interface Window {
  Cal?: CalNamespace;
}
