async function fetchAndSaveOneTeamsTenFixtures(team) {
  const nameOfCurrentTeam = team.name;
  const idOfCurrentTeam = team.id;
  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
  };
  const url = `https://v3.football.api-sports.io/fixtures?team=${idOfCurrentTeam}&league=78&season=2025&last=10`;
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${team.name} failed: ${response.status}`);
  const data = await response.json();
  console.log("data-fetched", data.response);
  if (team.name === "bayernmunchen") {
    bayernFixtures = data.response;
  } else if (team.name === "freiburg") {
    scfreiburgFixtures = data.response;
  } else if (team.name === "Wolfsburg") {
    vflwolfsburgFixtures = data.response;
  } else if (team.name === "werderbremen") {
    werderbremenFixtures = data.response;
  } else if (team.name === "borussiamönchengladbach") {
    borussiamonchengladbachFixtures = data.response;
  } else if (team.name === "mainz") {
    mainzFixtures = data.response;
  } else if (team.name === "borussiadortmund") {
    dortmundFixtures = data.response;
  } else if (team.name === "hoffenheim") {
    hoffenheimFixtures = data.response;
  } else if (team.name === "bayerleverkusen") {
    leverkusenFixtures === data.response;
  } else if (team.name === "eintrachtfrankfurt") {
    eintrachtfrankfurtFixtures = data.response;
  } else if (team.name === "augsburg") {
    augsburgFixtures = data.response;
  } else if (team.name === "stuttgart") {
    vfbstuttgartFixtures = data.response;
  } else if (team.name === "leipzig") {
    rbleipzigFixtures = data.response;
  } else if (team.name === "hamburgersv") {
    hamburgersvFixtures = data.response;
  } else if (team.name === "heidenheim") {
    heidenheimFixtures = data.response;
  } else if (team.name === "unionberlin") {
    unionberlinFixtures = data.response;
  } else if (team.name === "stpauli") {
    stpauliFixtures = data.response;
  } else if (team.name === "köln") {
    kolnFixtures = data.response;
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
