// Logic for fetching fixtures and displaying them within the fixturesContainer

let fixturesAray; // Not sure if necessary

const nextFixturesContainer = document.querySelector(
  ".next-fixtures-container"
);

fetch(
  "https://v3.football.api-sports.io/fixtures?league=140&season=2025&next=7",
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
