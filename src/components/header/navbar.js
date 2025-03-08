const template = document.createElement('template');
template.innerHTML = `
            <style>
                nav {
                    background-color: #333;
                    color: white;
                    padding: 10px;
                    text-align: center;
                }
            </style>
            <nav>
                <a href="#">Home</a> 
                <a href="#">About</a> 
                <a href="#">Contact</a>
                
            </nav>
        `;
class Navbar extends HTMLElement {
    constructor() {
        super();
        const navShadow = this.attachShadow({ mode: 'open' });
        navShadow.append(template.content.cloneNode(true));
    }
}
customElements.define('navBar', Navbar);
export default Navbar;



