class closeButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const clearFunction = this.getAttribute("clear");

    this.innerHTML = `
    <div class="close-button-container">
          <button class="close-button"><i class="fa-regular fa-circle-xmark close-icon"></i></button>
    </div>
        `;
  }
}

customElements.define("close-button", closeButton);
