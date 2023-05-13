import { fetchVideosByQuery } from "../api/config.js"


export async function page () {


    const body = document.querySelector('body')
    body.style = 'background-color: #52B312'
    const container = document.createElement('div')
    container.classList.add (
        'videos-container',
        'container'
    )

    const inputText = document.createElement('input-box')
    inputText.placeholder = 'Search for videos'
    inputText.id = 'input-videos';

    const videosList = document.createElement('ul');
    videosList.id = 'videos-list';
    const informations = document.createElement('div');
    informations.classList.add('videos__info');

    container.append(
        inputText,
        informations,
        videosList
        );
    

    inputText.shadowRoot.addEventListener('keypress', ({key,target}) => {
        if(key === 'Enter'){
           loadVideosByQuery(target.value);
        }
    })

    async function loadVideosByQuery(query){
        const results = await fetchVideosByQuery(query);
        const {total, totalHits, hits} = results;

        
        informations.innerHTML = `
            <phrase-content
                 text="Found videos: ${totalHits}"
                 tag="p"
                 fontsizerem='1'
               ></phrase-content>
               <phrase-content
                 text="All videos: ${total}"
                 tag="p"
                 fontsizerem='1'
               ></phrase-content>
        `
        
        videosList.innerHTML = `
            ${hits.map(({videos}) => {
                
                const {tiny} = videos;
                const {url,width,height} = tiny;
                return `<video width="${width}" height="${height}"
                src='${url + "&download=1"}' controls autoplay></video>`
            })}
        
        `
        
    }
    
    return container

}