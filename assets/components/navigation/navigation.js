class navigationCustom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="nav-section">
        <div class="navigation-bar-container">
            <img src="./assets/images/image.png" alt="logo image" class="logo-image">
            <nav class="navigation-bar">
                <ul class="nav-menu">
                    <li><a href="./home.html">Home</a></li>
                </ul>
            </nav>
        </div>
    </section>
    `;
  }
}

customElements.define("navigation-custom", navigationCustom);
