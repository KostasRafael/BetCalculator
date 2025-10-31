class singleTeamContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const teamName = this.getAttribute("team-name");
    const teamLogo = this.getAttribute("team-logo");

    this.innerHTML = `
          <button class="team-logo-name-div" onclick="displayTeamFixtures(${teamName
            .replace(/\s+/g, "")
            .toLowerCase()}Fixtures)">
            <div class="logo-name">  
                <h4 class="team-name"> <img src="./assets/images/${teamLogo}" alt="" class="team-logo">  ${
      teamName.split(" ")[0]
    }</h4>
            </div>
            </button>
        `;
  }
}

// 14 functions

customElements.define("single-team-container", singleTeamContainer);
