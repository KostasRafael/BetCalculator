async function fetchAndSaveOneTeamsTenFixtures(team) {
  const nameOfCurrentTeam = team.name;
  const idOfCurrentTeam = team.id;
  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
  };
  const url = `https://v3.football.api-sports.io/fixtures?team=${idOfCurrentTeam}&league=140&season=2025&last=10`;
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${team.name} failed: ${response.status}`);
  const data = await response.json();
  if (team.name === "elche") {
    elcheFixtures = data.response;
  } else if (team.name === "barcelona") {
    barcelonaFixtures = data.response;
  } else if (team.name === "atleticomadrid") {
    atleticomadridFixtures = data.response;
  } else if (team.name === "atleticclub") {
    athleticclubFixtures = data.response;
  } else if (team.name === "valencia") {
    valenciaFixtures = data.response;
  } else if (team.name === "villarreal") {
    villarrealFixtures = data.response;
  } else if (team.name === "sevilla") {
    sevillaFixtures = data.response;
  } else if (team.name === "celtavigo") {
    celtavigoFixtures = data.response;
  } else if (team.name === "levante") {
    levanteFixtures = data.response;
  } else if (team.name === "espanyol") {
    espanyolFixtures = data.response;
  } else if (team.name === "realmadrid") {
    realmadridFixtures = data.response;
  } else if (team.name === "alaves") {
    alavesFixtures = data.response;
  } else if (team.name === "realbetis") {
    realbetisFixtures = data.response;
  } else if (team.name === "getafe") {
    getafeFixtures = data.response;
  } else if (team.name === "girona") {
    gironaFixtures = data.response;
  } else if (team.name === "realsociedad") {
    realsociedadFixtures = data.response;
  } else if (team.name === "oviedo") {
    oviedoFixtures = data.response;
  } else if (team.name === "osasuna") {
    osasunaFixtures = data.response;
  } else if (team.name === "rayovallecano") {
    rayovallecanoFixtures = data.response;
  } else if (team.name === "mallorca") {
    mallorcaFixtures = data.response;
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
  console.log(realmadridFixtures);
  console.log(barcelonaFixtures);
}
