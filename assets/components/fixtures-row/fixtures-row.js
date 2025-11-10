class fixturesRow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const homeTeamName = this.getAttribute("home-team-name");
    const awayTeamName = this.getAttribute("away-team-name");
    const homeTeamGoals = this.getAttribute("home-team-goals");
    const awayTeamGoals = this.getAttribute("away-team-goals");

    let homeTeamRenderName;
    if (homeTeamName === "Manchester United") {
      homeTeamRenderName = "M. United";
    } else if (homeTeamName === "Manchester City") {
      homeTeamRenderName = "M. City";
    } else if (homeTeamName === "Aston Villa") {
      homeTeamRenderName = "Ast. Villa";
    } else if (homeTeamName === "West Ham") {
      homeTeamRenderName = "W. Ham";
    } else if (homeTeamName === "Crystal Palace") {
      homeTeamRenderName = "Cr. Palace";
    } else if (homeTeamName === "Atletico Madrid") {
      homeTeamRenderName = "At. Madrid";
    } else if (homeTeamName === "Celta Vigo") {
      homeTeamRenderName = "C. Vigo";
    } else if (homeTeamName === "Real Madrid") {
      homeTeamRenderName = "R. Madrid";
    } else if (homeTeamName === "Real Betis") {
      homeTeamRenderName = "R. Betis";
    } else if (homeTeamName === "Real Sociedad") {
      homeTeamRenderName = "R. Sociedad";
    } else if (homeTeamName === "Rayo Vallecano") {
      homeTeamRenderName = "R. Vallecano";
    } else {
      homeTeamRenderName = homeTeamName.split(" ")[0];
    }

    let awayTeamRenderName;
    if (awayTeamName === "Manchester United") {
      awayTeamRenderName = "M. United";
    } else if (awayTeamName === "Manchester City") {
      awayTeamRenderName = "M. City";
    } else if (awayTeamName === "Aston Villa") {
      awayTeamRenderName = "Ast. Villa";
    } else if (awayTeamName === "West Ham") {
      awayTeamRenderName = "W. Ham";
    } else if (awayTeamName === "Crystal Palace") {
      awayTeamRenderName = "Cr. Palace";
    } else if (awayTeamName === "Atletico Madrid") {
      awayTeamRenderName = "At. Madrid";
    } else if (awayTeamName === "Celta Vigo") {
      awayTeamRenderName = "C. Vigo";
    } else if (awayTeamName === "Real Madrid") {
      awayTeamRenderName = "R. Madrid";
    } else if (awayTeamName === "Real Betis") {
      awayTeamRenderName = "R. Betis";
    } else if (awayTeamName === "Real Sociedad") {
      awayTeamRenderName = "R. Sociedad";
    } else if (awayTeamName === "Rayo Vallecano") {
      awayTeamRenderName = "R. Vallecano";
    } else {
      awayTeamRenderName = awayTeamName.split(" ")[0];
    }

    this.innerHTML = `
     <div class="row names-goals-row">
            <div class="home-name-goals-col">
                <span class="fixtures-row-home-name">${homeTeamRenderName}</span>
                <span class="fixtures-row-home-goals">${homeTeamGoals}</span>
            </div>
            <div class="away-name-goals-col">
              <span class="fixtures-row-away-goals">${awayTeamGoals}</span>
              <span class="fixtures-row-away-name">${awayTeamRenderName}</span>
            </div>
        </div>
    `;
  }
}

customElements.define("fixtures-row", fixturesRow);
