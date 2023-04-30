'use stricts'

class searchBox extends HTMLElement {
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
            .search-container {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 40px;
            }
            
            .search-icon {
                display: block;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                transform: rotate(45deg);
                cursor: pointer;
            }
            .search-icon::before {
                content: '';
                position: absolute;
                width: 25%;
                height: 25%;
                border-radius: 50%;
                border: 2px solid #818181;
                transform: translate(-2px);
            }
            
            .search-icon::after {
                content: '';
                position: absolute;
                width: 20%;
                height: 2px;
                background-color: #818181;
                border-radius: 0 2px 2px 0;
                transform: translatex(110%);
            }
            
            .search-input {
                font-family: Poppins, sans-serif;
                border: none;
                outline: none;
                height: 100%;
                font-size: 1rem;
                background: #FDFDFD;
                border: 1px solid #EDEEF0;
                box-shadow: 0px 2px 20px rgba(18, 27, 33, 0.1);
                border-radius: 56px;
                color: #000;
            }
            input{
                color: black;
            }
            `
            return css
    }
    component(){
        const search = document.createElement('div')
        search.classList.add('search-container');

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-magnifying-glass');
        icon.for = 'serch-input';

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
            icon, input
        )
        return search;
    }
        

    }

customElements.define('search-box', searchBox);



// `<form action="/action_page.php">
//             <input type="text" placeholder="Search.." name="search">
//             <button type="submit"><i class="fa fa-search"></i></button>
//         </form>`