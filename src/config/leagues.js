import greeceImg from '../assets/leagues/greece.png'
import englandImg from '../assets/leagues/england.png'
import spainImg from '../assets/leagues/spain.png'
import germanyImg from '../assets/leagues/germany.png'

export const NEXT_FIXTURES_COUNT = 10

export const LEAGUES_CONFIG = [
  {
    key: 'epl',
    country: 'England',
    name: 'English Premier League',
    flag: '🏴',
    image: englandImg,
    lookupParams: { name: 'premier league' },
  },
  {
    key: 'greece',
    country: 'Greece',
    name: 'Greek Super League',
    flag: '🇬🇷',
    image: greeceImg,
    lookupParams: { search: 'super league' },
  },
  {
    key: 'spain',
    country: 'Spain',
    name: 'Spanish La Liga',
    flag: '🇪🇸',
    image: spainImg,
    lookupParams: { search: 'la liga' },
  },
  {
    key: 'germany',
    country: 'Germany',
    name: 'German Bundesliga',
    flag: '🇩🇪',
    image: germanyImg,
    lookupParams: { search: 'bundesliga' },
  },
]
