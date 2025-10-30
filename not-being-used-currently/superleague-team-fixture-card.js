// Currently not being used at all
// Feel free to delete it

class fixtureCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const homeTeamName = this.getAttribute("home-team-name");
    const awayTeamName = this.getAttribute("away-team-name");
    const homeTeamGoals = this.getAttribute("home-team-goals");
    const awayTeamGoals = this.getAttribute("away-team-goals");
    const ballPossessionHomeValue = this.getAttribute(
      "ball-possession-home-value"
    );
    const ballPossessionAwayValue = this.getAttribute(
      "ball-possession-away-value"
    );
    const shotsOnTargetHomeValue = this.getAttribute(
      "shots-on-target-home-value"
    );
    const shotsOnTargetAwayValue = this.getAttribute(
      "shots-on-target-away-value"
    );
    const shotsOffTargetHomeValue = this.getAttribute(
      "shots-off-target-home-value"
    );
    const shotsOffTargetAwayValue = this.getAttribute(
      "shots-off-target-away-value"
    );

    this.innerHTML = `  <div class="team-goals">
            <div class="home-goals">
                <h4 class="home-team-name">${homeTeamName}</h4>
                <h4 class="home-team-goals">${homeTeamGoals}</h4>
            </div>

            <div class="away-goals">
                <h4 class="away-team-name">${awayTeamName}</h4>
                <h4 class="away-team-goals">${awayTeamGoals}</h4>
            </div>

        </div>
        <!------------------------------------------------------------------------------------->
        <!------------------------------------------------------------------------------------->
        <div class="ball-possession">
            <div class="ball-possession-home-div">
                <h4>Ball Possession</h4>
                <h4 class="ball-possession-home-value">${ballPossessionHomeValue}</h4>
            </div>
            <div class="ball-possession-away-div">
                <h4>Ball Possession</h4>
                <h4 class="ball-possession-away-value">${ballPossessionAwayValue}</h4>
            </div>
        </div>
        <!------------------------------------------------------------------------------------->
        <!------------------------------------------------------------------------------------->
        <div class="shots-on-target-container">
            <div class="shots-on-target-home-div">
                <h4 class="shots-on-target-home">Shots On Target</h4>
                <h4 class="shots-on-target-home-value">${shotsOnTargetHomeValue}</h4>
            </div>
            <div class="shots-on-target-away-div">
                <h4>Shots On Target</h4>
                <h4 class="shots-on-target-away-value">${shotsOnTargetAwayValue}</h4>
            </div>
        </div>
        <!------------------------------------------------------------------------------------->
        <!------------------------------------------------------------------------------------->
        <div class="shots-off-target-container">
            <div class="shots-off-target-home-div">
                <h4 class="shots-off-target-home">Shots Off Target</h4>
                <h4 class="shots-off-target-home-value">${shotsOffTargetHomeValue}</h4>
            </div>
            <div class="shots-off-target-away-div">
                <h4>Shots Off Target</h4>
                <h4 class="shots-off-target-away-value">${shotsOffTargetAwayValue}</h4>
            </div>
        </div>
`;
  }
}

customElements.define("fixture-card", fixtureCard);
