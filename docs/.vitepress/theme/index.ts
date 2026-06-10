import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { YM_COUNTER_ID } from '../metrika'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    // Только в браузере и только если счётчик задан (в dev head не подключается).
    if (import.meta.env.SSR || !YM_COUNTER_ID) return

    let lastUrl = ''
    const hit = (url: string) => {
      if (url === lastUrl) return
      lastUrl = url
      // @ts-ignore — ym определяется инлайн-скриптом счётчика из config.head
      if (typeof window.ym === 'function') window.ym(YM_COUNTER_ID, 'hit', url)
    }

    // Первый просмотр (init с defer: true автоматический хит не шлёт).
    hit(location.href)

    // Переходы внутри SPA. Дедуп по URL страхует от двойного учёта стартовой страницы.
    const prev = router.onAfterRouteChanged
    router.onAfterRouteChanged = (to: string) => {
      prev?.(to)
      hit(location.href)
    }
  }
}
