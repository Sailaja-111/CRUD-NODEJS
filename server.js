//import modules express body-parser cors
let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = process.env.PORT || 8080
//import fetch insert update delete modules
let fetch = require('./Fetch/fetch')
let insert = require('./Insert/insert')
let update = require('./Update/update')
let remov = require('./Delete/delete')
//use above modules
app.use("/fetch", fetch)
app.use("/insert", insert)
app.use("/update", update)
app.use("/delete", remov)
//assign port no
app.listen(port, () => {
    console.log("Server listening port no:- ", port)
})
/*
    >node server
    Test following URLs with postman
    http://localhost:8080/fetch     (get)
    http://localhost:8080/insert    (post)
    http://localhost:8080/update    (put)
    http://localhost:8080/delete    (delete)
    body -> raw -> json
*/
