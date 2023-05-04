'use stricts'

class Phrase extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.text = 'Defina uma frase para usar o componente'
        this.tag = 'h1',
        this.fontsizerem = '1.75';
        this.textalign = 'center';
        this.lineheight = '3rem';
    }

    static get observedAttributes() {
        return ['text','tag','fontsizerem','textalign','lineheight']
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
                    font-size: ${this.fontsizerem}rem;
                    letter-spacing: -0.07em;
                    color: #FFFFFF;
                    text-align: ${this.textalign}
                }
                @media (min-width: 680px) {
                    .phrase {
                        font-size: ${this.fontsizerem * 1.4}rem;
                    }
                }
                @media (min-width: 1024px) {
                    .phrase {
                        font-size: ${this.fontsizerem * 2}rem;
                    }
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