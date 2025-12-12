# Crosslib

Crosslib is an isomorphic TypeScript library that centralizes shared domain models, validation schemas, and utilities for two frontends and a backend service. It ships CommonJS, ESM, and type declaration bundles so the same code can run in browsers and Node.js without duplicating logic.

* Read the [project overview](docs/overview.md) for a high-level explanation and package layout.
* Browse the [module catalog](docs/modules.md) to understand what each domain area provides.
* See [development tips](docs/development.md) for building, testing, and linting the library locally.

# Si hay problemas al querer subir el paquete a NPM: (npm publish)
- Verificar si la versión del package.json se cambio (siempre la incrementamos en 1)
- Verificar que el "Granular Access Token" que emite npm no este expirado.
  - Para volver a generarlo ir a la página de npm y generar el nuevo token asignandole la configuración deseada.
  - Ejecutar el comando: npm config set //registry.npmjs.org/:_authToken "TU_NUEVO_TOKEN_GRANULAR"
- Asegurarse de estar logeado en npm con npm login.