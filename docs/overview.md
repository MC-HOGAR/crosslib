# Project overview

Crosslib is a shared TypeScript package used by two frontends and one backend. It holds reusable domain models, validation schemas, and utilities so product logic stays consistent everywhere. The library is compiled to both ESM and CommonJS with bundled type declarations, making it safe to import in browsers, Node.js services, and tooling.

## Package layout

* **`src/common`** – Cross-cutting helpers and primitives such as date utilities and shared data shapes (e.g., `Core.types` for common identifiers and image metadata).
* **`src/modules`** – Domain-focused areas grouped by business capability (articles, financing, menus, storefront, users, etc.). Modules typically expose `types` for DTOs, `domain` classes for behavior, `schemas` for validation, and `utils` for helper calculations.
* **`src/aws`** – Constants and placeholders for infrastructure concerns shared across environments (e.g., default AWS region and S3 bucket names).

## Build and distribution

The library publishes three entry points:

* `dist/esm` for ESM consumers
* `dist/cjs` for CommonJS
* `dist/types` for `.d.ts` declarations

`package.json` exports map these bundles so consumers can import either the root or individual module paths without worrying about file extensions or module format.

## Usage notes

* The TypeScript `baseUrl` is `src` with an alias of `@/` pointing to the same root; source files import shared pieces using paths like `@/common/types/Core.types`.
* Domain utilities rely on `decimal.js` for precise arithmetic and `zod` for runtime validation schemas.
* Example import:

  ```ts
  import { ArticuloPrecio } from '@mc-hogar/crosslib/modules/Articulos/domain'
  import { ArticuloWebZodSchema } from '@mc-hogar/crosslib/modules/Articulos/schemas/ArticuloWeb.schema'
  ```