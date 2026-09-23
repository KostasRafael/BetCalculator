function buildFormRow(fixture, teamId) {
  const isHome = fixture.teams.home.id === teamId
  const opponent = isHome ? fixture.teams.away.name : fixture.teams.home.name
  const venue = isHome ? 'H' : 'A'
  const teamGoals = isHome ? fixture.goals.home : fixture.goals.away
  const opponentGoals = isHome ? fixture.goals.away : fixture.goals.home

  let result = 'D'
  if (teamGoals > opponentGoals) result = 'W'
  else if (teamGoals < opponentGoals) result = 'L'

  return {
    opponent: `${opponent} (${venue})`,
    score: `${teamGoals} – ${opponentGoals}`,
    result,
  }
}

function averageGoalsScored(fixtures, teamId) {
  if (fixtures.length === 0) return 0
  const total = fixtures.reduce((sum, fixture) => {
    const isHome = fixture.teams.home.id === teamId
    return sum + (isHome ? fixture.goals.home : fixture.goals.away)
  }, 0)
  return total / fixtures.length
}

export function getTeamFormProps(teamId, teamName, form) {
  return {
    team: teamName,
    status: form.status,
    error: form.error,
    matches: form.status === 'ready' ? form.data.map((fixture) => buildFormRow(fixture, teamId)) : [],
  }
}

export function buildAverageGoalsStat(teamId, teamName, form) {
  const label = `${teamName} Avg Goals`

  if (form.status === 'idle' || form.status === 'loading') {
    return { label, value: '—', caption: 'Loading…' }
  }
  if (form.status === 'error') {
    return { label, value: '—', caption: 'Unavailable' }
  }
  if (form.data.length === 0) {
    return { label, value: '—', caption: 'No recent matches' }
  }

  return {
    label,
    value: averageGoalsScored(form.data, teamId).toFixed(1),
    caption: `Over last ${form.data.length} played matches`,
  }
}
