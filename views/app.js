const express = require ("express")
const app = express()

app.listen (3000,() => {
    console.log ("escuchando en el servidor 3000")
})

app.get ("/",(req,res)  => {
    res.sendFile(__dirname + "nombre del archivo de la pagina del html")
})

app.use (express.static("public"))