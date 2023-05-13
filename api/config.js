const KEY = '35955461-d7b2825c44d6874be514ff4da';
const BASE_URL = 'https://pixabay.com/api'

const AUTHENTICATED = `${BASE_URL}?key=${KEY}`




export async function fetchPhotosByOrder(order){
    return await fetch(`${AUTHENTICATED}&order=${order}`)
        .then(response => response.json())
}
export async function fetchVideosByQuery(query){
    return await fetch(`${BASE_URL}/videos/?key=${KEY}&q=${query}`)
        .then(response => response.json())
}