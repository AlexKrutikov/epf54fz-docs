import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'
import { YM_COUNTER_ID } from './metrika'

// Счётчик Яндекс Метрики подключаем только в production-сборке (vitepress build),
// чтобы локальный запуск (vitepress dev) не засорял статистику. Хиты отправляются
// вручную из темы (defer: true) — см. docs/.vitepress/theme/index.ts.
const isProd = process.env.NODE_ENV === 'production'
const metrikaHead: any[] = isProd && YM_COUNTER_ID
  ? [
      [
        'script',
        {},
        `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${YM_COUNTER_ID},"init",{defer:true,clickmap:false,trackLinks:true,accurateTrackBounce:true,webvisor:false});`
      ],
      [
        'noscript',
        {},
        `<div><img src="https://mc.yandex.ru/watch/${YM_COUNTER_ID}" style="position:absolute;left:-9999px;" alt="" /></div>`
      ]
    ]
  : []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: metrikaHead,
  // Project-страница GitHub Pages: https://alexkrutikov.github.io/epf54fz-docs/
  // При переезде на собственный домен (CNAME) или репозиторий <user>.github.io
  // значение base нужно вернуть к '/'.
  base: '/epf54fz-docs/',
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru'
    }
  },
  title: "54-ФЗ и Маркировка",
  description: "Обработки для подключения онлайн-касс к 1С",

  themeConfig: {
    logo: { src: '/logo/logo.png', alt: "Logo", width: "auto", height: "--navbar-line-height" },
    outline: [2, 3],
    nav: navbar,

    lastUpdatedText: 'Последнее обновление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Переключение темы',
    lightModeSwitchTitle: 'Включить светлую тему',
    darkModeSwitchTitle: 'Включить темную тему',
    outlineTitle: 'На этой странице',

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexkrutikov' }
    ],

    footer: {
      message: 'Alexander Krutikov · Itida LLC',
      copyright: `© Infostart ${new Date().getFullYear()} | Все права защищены`
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
