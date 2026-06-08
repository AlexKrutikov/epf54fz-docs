// Конфиг для выгрузки ВСЕГО сайта в PDF.
// Используется через: npm run docs:pdf
// Без routePatterns плагин экспортирует все маршруты.
export default {
  outFile: 'Руководство.pdf',
  // поля страницы и хром заданы в custom.css (@page / @media print)
  pdfOptions: {
    format: 'A4',
    printBackground: true,
  },
}
