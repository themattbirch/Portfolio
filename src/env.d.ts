/// <reference path="../.astro/types.d.ts" />
import 'astro/client';
import 'vite/client';

interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly BASE_URL: string;
  // Add any other environment variables you're using
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
