---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Главная

hero:
  image: 
    src: /logo/infostart-logo.png
    alt: Logo
  name: "54-ФЗ и Разрешительный режим"
  text: ""
  tagline: Обработки для подключения онлайн-касс к 1С
  actions:
    - theme: brand
      text: Документация
      link: /instructions/install-drivers
    - theme: alt
      text: История версий
      link: /history/index.md

features:
  - icon: 🔌
    title: Установка и подключение
    details: Драйверы ККТ, установка и обновление обработки, параметры пользователя
    link: /instructions/install-drivers
    linkText: К установке
  - icon: ⚙️
    title: Настройка обработки
    details: Настройка параметров обработки обслуживания ККМ
    link: /instructions/handler-settings
    linkText: К настройке
  - icon: 🧾
    title: Работа с чеками
    details: Пробитие из ордеров, особенности 54-ФЗ, ФФД 1.05 / 1.1 / 1.2, чеки коррекции
    link: /instructions/ffd105
    linkText: К работе с чеками
  - icon: 🏷️
    title: Маркировка и разрешительный режим
    details: Модуль «Маркировка», исправление марок, обращение в ГИС МТ перед продажей (требуется Айтида iMark)
    link: /instructions/marking
    linkText: К маркировке
  - icon: 🖨️
    title: Сеть и очередь печати
    details: Работа по сети через службу RPC, печать на одной ККТ с разных рабочих мест
    link: /instructions/print-queue
    linkText: К очереди печати
  - icon: 🧩
    title: Расширенные возможности
    details: «Работа с кассой», подарочные карты, агентская схема, доработка конфигурации
    link: /instructions/cash-register-ext
    linkText: К возможностям

---

Если вас заинтересовало данное решение, то приобрести его можно [на сайте Инфостарт][buy-link].

[buy-link]: https://infostart.ru/marketplace/345395
