async function fetchAndSaveOneTeamsTenFixtures(team) {
  const nameOfCurrentTeam = team.name;
  const idOfCurrentTeam = team.id;
  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "94d01bff67718f85de3f0532069fbbf1",
  };
  const url = `https://v3.football.api-sports.io/fixtures?team=${idOfCurrentTeam}&league=39&season=2025&last=10`;
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${team.name} failed: ${response.status}`);
  const data = await response.json();
  if (team.name === "manunited") {
    manunitedFixtures = data.response;
  } else if (team.name === "newcastle") {
    newcastleFixtures = data.response;
  } else if (team.name === "bournemouth") {
    bournemouthFixtures = data.response;
  } else if (team.name === "fulham") {
    fulhamFixtures = data.response;
  } else if (team.name === "wolves") {
    wolvesFixtures = data.response;
  } else if (team.name === "liverpool") {
    liverpoolFixtures = data.response;
  } else if (team.name === "arsenal") {
    arsenalFixtures = data.response;
  } else if (team.name === "burnley") {
    burnleyFixtures = data.response;
  } else if (team.name === "everton") {
    evertonFixtures = data.response;
  } else if (team.name === "tottenham") {
    tottenhamFixtures = data.response;
  } else if (team.name === "westham") {
    westhamFixtures = data.response;
  } else if (team.name === "chelsea") {
    chelseaFixtures = data.response;
  } else if (team.name === "mancity") {
    mancityFixtures = data.response;
  } else if (team.name === "brighton") {
    brightonFixtures = data.response;
  } else if (team.name === "crystalpalace") {
    crystalpalaceFixtures = data.response;
  } else if (team.name === "brentford") {
    brentfordFixtures = data.response;
  } else if (team.name === "leedsunited") {
    leedsunitedFixtures = data.response;
  } else if (team.name === "nottmforest") {
    nottmforestFixtures = data.response;
  } else if (team.name === "astonvilla") {
    astonvillaFixtures = data.response;
  } else if (team.name === "sunderland") {
    sunderlandFixtures = data.response;
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
