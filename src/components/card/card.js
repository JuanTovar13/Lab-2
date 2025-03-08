// Definir el componente <card>
class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="card">
                <h2>Card Title</h2>
                <p>This is a sample card content.</p>
            </div>
        `;
    }
}

// Registrar el componente <card>
customElements.define('card', Card);