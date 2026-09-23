import { createContext, useCallback, useContext, useEffect, useReducer, useRef } from 'react'
import { LEAGUES_CONFIG, NEXT_FIXTURES_COUNT } from '../config/leagues'
import { TEAM_FORM_COUNT } from '../config/analysis'
import {
  fetchLeagueId,
  fetchNextFixtures,
  fetchTeamFixtures,
  fetchFixtureOdds,
} from '../api/footballApi'

const LeaguesContext = createContext(null)

const initialLeagues = Object.fromEntries(
  LEAGUES_CONFIG.map((league) => [league.key, { id: null, status: 'idle', error: null }]),
)

console.log("initialLeagues, in leaguesContext.jsx line 17", initialLeagues);

const initialFixtures = Object.fromEntries(
  LEAGUES_CONFIG.map((league) => [league.key, { status: 'idle', data: [], error: null }]),
)

const initialState = {
  leagues: initialLeagues,
  fixtures: initialFixtures,
  selectedLeague: LEAGUES_CONFIG[0].key,
  selectedFixture: null,
  teamForm: {},
  odds: {},
}

function reducer(state, action) {
  switch (action.type) {
    case 'LEAGUE_ID_LOADING':
      return {
        ...state,
        leagues: {
          ...state.leagues,
          [action.key]: { ...state.leagues[action.key], status: 'loading', error: null },
        },
      }
    case 'LEAGUE_ID_SUCCESS':
      return {
        ...state,
        leagues: {
          ...state.leagues,
          [action.key]: { id: action.id, status: 'ready', error: null },
        },
      }
    case 'LEAGUE_ID_ERROR':
      return {
        ...state,
        leagues: {
          ...state.leagues,
          [action.key]: { ...state.leagues[action.key], status: 'error', error: action.error },
        },
      }
    case 'FIXTURES_LOADING':
      return {
        ...state,
        fixtures: {
          ...state.fixtures,
          [action.key]: { ...state.fixtures[action.key], status: 'loading', error: null },
        },
      }
    case 'FIXTURES_SUCCESS':
      return {
        ...state,
        fixtures: {
          ...state.fixtures,
          [action.key]: { status: 'ready', data: action.data, error: null },
        },
      }
    case 'FIXTURES_ERROR':
      return {
        ...state,
        fixtures: {
          ...state.fixtures,
          [action.key]: { ...state.fixtures[action.key], status: 'error', error: action.error },
        },
      }
    case 'SELECT_LEAGUE':
      return { ...state, selectedLeague: action.key }
    case 'SELECT_FIXTURE':
      return { ...state, selectedFixture: action.fixture }
    case 'TEAM_FORM_LOADING':
      return {
        ...state,
        teamForm: {
          ...state.teamForm,
          [action.teamId]: { status: 'loading', data: [], error: null },
        },
      }
    case 'TEAM_FORM_SUCCESS':
      return {
        ...state,
        teamForm: {
          ...state.teamForm,
          [action.teamId]: { status: 'ready', data: action.data, error: null },
        },
      }
    case 'TEAM_FORM_ERROR':
      return {
        ...state,
        teamForm: {
          ...state.teamForm,
          [action.teamId]: { status: 'error', data: [], error: action.error },
        },
      }
    case 'ODDS_LOADING':
      return {
        ...state,
        odds: {
          ...state.odds,
          [action.fixtureId]: { status: 'loading', data: [], error: null },
        },
      }
    case 'ODDS_SUCCESS':
      return {
        ...state,
        odds: {
          ...state.odds,
          [action.fixtureId]: { status: 'ready', data: action.data, error: null },
        },
      }
    case 'ODDS_ERROR':
      return {
        ...state,
        odds: {
          ...state.odds,
          [action.fixtureId]: { status: 'error', data: [], error: action.error },
        },
      }
    default:
      return state
  }
}

async function loadTeamForm(dispatch, teamId) {
  dispatch({ type: 'TEAM_FORM_LOADING', teamId })
  try {
    const data = await fetchTeamFixtures(teamId, TEAM_FORM_COUNT)
    dispatch({ type: 'TEAM_FORM_SUCCESS', teamId, data })
  } catch (error) {
    console.error(`[team-form] team ${teamId} failed:`, error.message)
    dispatch({ type: 'TEAM_FORM_ERROR', teamId, error: error.message })
  }
}

async function loadOdds(dispatch, fixtureId) {
  dispatch({ type: 'ODDS_LOADING', fixtureId })
  try {
    const data = await fetchFixtureOdds(fixtureId)
    dispatch({ type: 'ODDS_SUCCESS', fixtureId, data })
  } catch (error) {
    console.error(`[odds] fixture ${fixtureId} failed:`, error.message)
    dispatch({ type: 'ODDS_ERROR', fixtureId, error: error.message })
  }
}

export function LeaguesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const hasFetchedRef = useRef(false)

  useEffect(() => {
    if (hasFetchedRef.current) return
    hasFetchedRef.current = true

    LEAGUES_CONFIG.forEach(async (league) => {
      dispatch({ type: 'LEAGUE_ID_LOADING', key: league.key })

      let id
      try {
        id = await fetchLeagueId(league.lookupParams)
        console.log(`[leagues] ${league.name} id:`, id)
        dispatch({ type: 'LEAGUE_ID_SUCCESS', key: league.key, id })
      } catch (error) {
        console.error(`[leagues] ${league.name} failed:`, error.message)
        dispatch({ type: 'LEAGUE_ID_ERROR', key: league.key, error: error.message })
        return
      }

      dispatch({ type: 'FIXTURES_LOADING', key: league.key })
      try {
        const data = await fetchNextFixtures(id, NEXT_FIXTURES_COUNT)
        dispatch({ type: 'FIXTURES_SUCCESS', key: league.key, data })
      } catch (error) {
        console.error(`[fixtures] ${league.name} failed:`, error.message)
        dispatch({ type: 'FIXTURES_ERROR', key: league.key, error: error.message })
      }
    })
  }, [])

  const selectLeague = useCallback((key) => {
    dispatch({ type: 'SELECT_LEAGUE', key })
  }, [])

  const selectFixture = useCallback((fixture) => {
    dispatch({ type: 'SELECT_FIXTURE', fixture })
    loadTeamForm(dispatch, fixture.home.id)
    loadTeamForm(dispatch, fixture.away.id)
    loadOdds(dispatch, fixture.id)
  }, [])

  return (
    <LeaguesContext.Provider value={{ ...state, selectLeague, selectFixture }}>
      {children}
    </LeaguesContext.Provider>
  )
}

export function useLeagues() {
  const context = useContext(LeaguesContext)
  if (!context) {
    throw new Error('useLeagues must be used within a LeaguesProvider')
  }
  return context
}
