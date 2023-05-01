'use stricts'

class PhotosList extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.text = 'Defina uma frase para usar o componente'
        this.photos = [];
    }

    static get observedAttributes() {
        return ['text','photos']
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
                
            `
            return css
    }
    component(){
        const {hits} = this.photos;
        console.log(this.photos);
        console.log(hits);
        const items = hits.map(({webformatURL})=>{
            const li = document.createElement('li');
            li.innerHTML = `
              <img src=${webformatURL}/>
            `
            return li
        })
    
        const list = document.createElement('ul');
        list.append(...items);
        return list;
    }
        

    }

customElements.define('photos-list', PhotosList);