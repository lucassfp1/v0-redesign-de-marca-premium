# ROSÉ Beauty — Concept Brand

Redesign editorial de uma marca conceitual de skincare e beleza. O projeto é uma demonstração de direção de arte, experiência de loja e desenvolvimento front-end; não representa uma empresa real e não processa pedidos, cadastros ou pagamentos.

## Direção

- composição editorial assimétrica e mobile-first;
- paleta em marfim, vinho e rosé queimado;
- fotografia autoral gerada especificamente para a identidade ROSÉ;
- catálogo centralizado em `lib/products.ts`;
- menu mobile, pesquisa, mini-sacola e newsletter demonstrativos;
- animações em CSS e `IntersectionObserver`, com suporte a `prefers-reduced-motion`;
- SEO básico com metadata, canonical, Open Graph, robots e sitemap.

## Desenvolvimento

```bash
corepack pnpm install
corepack pnpm dev
```

Validação de produção:

```bash
corepack pnpm lint
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

## Nota sobre conteúdo

Preços, produtos, textos, políticas, links sociais e comportamentos de comércio são exclusivamente conceituais. Nenhuma alegação clínica, certificação, avaliação ou resultado de cliente é apresentado como real.
