

import HeaderComponent from './components/header/header.js';
import SearchComponent from './components/search/search.js';
import CardCustom from './components/card/card.js';
import ListCardsComponent from './components/card/ListCardsComponent.js';



console.log("Custom element defined");
customElements.define('header-component', HeaderComponent);
customElements.define('search-component', SearchComponent);

customElements.define('card-list', ListCardsComponent);
customElements.define('custom-card', CardCustom);


