class SearchComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                input {
                    padding: 10px;
                    width: 200px;
                    border-radius: 5px;
                    border:0.5px solid rgb(188, 188, 199);
                    background-color:#0B0A16;
                }
                button {
                    padding: 9px;
                    border:0.5px solid rgb(188, 188, 199);
                    background-color:#0B0A16;
                    color: white;
                    
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #01000a;
                    border:0.5px solid rgb(251, 251, 255);
                }
                input:hover {
                    border:0.5px solid rgb(251, 251, 255);
                }
                .search-container input {
                    color: white;
                    font-weight: bold;
                    
                }
            </style>
            <div class="search-container">
                <input type="text" placeholder="🔍Search...">
                <button id="searchBtn">📶</button>
            </div>
        `;
        this.shadowRoot.querySelector('button').onclick = () => console.log('Search clicked');
    }
}

export default customElements.define('search-component', SearchComponent);