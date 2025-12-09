# Module catalog

Use this guide to find reusable pieces by business area. Each section calls out the key exports you can import from `@mc-hogar/crosslib`.

## Articulos (Products)

* Domain classes such as `ArticuloPrecio` convert raw price payloads into `decimal.js` instances and normalize date fields for ecommerce calculations.
* Zod schemas like `ArticuloWebZodSchema` validate storefront-facing article payloads (codes, slugs, descriptions).
* Utilities compute derived values and display text (e.g., subtotal calculations and status labels for Aikon article states).

## Aikon / Ventas (ERP sales helpers)

Validation-rule constants describe allowed formats for ERP entities such as depósitos, vendedores, and zonas. Use them to drive frontend form messages or backend input checks.

## Financiacion (Payment plans)

Type definitions covering banks, cards, plan metadata, payment services, and merchant numbers. These interfaces keep financing calculators and payment UI in sync with backend contracts.

## HomeCMS (Homepage content blocks)

Typed structures for the dynamic blocks that compose the storefront home page: static banners, carousels, listings, and spherical highlights.

## Integraciones / Algolia (Search indexing)

`ArticuloIndexObject` defines the shape of product records pushed to Algolia, including pricing facets, image URLs, financing plan data, and general tags.

## Jerarquias (Product hierarchy)

Domain models and DTOs for managing familias and related hierarchy metadata from Aikon.

## Marcas (Brands)

Brand DTOs and domain helpers for handling metadata sourced from the ERP.

## Menu (Shortcuts)

`AccesoDirecto` describes quick-access menu links rendered in the storefront UI.

## Procesos (System processes)

Constants and enums describing long-running system processes (e.g., full ERP sync, price recalculation) and their step names/state values.

## Storefront (Customer-facing data)

Shared storefront interfaces that coordinate pricing, availability, and display metadata between apps.

## Usuarios (Users)

User types and schemas for internal and sales personas, plus validation rules for sales user data.

## Etiquetas (Tags)

General tag types for annotating products and search records.