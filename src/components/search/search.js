// Definir el componente <search>
class Search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                input {
                    padding: 10px;
                    width: 200px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                button {
                    padding: 10px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <input type="text" placeholder="Search...">
            <button>Search</button>
        `;
    }
}

// Registrar el componente <search>
customElements.define('search', Search);