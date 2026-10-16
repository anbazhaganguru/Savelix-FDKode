import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Dynamically resolves the base path:
 * 1. Explicit VITE_BASE_PATH if supplied (e.g. custom domain or specific path)
 * 2. In GitHub Actions, derive /<repo-name>/ from GITHUB_REPOSITORY (unless root user page *.github.io)
 * 3. Default to '/' for standard local development
 */
const getBase = () => {
  if (process.env.VITE_BASE_PATH) {
    const customBase = process.env.VITE_BASE_PATH.trim();
    if (customBase === '') return '/';
    return customBase.endsWith('/') ? customBase : `${customBase}/`;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoParts = process.env.GITHUB_REPOSITORY.split('/');
    const repoName = repoParts[1];
    if (repoName && !repoName.endsWith('.github.io')) {
      return `/${repoName}/`;
    }
  }
  return '/';
};

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [
    react(),
    // SPA Fallback: generates dist/404.html from dist/index.html on build for GitHub Pages route refresh
    {
      name: 'copy-404-for-github-pages',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist');
        const indexHtml = path.join(distDir, 'index.html');
        const notFoundHtml = path.join(distDir, '404.html');
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml);
        }
      },
    },
  ],
});

