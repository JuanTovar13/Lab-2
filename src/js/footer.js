class Footer extends HTMLElement {
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
                    background: #2c2c2c;
                    color: white;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    text-align: center;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .newsletter {
                    margin-bottom: 20px;
                }

                .newsletter h2 {
                    font-size: 20px;
                    margin-bottom: 10px;
                }

                .newsletter p {
                    font-size: 14px;
                    color: #ccc;
                    margin-bottom: 10px;
                }

                .newsletter-form {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }

                .newsletter-form input {
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    font-size: 14px;
                    width: 200px;
                }

                .newsletter-form button {
                    padding: 10px 20px;
                    background: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                }

                .newsletter-form button:hover {
                    background: #0056b3;
                }

                .footer-links {
                    margin-top: 20px;
                    font-size: 14px;
                }

                .footer-links a {
                    color: #ccc;
                    text-decoration: none;
                    margin: 0 10px;
                }

                .footer-links a:hover {
                    color: white;
                }

                .footer-bottom {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #888;
                }
            </style>
            <div class="footer-content">
                <div class="newsletter">
                    <h2>Join the newsletter</h2>
                    <p>Subscribe for weekly updates. No spams ever!</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>

                <div class="footer-bottom">
                    <p>Copyright © Sitemark 2025</p>
                </div>
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);