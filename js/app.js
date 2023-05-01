'use strict'

import './router.js'
import {page} from '../pages/home.js' 


function eventSearch(){
    const test = document.querySelector('search-box')
        .shadow.childNodes[0].children[1].addEventListener("keypress", ({key,target})=>{
            if(key === "Enter"){
               console.log(target.value);
            }
    })
    document.querySelector('search-box')
        .shadowRoot.getElementById('button-search')
        .addEventListener('click', ()=> {
            console.log('teste');
     })
   
}
function loadHomePage(){
    const homePage =  page();
    const main = document.querySelector('#root')
    main.replaceChildren(homePage);   
}

loadHomePage()