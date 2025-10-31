async function fetchAndSaveOneTeamsTenFixtures(team) {
  const nameOfCurrentTeam = team.name;
  const idOfCurrentTeam = team.id;
  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
  };
  const url = `https://v3.football.api-sports.io/fixtures?team=${idOfCurrentTeam}&league=197&season=2025&last=10`;
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${team.name} failed: ${response.status}`);
  const data = await response.json();
  if (team.name === "olympiakos") {
    olympiakosFixtures = data.response;
  } else if (team.name === "aek") {
    aekFixtures = data.response;
  } else if (team.name === "panathinaikos") {
    panathinaikosFixtures = data.response;
  } else if (team.name === "larissa") {
    larissaFixtures = data.response;
  } else if (team.name === "paok") {
    paokFixtures = data.response;
  } else if (team.name === "asteras") {
    asterasFixtures = data.response;
  } else if (team.name === "aris") {
    arisFixtures = data.response;
  } else if (team.name === "ofi") {
    ofiFixtures = data.response;
  } else if (team.name === "levadiakos") {
    levadiakosFixtures = data.response;
  } else if (team.name === "panseraikos") {
    panseraikosFixtures = data.response;
  } else if (team.name === "kifisia") {
    kifisiaFixtures = data.response;
  } else if (team.name === "atromitos") {
    atromitosFixtures = data.response;
  } else if (team.name === "panetolikos") {
    panetolikosFixtures = data.response;
  } else if (team.name === "volos") {
    volosFixtures = data.response;
  } else {
    console.log("No corresponding variable found");
  }
}

async function fetchAllTeamsSequentially() {
  for (const team of allTeams) {
    try {
      await fetchAndSaveOneTeamsTenFixtures(team);
      console.log("fetched team!");
    } catch (err) {
      console.error(`Error fetching ${team.name}:`, err);
    }
  }
}

async function fetchAndSaveAllTeamsFixtures() {
  await fetchAllTeamsSequentially();
}

function fetchAllTeamsOfLeague() {
  fetch("https://v3.football.api-sports.io/teams?league=78&season=2025", {
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      const allteams = data.response;
      console.log("allTeams", allteams);
    });
}
