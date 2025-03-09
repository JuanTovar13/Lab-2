class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
                        <style>

                header {
                    padding: 10px;
                    text-align: left;
                }

                button {
                    background-color:#0B0A16; 
                    color:rgb(188, 188, 199);
                    border: none;
                    padding: 10px 15px;
                    margin: 5px;
                    border-radius: 20px; 
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: bold;
                    
                }

                
                #allCategories {
                    border:0.5px solid rgb(188, 188, 199);
                    background-color:#0B0A16;
                }

                button:hover {
                    background-color: #1A1926;
                }
            </style>
            <header>
                <button id="allCategories">All categories</button>
                <button id ="news">Company</button>
                <button id="product">Product</button>
                <button id="design">Design</button>
                <button id="engineering">Engineering</button>
            </header>
        `;
        this.shadowRoot.querySelector('#allCategories').onclick = () => console.log('All categories clicked');
            this.shadowRoot.querySelector('#news').onclick = () => console.log('Company clicked');
            this.shadowRoot.querySelector('#product').onclick = () => console.log('Product clicked');
            this.shadowRoot.querySelector('#design').onclick = () => console.log('Design clicked');
            this.shadowRoot.querySelector('#engineering').onclick = () => console.log('Engineering clicked');
        
    }
}

customElements.define('header-component', HeaderComponent);

export default HeaderComponent;

