const fs = require('fs')

/*
    fs.writeFile
    fs.readFile
    fs.writeFileSync
    fs.readFileSync
    fs.ReadStream
    fs.WriteStream

    JWT
    JSON Web Token

    send username + password to server 
    ...
    they matched, so send back a JWT, which is stored in a cookie

*/

fs.writeFileSync('./abc.txt', 'hello')

let myText = fs.readFileSync('./abc.txt', {encoding: 'utf-8'})
console.log(myText)

let data = {
    username: 'doug',
    password: '12345'
}

fetch("", {
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "apikey": ":132j4h5jkn"
    }
})
