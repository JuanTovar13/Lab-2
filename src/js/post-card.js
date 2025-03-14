class PostCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'category', 'author', 'date', 'content', 'image'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                .post-card {
                    background: rgb(40, 40, 40);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    font-family: Arial, sans-serif;
                    text-align: left;
                    box-sizing: border-box;
                    height: auto;
                    margin: 10px;
                }

                .post-card img {
                    max-height: 150px;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .post-card h2 {
                    margin: 10px 0;
                    font-size: 18px;
                }

                .post-card p {
                    font-size: 14px;
                    color: #ccc;
                    margin: 10px 0;
                }

                .post-card .meta {
                    font-size: 12px;
                    color: #888;
                }

                #posts-container {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); 
                    gap: 20px;
                    padding: 20px;
                }


                @media (max-width: 768px) {
                    #posts-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="post-card">
                ${this.getAttribute('image') ? `<img src="${this.getAttribute('image')}" alt="Post Image">` : ''}
                <h2>${this.getAttribute('title') || 'No Title'}</h2>
                <p class="meta">
                    <strong>${this.getAttribute('category')}</strong> | 
                    ${this.getAttribute('author')} - 
                    ${this.getAttribute('date')}
                </p>
                <p>${this.getAttribute('content')}</p>
            </div>
        `;
    }
}

customElements.define('post-card', PostCard);
