class ProjectLink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: "open" });

        const mainContainer = document.createElement('div');
        mainContainer.innerHTML = this.hasAttribute("title") ? this.getAttribute("title") : "title";

        const img = document.createElement('img');
        

        this.shadowRoot.append(mainContainer);
    }
}

customElements.define('project-link', ProjectLink);