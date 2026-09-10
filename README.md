# Hassan de Zé Cocá · 11122

Landing page de dobra única do candidato a Deputado Estadual pela Bahia (Eleições 2026).
Feita em Next.js 14 (App Router) + Tailwind CSS. Serve como site oficial para vinculação
e verificação de anunciante político no Meta Ads.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` (ou configure no painel da Vercel):

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site. Alimenta canonical, Open Graph e JSON-LD. |
| `NEXT_PUBLIC_META_DOMAIN_VERIFICATION` | Código de verificação de domínio do Meta Business. Gera a tag `facebook-domain-verification` no `<head>`. |

## Verificação de domínio no Meta

1. Meta Business Suite → Configurações → Segurança da marca → Domínios → Adicionar.
2. Escolha "Verificação por meta tag" e copie o código `content="..."`.
3. Defina `NEXT_PUBLIC_META_DOMAIN_VERIFICATION` com esse código e faça o deploy.
4. Volte ao Meta e clique em "Verificar domínio".

## Estrutura

- `app/page.tsx` — a landing (cabeçalho, hero, rodapé).
- `app/layout.tsx` — fonte Montserrat, metadata, Open Graph, JSON-LD.
- `public/candidato.jpg` — foto do candidato otimizada (original em `assets/`).
- `public/og.jpg` — imagem de compartilhamento 1200×630.
- `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` — ícones.

## Deploy

Projeto pronto para Vercel: `vercel` ou conecte o repositório. Configure as variáveis acima.
