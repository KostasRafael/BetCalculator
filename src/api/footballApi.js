const API_BASE_URL = 'https://v3.football.api-sports.io'
const API_KEY = import.meta.env.VITE_API_FOOTBALL_KEY

async function apiRequest(path) {
  if (!API_KEY) {
    throw new Error(
      'Missing VITE_API_FOOTBALL_KEY. Add it to a .env.local file to enable live data.',
    )
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'x-apisports-key': API_KEY },
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  if (data.errors && Object.keys(data.errors).length > 0) {
    throw new Error(Object.values(data.errors).join(', '))
  }

  return data
}

export async function fetchLeagueId(lookupParams) {
  const query = new URLSearchParams(lookupParams).toString()
  const data = await apiRequest(`/leagues?${query}`)
  const league = data.response?.[0]?.league

  if (!league) {
    throw new Error(`No league found for query: ${query}`)
  }

  return league.id
}

export async function fetchNextFixtures(leagueId, count) {
  const data = await apiRequest(`/fixtures?league=${leagueId}&next=${count}`)
  return data.response ?? []
}

export async function fetchTeamFixtures(teamId, count) {
  const data = await apiRequest(`/fixtures?team=${teamId}&last=${count}`)
  return data.response ?? []
}

export async function fetchFixtureOdds(fixtureId) {
  const data = await apiRequest(`/odds?fixture=${fixtureId}`)
  return data.response ?? []
}
