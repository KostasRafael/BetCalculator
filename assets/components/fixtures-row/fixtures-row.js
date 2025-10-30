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
            <div class="name-goals-col">
                <h4>${homeTeamName}</h4>
                <h4>${homeTeamGoals}</h4>
            </div>
            <div class="name-goals-col">
                <h4>${awayTeamName}</h4>
                <h4>${awayTeamGoals}</h4>
            </div>
        </div>
    `;
  }
}

customElements.define("fixtures-row", fixturesRow);
