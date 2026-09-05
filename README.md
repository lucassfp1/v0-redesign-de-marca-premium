# ROSÉ Beauty — Concept Brand

E-commerce conceitual de uma marca contemporânea de maquiagem. O projeto demonstra direção de arte, catálogo e experiência de loja; não representa uma empresa real e não processa pedidos, cadastros ou pagamentos.

## Direção

- identidade fashion em vinho, rosa queimado, off-white e preto;
- oito fotografias originais produzidas para o universo visual ROSÉ;
- vinte produtos centralizados em `lib/products.ts`, sem duplicação por categoria;
- rotas `/shop`, `/labios`, `/rosto`, `/olhos`, `/blush` e `/best-sellers`;
- filtros, ordenação, swatches selecionáveis, busca e mini-sacola demonstrativa;
- mega menu desktop, drawer mobile e carrosséis por gesto;
- animações discretas com suporte a `prefers-reduced-motion`;
- metadata, canonical, Open Graph, robots e sitemap.

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

Produtos, preços, cores, textos, políticas, links sociais e comportamentos comerciais são fictícios e existem apenas para demonstração da interface.
