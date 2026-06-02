# APEX — Landing Page

Landing page one-pager minimalista, mobile first, com fundo preto, headline, vídeo do YouTube e botão de CTA que aparece após 3 minutos.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Variáveis editáveis

Todas ficam no topo de `src/App.jsx`:

- `YOUTUBE_VIDEO_URL` — URL de embed do vídeo do YouTube
- `CTA_BUTTON_URL` — link de destino do botão (WhatsApp/contato)
- `BUTTON_DELAY_MS` — tempo até o botão aparecer (`180000` = 3 minutos)

Stack: React + Vite + Tailwind CSS.
