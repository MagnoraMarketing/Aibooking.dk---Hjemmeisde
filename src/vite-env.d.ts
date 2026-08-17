/// <reference types="vite/client" />

interface CalNamespace {
  (action: string, options?: any): void;
  ns?: Record<string, any>;
}

interface Window {
  Cal?: CalNamespace;
}
