export const setFormat = (date, locale, option) =>
new Intl.DateTimeFormat(locale, { dateStyle: option }).format(new Date(date))