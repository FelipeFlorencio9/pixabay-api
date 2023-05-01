const key = '35955461-d7b2825c44d6874be514ff4da';
const order = 'latest';
const url = `https://pixabay.com/api/?key=${key}&order=${order}`

export async function fetchPhotos(){
    return await fetch(url)
        .then(response => response.json())
        
}