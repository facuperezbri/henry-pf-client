export const setFormat = (date, locale, options) =>
new Intl.DateTimeFormat(locale, options).format(date)