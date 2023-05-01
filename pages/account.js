export function page () {

    const container = document.createElement('div')
    container.classList.add (
        'account-container',
        'container'
    )

    const titulo = document.createElement('h1')
    titulo.textContent = 'Account'

    container.append(titulo)

    return container

}