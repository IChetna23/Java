// express - make custom backend easy - no ifelse no url passing
// make api - simplify webdevelopment 
// scalability - 200user extend to 2000
// open source free

const express = require("express");
const path = require('path');

const app = express();
const port = 80;

app.use('/static', express.static('static')); //app.use(express.static(path.join(__dirname, 'public'))); // localhost/static/index.js

// express - code .
// express - template engine easy manage code - variables respond html eg username - pug
// set template engine as pug
app.set('view engine', 'pug');

// set pug files- view dir // templatess

app.set('views', path.join(__dirname, 'views'));

// pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/",(req,res)=>{
    res.send(`This is my first express app.`)
})
app.get("/this",(req,res)=>{
    res.status(404).send(`This is not found.`)
})
app.post("/about",(req,res)=>{
    res.send(`This is about page of my first express app.`)
})


app.listen(port, ()=>{
    console.log(`this is running on ${port} port.`)
})