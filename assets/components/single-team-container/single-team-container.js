class singleTeamContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const teamId = this.getAttribute("team-id");
    const teamName = this.getAttribute("team-name");
    const teamLogo = this.getAttribute("team-logo");

    console.log("lo", teamLogo);

    this.innerHTML = `
          <button class="team-logo-name-div" onclick="displayTeamFixtures(${teamId})">
            <div class="logo-name">  
                <h4 class="team-name"> <img src="${teamLogo}" alt="" class="team-logo">  ${
      teamName.split(" ")[0]
    }</h4>
            </div>
            </button>
        `;
  }
}

// 14 functions

customElements.define("single-team-container", singleTeamContainer);
