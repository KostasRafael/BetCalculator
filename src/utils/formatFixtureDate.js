const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
})

const TIME_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export function formatFixtureDate(isoDate) {
  return DATE_FORMATTER.format(new Date(isoDate)).replace(',', '').toUpperCase()
}

export function formatFixtureTime(isoDate) {
  return TIME_FORMATTER.format(new Date(isoDate))
}
