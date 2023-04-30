export function page () {
    const container = document.createElement('div');
    container.innerHTML = `
        <phrase-content 
            text='Why not look on Pixabay?'>
        </phrase-content>
        <search-box
            placeholder="Search">
         </search-box>`

    return container
}