'use stricts'

class Phrase extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.text = 'Defina uma frase para usar o componente'
        this.tag = 'h1',
        this.fontsize = '1.5rem';
        this.textalign = 'center';
        this.lineheight = '3rem';
    }

    static get observedAttributes() {
        return ['text','tag','fontsize','textalign','lineheight']
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
                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: ${this.fontsize};
                    line-height: ${this.lineheight};
                    letter-spacing: -0.07em;
                    color: #FFFFFF;
                    text-align: ${this.textalign}
                }
            `
            return css
    }
    component(){
        const phrase = document.createElement(this.tag)
        phrase.classList.add('phrase');
        phrase.textContent = this.text;
        return phrase
    }
        

    }

customElements.define('phrase-content', Phrase);