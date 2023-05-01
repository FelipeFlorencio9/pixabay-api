export function page () {

    const container = document.createElement('div')
    container.classList.add (
        'about-container',
        'container'
    )

    const titulo = document.createElement('h1')
    titulo.textContent = 'About'

    container.append(titulo)

    return container

}