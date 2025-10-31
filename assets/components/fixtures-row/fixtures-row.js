class fixturesRow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const homeTeamName = this.getAttribute("home-team-name");
    const awayTeamName = this.getAttribute("away-team-name");
    const homeTeamGoals = this.getAttribute("home-team-goals");
    const awayTeamGoals = this.getAttribute("away-team-goals");

    this.innerHTML = `
     <div class="row names-goals-row">
            <div class="home-name-goals-col">
                <h4>${homeTeamName.split(" ")[0]}</h4>
                <h4>${homeTeamGoals}</h4>
            </div>
            <div class="away-name-goals-col">
              <h4 class="away-goals">${awayTeamGoals}</h4>
              <h4 class="away-name">${awayTeamName.split(" ")[0]}</h4>
            </div>
        </div>
    `;
  }
}

customElements.define("fixtures-row", fixturesRow);
