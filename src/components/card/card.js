class CardCustom extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ['id','category', 'title', 'description', 'image','author','date'];
    }
    
    connectedCallback() {
        this.render();
    }

    render(){
        const imageUrl = this.getAttribute('image');
        const hasImage = imageUrl && imageUrl.trim() !== '';
        this.shadowRoot.innerHTML = `
            <style>

                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                        
                    justify-content: space-around;   
             }

            

            

            .card {
                background-color: #01000a;
                
                color: white;
                padding-bottom: 20px;
                border-radius: 10px;
                
                text-align: left;
                
                font-size: 14px;
                width: 100%;
                max-width: 100%;
                

            }
                                

                

                .card img {
                    width: 100%; 
                    
                    border-radius: 10px 10px 0 0;
                    display: ${hasImage ? 'block' : 'none'}; /* Ocultar si no hay imagen */
                }

                

                .text-card {
                    margin-top: -3px;
                    border:0.1px solid rgb(188, 188, 199);
                    border-radius: 0 0 10px 10px;
                }


                .category {
                    font-size: 10px;
                    
                    text-transform: uppercase;
                    color: #ffffff;
                    margin-left: 20px; 
                }

                .title {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 5px 0;
                    margin-left: 20px;
                    margin-right: 20px
                }

                .description {
                    font-size: 14px;
                    color:rgb(188, 188, 199); 
                    margin-left: 20px;
                    margin-right: 20px
                }

                .author-date {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                }

                .author  {
                    font-size: 12px;
                    color: #ffffff;;
                    margin-left: 20px;
                    
                }
                .date {
                    font-size: 12px;
                    color:  #ffffff;;
                    margin-left: 20px;
                    display: flex;
                    justify-content: end;
                    margin-right: 20px
                }

                
            </style>
        
            <div class="card">
            ${hasImage ? `<img src="${imageUrl}" alt="${this.getAttribute('title')}">` : ''}
                <div class="text-card">
                    <p class="category">${this.getAttribute('category')}</p>
                
                    <h3 class="title">${this.getAttribute('title')}</h3>
                    <p class="description">${this.getAttribute('description')}</p>
                    <div class="author-date">
                        <p class="author">${this.getAttribute('author')}</p>
                        <p class="date">${this.getAttribute('date')}</p>
                    </div>
                </div>
            </div>
        `;
    }
        
        
    
}

export default CardCustom;