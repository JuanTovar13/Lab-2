class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                header { background: #333; color: white; padding: 1rem; text-align: center; }
            </style>
            <header>
                <h1>Blog</h1>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Noticias</a>
                </nav>
            </header>
        `;
    }
}
customElements.define("header-component", HeaderComponent);



