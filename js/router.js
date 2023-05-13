'use strict'

const routes = {
    '/'         : "/pages/home.js",
    '/account' :  "/pages/account.js",
    '/about'     : "/pages/about.js",
    '/videos'     : "/pages/videos.js",
}

const route = () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    handleLocation()
}

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routes[path]
    const {page} = await import (route)

    console.log (await page())

    document.getElementById('root').replaceChildren( await page() ) 
}

window.onpopstate = handleLocation
window.route = route

handleLocation()