class Pagination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 20px 0;
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    list-style: none;
                    padding: 0;
                }

                .pagination li {
                    background: #444;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                }

                .pagination li:hover {
                    background: #007BFF;
                }
            </style>
            <ul class="pagination">
                ${Array.from({ length: 10 }, (_, i) => `<li>${i + 1}</li>`).join('')}
            </ul>
        `;
    }
}

customElements.define('pagination-component', Pagination);