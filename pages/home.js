import { fetchPhotosByOrder } from "../api/config.js"

export async function page () {


    const body = document.querySelector('body')
    body.style = 'background-color: #52B312'
    const container = document.createElement('div')
    container.classList.add (
        'home-container',
        'container'
    )
    const photos = await fetchPhotosByOrder('latest');
    const {hits} = photos;
    
    const listOfPhotos = document.createElement('ul');
    listOfPhotos.classList.add('photos-list');

    const photoCards = hits.map(({webformatURL,pageURL,userImageURL,user,largeImageURL}) =>{
        let li = document.createElement('li');
        li.innerHTML = `
        <a href='${pageURL}'>
            <img src='${webformatURL}'/>
        </a>
        <div class='photo-info'>
          <div class='photo-categories'>
            <div class='author-container'>
                <img src='${userImageURL}'/>
                <h2>${user}</h2>
            </div>
            <button class='download-btn' onclick='${largeImageURL}'>
                <image src='./public/download-button32.png'/>
            </button>
          </div>
          <div class='photo-options'>
            
          </div>
        </div>
        
        `
        return li;
    })
    
    listOfPhotos.append(...photoCards)
    container.append(listOfPhotos);
    return container

}