# Development tips

## Install

```bash
pnpm install
```

## Common scripts

* **Build:** `pnpm build` compiles type declarations plus ESM and CJS bundles.
* **Test:** `pnpm test` runs the Jest suite.
* **Lint:** `pnpm lint` checks TypeScript sources with ESLint. Add `:fix` to auto-format issues.
* **Format:** `pnpm format` formats all `.ts` files with Prettier.
* **Publish as an npm package** `npm publish`. Publish a new version of this library. Please, increase the version at `package.json` before running this command .

## Working with sources

* TypeScript sources live under `src/` with `baseUrl` also set to `src`, so imports can use `@/` aliases in code.
* Tests are colocated with utilities (e.g., article utilities) and excluded from published artifacts.