class VideoLoader extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.fonte = '';
    }

    static get observedAttributes() {
        return ['fonte']
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
                video{}
            `
            return css
    }
    component(){
        const videoLoader = document.createElement('video');
        videoLoader.src = this.fonte
        videoLoader.controls = true;
        videoLoader.muted = true;
        return videoLoader;
    }
        

    }

customElements.define('video-loader', VideoLoader);
