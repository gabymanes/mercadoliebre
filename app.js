const express = require ("express")
const app = express()

app.listen (3000,() => {
    console.log ("escuchando en el servidor 3000")
})

app.get ("/",(req,res)  => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use (express.static("public"))


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});