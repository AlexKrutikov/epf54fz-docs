# Документация VitePress

## Быстрый старт

```bash
npm install
npm run docs:dev
```

Откроется на http://localhost:5173

## Сборка

```bash
npm run docs:build
```

## Структура

```
docs/
├── index.md              # Главная страница
├── .vitepress/
│   └── config.mts        # Конфиг VitePress (nav, sidebar)
└── guide/
    ├── install-drivers.md
    ├── install-handler.md
    ├── update-handler.md
    ├── user-params.md
    ├── rpc-network.md
    ├── print-queue.md
    ├── handler-settings.md
    ├── cash-orders.md
    ├── fz54-features.md
    ├── ffd105.md
    ├── cash-register-ext.md
    ├── correction-checks.md
    ├── gift-cards.md
    ├── agent-scheme.md
    └── permit-mode.md
```

## Изображения

Скопируйте папку `media/` из исходного документа в `docs/public/images/`.
Все изображения в .md файлах ссылаются на `/images/imageN.png`.
