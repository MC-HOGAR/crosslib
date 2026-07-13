# Convenciones — crosslib

- Organización por módulo de dominio en `src/modules/<Dominio>/` (ej: `PanelVendedor`, `Storefront`, `Cliente`, `Aikon`), cada uno exportando `domain`, `types`, `schemas`, `utils` como subpaths independientes (ver `exports` en `package.json`)
- Código transversal en `src/common/` (types, utils) y `src/aws/`
- **Regla de entrada:** un tipo/interface va acá SOLO si lo consumen 2+ repos (frontends distintos que requieren mismos interface o types). Si es de un solo repo, se define localmente en ese repo — no crear anticipadamente "por si en el futuro se reutiliza"
- `import type` + `export type` separado para los re-exports (evita breaking changes al consumir desde otros repos)
- No usar `any` — TypeScript estricto
- Cambios acá son potencialmente breaking para 2+ repos consumidores — todo change que toque crosslib debe declarar en el proposal qué repos consumidores quedan impactados sin exepción