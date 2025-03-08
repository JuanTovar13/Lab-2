// Definir el componente <card>
class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 20px;
                    margin: 10px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .card h2 {
                    margin-top: 0;
                }
            </style>
            <div class="card">
                <h2>Card Title</h2>
                <p>This is a sample card content.</p>
            </div>
        `;
    }
}

// Registrar el componente <card>
customElements.define('card', Card);