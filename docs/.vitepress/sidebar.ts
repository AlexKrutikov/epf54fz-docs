export const sidebar = [
    {
        text: 'Установка и подключение',
        items: [
            { text: 'Установка драйверов для работы с ККТ', link: '/instructions/install-drivers' },
            { text: 'Установка обработки обслуживания', link: '/instructions/install-handler' },
            { text: 'Обновление обработки обслуживания', link: '/instructions/update-handler' },
            { text: 'Установка параметров пользователя', link: '/instructions/user-params' },
        ]
    },
    {
        text: 'Сеть и очередь печати',
        items: [
            { text: 'Работа по сети через службу RPC', link: '/instructions/rpc-network' },
            { text: 'Использование очереди печати', link: '/instructions/print-queue' },
        ]
    },
    {
        text: 'Настройка',
        items: [
            { text: 'Настройка параметров обработки', link: '/instructions/handler-settings' },
            { text: 'Режим «ККТ с передачей данных»', link: '/instructions/kkt-mode' },
        ]
    },
    {
        text: 'Работа с чеками',
        items: [
            { text: 'Пробитие чеков из кассовых ордеров', link: '/instructions/cash-orders' },
            { text: 'Особенности работы с обработкой ФЗ.54', link: '/instructions/fz54-features' },
            { text: 'Пробитие чеков по формату ФФД 1.05 и выше', link: '/instructions/ffd105' },
            { text: 'Чеки коррекции', link: '/instructions/correction-checks' },
        ]
    },
    {
        text: 'Маркировка и разрешительный режим',
        items: [
            { text: 'Модуль «Маркировка»', link: '/instructions/marking' },
            { text: 'Исправление марок', link: '/instructions/marking-fix' },
            { text: 'Разрешительный режим', link: '/instructions/permit-mode' },
            { text: 'ТС ПИоТ', link: '/instructions/piot' },
        ]
    },
    {
        text: 'Расширенные возможности',
        items: [
            { text: 'Внешняя обработка «Работа с кассой»', link: '/instructions/cash-register-ext' },
            { text: 'Эквайринг', link: '/instructions/acquiring' },
            { text: 'Работа с подарочными картами', link: '/instructions/gift-cards' },
            { text: 'Работа по агентской схеме', link: '/instructions/agent-scheme' },
        ]
    },
    {
        text: 'Доработка конфигурации',
        items: [
            { text: 'Передача ссылки на документ печати', link: '/instructions/print-link' },
        ]
    },
    {
        text: 'Решение проблем',
        items: [
            { text: 'Известные проблемы', link: '/instructions/troubleshooting' },
        ]
    },
    {
        text: 'Справочные материалы',
        items: [
            { text: 'Методические рекомендации ФНС (54-ФЗ)', link: '/instructions/method-recommendations' },
        ]
    }
]
