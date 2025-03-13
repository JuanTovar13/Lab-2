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
                .post-card {
                    background:rgb(106, 103, 103);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .post-card img {
                    width: 100%;
                    max-height: 200px;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .post-card h2 {
                    margin: 10px 0;
                    font-size: 20px;
                }
                .post-card p {
                    font-size: 14px;
                    color: #ccc;
                }
                .post-card .meta {
                    font-size: 12px;
                    color: #888;
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
