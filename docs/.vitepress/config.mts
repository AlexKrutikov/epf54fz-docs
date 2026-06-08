import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
