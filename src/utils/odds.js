const MATCH_WINNER_BET_ID = 1
const GOALS_OVER_UNDER_BET_ID = 5
const PREFERRED_BOOKMAKER_ID = 8 // Bet365 — widely covered, tends to offer the full market set

function findBookmakerWithBet(bookmakers, betId) {
  const preferred = bookmakers.find(
    (bookmaker) =>
      bookmaker.id === PREFERRED_BOOKMAKER_ID && bookmaker.bets.some((bet) => bet.id === betId),
  )
  if (preferred) return preferred

  return bookmakers.find((bookmaker) => bookmaker.bets.some((bet) => bet.id === betId)) ?? null
}

function impliedProbability(odd) {
  return `${((1 / parseFloat(odd)) * 100).toFixed(2)}%`
}

export function buildMatchResultOdds(oddsResponse, homeTeamName, awayTeamName) {
  const bookmakers = oddsResponse[0]?.bookmakers ?? []
  const bookmaker = findBookmakerWithBet(bookmakers, MATCH_WINNER_BET_ID)
  if (!bookmaker) return null

  const bet = bookmaker.bets.find((entry) => entry.id === MATCH_WINNER_BET_ID)
  const findOdd = (label) => bet.values.find((value) => value.value === label)?.odd

  const home = findOdd('Home')
  const draw = findOdd('Draw')
  const away = findOdd('Away')
  if (!home || !draw || !away) return null

  return [
    { label: `Home Win (${homeTeamName})`, odds: home, probability: impliedProbability(home) },
    { label: 'Draw', odds: draw, probability: impliedProbability(draw) },
    { label: `Away Win (${awayTeamName})`, odds: away, probability: impliedProbability(away) },
  ]
}

export function buildGoalsOddsLines(oddsResponse) {
  const bookmakers = oddsResponse[0]?.bookmakers ?? []
  const bookmaker = findBookmakerWithBet(bookmakers, GOALS_OVER_UNDER_BET_ID)
  if (!bookmaker) return []

  const bet = bookmaker.bets.find((entry) => entry.id === GOALS_OVER_UNDER_BET_ID)
  const lines = new Map()

  bet.values.forEach(({ value, odd }) => {
    const [side, line] = value.split(' ')
    if (!lines.has(line)) lines.set(line, {})
    lines.get(line)[side.toLowerCase()] = odd
  })

  return Array.from(lines.entries())
    .filter(([, sides]) => sides.over && sides.under)
    .sort(([a], [b]) => parseFloat(a) - parseFloat(b))
    .map(([line, sides]) => ({
      line,
      over: { odds: sides.over, probability: impliedProbability(sides.over) },
      under: { odds: sides.under, probability: impliedProbability(sides.under) },
    }))
}
