class ListCardsComponent extends HTMLElement  {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        try {
            const response = await fetch('./src/components/card/card.json');
            const CardRen = await response.json();
            const cards = CardRen.cardJson;

            this.shadowRoot.innerHTML = `
            <style>
        .card-container {
            display: grid;
            grid-template-columns: repeat(2, 3fr); 
            gap: 15px; 
            width: 100%;
            max-width: 1200px; 
            
            padding: 20px;
            
        }
            .card:nth-child(3),
            .card:nth-child(6) {
    grid-column: span 2;
    
}

        
    </style>
            <div class="card-container">
                ${cards.map(card => `
                
                    <custom-card class="card${card.image ? '' : 'no-image'}" id="${card.id}" category="${card.category}" title="${card.title}" description="${card.description}" image="${card.image}" author="${card.author}" date="${card.date}"></custom-card>
                
                `).join('')}

            </div>
            `;
        } catch (error) {
            console.error(error);
        }
    }

}

export default ListCardsComponent;