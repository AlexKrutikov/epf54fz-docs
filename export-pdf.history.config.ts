// Конфиг для выгрузки в PDF ТОЛЬКО раздела «История изменений».
// Используется через: npm run docs:pdf:history
// Экспорт всего сайта работает без этого конфига: npm run docs:pdf
//
// Плагин принудительно подставляет в начало ["/**", "!/404.html", ...наши],
// поэтому, чтобы оставить только историю, сначала исключаем всё ("!/**"),
// затем возвращаем маршрут /history/.
export default {
  routePatterns: ['!/**', '**/history/**', '**/history/', '**/history'],
  outFile: 'Список изменений.pdf',
  // поля страницы и хром заданы в custom.css (@page / @media print)
  pdfOptions: {
    format: 'A4',
    printBackground: true,
  },
}
