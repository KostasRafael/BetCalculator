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
              <div class="home-probability">
                <span class="next-fixture-row-span home-probability-label">Win</span>
                <span class="next-fixture-row-span home-number">${homeWinProbability}</span>
            </div>
             <div class="home-given-odds">
                <span class="next-fixture-row-span odds-given">Odds Given</span>
                <input class="odss-given-home-number"></input>
            </div>
              <div class="home-required-odds">
                <span class="next-fixture-row-span odss-required">Frequency Required</span>
                <h5 class="next-fixture-row-h5 odss-required-home-number"></h5>
            </div>
        </div>

        <div class="col-two">
            <h5 class="next-fixture-row-h5 draw-name">VS</h5>
            <div class="draw-probability">
                <span class="next-fixture-row-span draw-probability-label">Draw</span>
                <span class="next-fixture-row-span probabilities-draw-number">${drawProbability}</span>
            </div>
            <div class="draw-given-odds">
                <span class="next-fixture-row-span odds-given">Odds Given</span>
               <input class="odss-given-draw-number"></input>
            </div>
             <div class="draw-required-odds">
                <span class="next-fixture-row-span odss-required">Frequency Required</span>
                <span class="next-fixture-row-span odss-required-draw-number"></span>
            </div>
        </div>

         <div class="col-three">
              <h5 class="next-fixture-row-h5 away-name">${
                awayTeamName.split(" ")[0]
              }</}></h5>
              <div class="away-probability">
                  <span class="next-fixture-row-span away-probability-label">Win</span>
                  <span class="next-fixture-row-span probabilities-away-number">${awayWinProbability}</span>
              </div>
              <div class="away-given-odds">
                  <span class="next-fixture-row-span odds-given">Odds Given</span>
                  <input class="next-fixture-row-span odss-given-away-number"></input>
              </div>
              <div class="away-required-odds">
                <span class="next-fixture-row-span odss-required">Frequency Required</span>
                <span class="next-fixture-row-span odss-required-away-number"></span>
              </div>
         </div>
        


           
          
        </div>
        `;

    let homeOddsInputElement = this.querySelector(".odss-given-home-number");
    let drawOddsInputElement = this.querySelector(".odss-given-draw-number");
    let awayOddsInputElement = this.querySelector(".odss-given-away-number");

    let homeBreakEven = this.querySelector(".odss-required-home-number");
    let drawBreakEven = this.querySelector(".odss-required-draw-number");
    let awayBreakEven = this.querySelector(".odss-required-away-number");

    homeOddsInputElement.addEventListener("input", () => {
      const val = parseFloat(homeOddsInputElement.value);
      if (val) homeBreakEven.textContent = `${Math.round((1 / val) * 100)} %`;
      console.log("executed", val);
    });

    drawOddsInputElement.addEventListener("input", () => {
      const val = parseFloat(drawOddsInputElement.value);
      if (val) drawBreakEven.textContent = `${Math.round((1 / val) * 100)} %`;
    });

    awayOddsInputElement.addEventListener("input", () => {
      const val = parseFloat(awayOddsInputElement.value);
      if (val) awayBreakEven.textContent = `${Math.round((1 / val) * 100)} %`;
    });
  }
}

customElements.define("next-fixture-row", nextFixtureRow);
