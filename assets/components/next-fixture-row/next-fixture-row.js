class nextFixtureRow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const homeTeamName = this.getAttribute("home-team-name");
    const awayTeamName = this.getAttribute("away-team-name");
    const homeWinProbability = this.getAttribute("home-win-probability");
    const awayWinProbability = this.getAttribute("away-win-probability");
    const drawProbability = this.getAttribute("draw-probability");

    this.innerHTML = `
        <div class="col-one">
            <h5 class="next-fixture-row-h5 home-name">${
              homeTeamName.split(" ")[0]
            }</h5>
              <div class="home-probability-container">
                <span class="next-fixture-row-span home-probability-label">Win</span>
                <span class="next-fixture-row-span probabilities-home-number">${homeWinProbability}</span>
            </div>
        </div>

        <div class="col-two">
            <h5 class="next-fixture-row-h5 draw-name">VS</h5>
            <div class="draw-probability-container">
                <span class="next-fixture-row-span draw-probability-label">Draw</span>
                <span class="next-fixture-row-span probabilities-draw-number">${drawProbability}</span>
            </div>
        </div>

         <div class="col-three">
              <h5 class="next-fixture-row-h5 away-name">${
                awayTeamName.split(" ")[0]
              }</}></h5>
              <div class="away-probability-container">
                  <span class="next-fixture-row-span away-probability-label">Win</span>
                  <span class="next-fixture-row-span probabilities-away-number">${awayWinProbability}</span>
              </div>
         </div>       
        </div>
        `;
  }
}

customElements.define("next-fixture-row", nextFixtureRow);
