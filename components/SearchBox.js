'use stricts'

class SearchBox extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.placeholder = 'PlaceHolder Default';
        this.boxValue = 'Search'
    }

    static get observedAttributes() {
        return ['placeholder']
    }


    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }
    connectedCallback(){
            this.shadow.appendChild(this.component())
            this.shadow.appendChild(this.styles())
    }
    styles(){
            const css = document.createElement('style');
            css.textContent = `

            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
            .search-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 32px;
                position: relative;
            }
            .search-input {
                font-family: Poppins, sans-serif;
                height: 100%;
                font-size: 24px;
                border: 1px solid #EDEEF0;
                box-shadow: 0px 2px 20px rgba(18, 27, 33, 0.1);
                border-radius: 56px;
                padding: 12px 12px 12px 44px;
                width: 76%;

            }
            a{
                position: absolute;
                top: 12%;
                left: 5%;
                outline: none;
                background: transparent;
                border: none;
            }
            
            
            `
            return css
    }
    component(){
        const search = document.createElement('div')
        search.classList.add('search-container');

        const label = document.createElement('a');
        label.for = 'searchinput';
        label.id = 'button-search';
        label.href = '/search'
        label.onclicl
        const icon = document.createElement('img');
        icon.src = '../public/search-32px.png';


        
        label.append(icon)
        
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('search-input');
        input.placeholder = this.placeholder;
        input.id = 'search-input';

        
        // input.addEventListener('keypress', ({key,target}) => {
        //     if(key === 'Enter'){
        //         window.localStorage.setItem('query', target.value);
        //     }
        // })
        
        search.append(
            label,input
        )
        return search;
    }
        

    }

customElements.define('search-box', SearchBox);



// `<form action="/action_page.php">
//             <input type="text" placeholder="Search.." name="search">
//             <button type="submit"><i class="fa fa-search"></i></button>
//         </form>`