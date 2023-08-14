// fetch('https://bandcamp.com')
//     .then(res => res.text())
//     .then(text => {
//         console.log(text)
//     })

// async function getHTML() {
//     let res = await fetch('https://bandcamp.com')
//     let text = await res.text()
//     console.log(text)
// }

// getHTML()

// fetch('coordinates.com?city=berlin')
//     .then(res => res.json())
//     .then(data => {
//         fetch(`weather.com/?lat=${data.lat}&long=${data.log}`)
//             .then()
//     })

/*
    CommonJS modules
        const something = require('/something.js')

    ES modules
        import something from '/something.js'
*/
// node --watch server
// const express = require('express')