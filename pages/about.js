import { DESCRIPTIONPIXABAY, CONTACTS } from '../public/texts.js'

export function page () {

    const body = document.querySelector('body');  
    body.style = 'background-color: #1D1D1F;'
    const container = document.createElement('div')
    container.classList.add (
        'about-container',
        'container'
    )

    const aboutInfos = document.createElement('div');
    aboutInfos.classList.add('about-infos');
    aboutInfos.innerHTML = `
        <phrase-content
            text="${DESCRIPTIONPIXABAY}"
            tag="p"
            fontsize="16px"
            textalign='center'>
        </phrase-content>
        <ul>
            <li>
                <phrase-content
                    text="Adress:"
                    tag="p"
                    fontsize="10px"
                    textalign='center'
                    lineheight='0'>
                </phrase-content>
                <phrase-content
                    text="${CONTACTS.adress}"
                    tag="p"
                    fontsize="10px"
                    textalign='center'
                    lineheight='0'>
                </phrase-content>
            </li>
            <li>
                <phrase-content
                    text="Telefone:"
                    tag="p"
                    fontsize="10px"
                    textalign='center'
                    lineheight='0'>
                </phrase-content>
                <phrase-content
                    text="${CONTACTS.telefone}"
                    tag="p"
                    fontsize="10px"
                    textalign='center'
                    lineheight='0'>
                </phrase-content>
            </li>
            <li>
                <phrase-content
                    text="Endereço de Email:"
                    tag="p"
                    fontsize="10px"
                    textalign='center'
                    lineheight='0'>
                </phrase-content>
                <phrase-content
                    text="${CONTACTS.email}"
                    tag="p"
                    fontsize="10px"
                    textalign='center'
                    lineheight='0'>
                </phrase-content>
            </li>
    `

    container.append(aboutInfos)

    return container

}