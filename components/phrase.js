'use stricts'

class phrase extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.text = 'Defina uma frase para usar o componente'
    }

    static get observedAttributes() {
        return ['text']
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
                .phrase{
                    background-color: #fff;
                }
            `
            return css
    }
    component(){
        const phrase = document.createElement('h1')
        phrase.classList.add('phrase');
        phrase.textContent = this.text;
        return phrase
    }
        

    }

customElements.define('phrase-content', phrase);