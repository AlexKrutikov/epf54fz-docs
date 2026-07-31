// Номер счётчика Яндекс Метрики.
//
// Модуль импортируется из двух сред: из config.mts (Node, при сборке) и из темы
// docs/.vitepress/theme/index.ts, которая выполняется в браузере. Поэтому обращаться
// к process.env здесь напрямую нельзя: в браузере такого объекта нет, и при локальном
// запуске (vitepress dev) модуль падал с «process is not defined», а вместе с ним
// не загружался и весь сайт. В production-сборке значение подставляется на этапе сборки,
// поэтому там дефект не проявлялся.
//
// Переопределить номер можно переменной окружения: VITE_YM_COUNTER_ID (видна и в браузере)
// или YM_COUNTER_ID при сборке. Иначе берётся значение по умолчанию ниже.
const fromEnv =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_YM_COUNTER_ID) ??
  (typeof process !== 'undefined' ? process.env?.YM_COUNTER_ID : undefined)

export const YM_COUNTER_ID = Number(fromEnv) || 109756539
