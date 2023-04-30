export function page () {
    const container = document.createElement('div')
    container.classList.add ('search-container')
    container.innerHTML = `
        <h1>SearchPage</h1>
    `


    return container
}