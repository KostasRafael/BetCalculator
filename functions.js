async function fetchTeams(leagueId) {
  const url = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2025`;
  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
  };

  const response = await fetch(url, { headers });
  console.log("response", response);
  const responseJson = await response.json();
  console.log("responseJson", responseJson);
  const arrayOfTeams = responseJson.response;
  console.log("arrayOfTeams", arrayOfTeams);
  return arrayOfTeams;
}

async function useAllTeams(leagueId) {
  const allTeamsArray = await fetchTeams(leagueId);
  console.log("allTeamsArray", allTeamsArray);
  const allTeams = allTeamsArray.reduce((accumulator, teamItem) => {
    accumulator[teamItem.team.id] = {
      name: teamItem.team.name,
      id: teamItem.team.id,
      logo: teamItem.team.logo,
      fixturesArray: [],
    };
    return accumulator;
  }, {});

  console.log("allTeams", allTeams);
  return allTeams;
}

async function readyAllTeams(leagueId) {
  const result = await useAllTeams(leagueId);
  const allLeagueTeams = result;
  return allLeagueTeams;
}

//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//

// teamId: extracted from the team argument available when allTeams.forEach((team) => {  })
// LeagueId: passed on function call within the html page
const urlFixtures = `https://v3.football.api-sports.io/fixtures?team=${idOfCurrentTeam}&league=${someLeagueId}&season=2025&last=10`;

/*
async function fetchAndSaveTeamsFixtures(someTeamKey, someLeagueId) {
  const team = allTeams[someTeamKey];
  const idOfCurrentTeam = team.id;
  const urlFixtures = `https://v3.football.api-sports.io/fixtures?team=${idOfCurrentTeam}&league=${someLeagueId}&season=2025&last=10`;
  const responseFixtures = await fetch(urlFixtures, { headers });
  if (!responseFixtures.ok)
    throw new Error(`${team.name} failed: ${responseFixtures.status}`);
  const fixtures = await responseFixtures.json();
  team.fixturesArray = fixtures;
  console.log("TeamFixturesUpdated", team);
}

async function fetchAllTeamsFixturesSequentially(someLeagueId) {
  for (const someTeamKey in allTeams) {
    try {
      await fetchAndSaveTeamsFixtures(someTeamKey, someLeagueId);
      console.log("fetched team!");
    } catch (err) {
      console.error(`Error fetching ${someTeamKey}:`, err);
    }
  }
}

async function fetchAndSaveAllTeamsFixtures(someLeagueId) {
  await fetchAllTeamsFixturesSequentially(someLeagueId);
}

// Next Fixtures

function fetchNextFixtures(leagueId) {
  fetch(
    `https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=2025&next=7`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let fixturesAray = data.response;
      fixturesAray.map((fixture) => {
        // Create row with teams
        let nextFixtureRow = document.createElement("next-fixture-row");
        nextFixtureRow.classList.add("next-fixture-row");
        nextFixtureRow.setAttribute("home-team-name", fixture.teams.home.name);
        nextFixtureRow.setAttribute("away-team-name", fixture.teams.away.name);

        let fixtureId = fixture.fixture.id;

        fetch(
          "https://v3.football.api-sports.io/predictions?fixture=" + fixtureId,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
            },
          }
        )
          .then((response) => response.json())
          .then((predictions) => {
            nextFixtureRow.setAttribute(
              "home-win-probability",
              predictions.response[0].predictions.percent.home
            );
            nextFixtureRow.setAttribute(
              "draw-probability",
              predictions.response[0].predictions.percent.draw
            );

            nextFixtureRow.setAttribute(
              "away-win-probability",
              predictions.response[0].predictions.percent.away
            );

            nextFixturesContainer.appendChild(nextFixtureRow);
          });
      });
    });
}

function fetchAllTeamsOfLeague(leagueId) {
  fetch(
    `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2025`,
    {
      headers,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const allteams = data.response;
      console.log("allTeams", allteams);
    });
} */
