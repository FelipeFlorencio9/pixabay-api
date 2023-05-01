export function page () {
    
    const container = document.createElement('div')
    container.classList.add ('search-container')
    
    const teste = document.createElement('p')
    teste.textContent = 'testando'

    container.append(teste)
    return container
}