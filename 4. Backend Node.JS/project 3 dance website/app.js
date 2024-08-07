// first step - npm init - package.json
// npm i express
// npm i pug
// views folder - templates
// sttaticc - files

const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// app.static
// EXPRESS SPECIFIC THINGS //
app.use('/static', express.static('static')); 
app.use(express.urlencoded()); // middleware collect url encoded forms' data

// express - code .
// express - template engine easy manage code - variables respond html eg username - pug

// PUG SPECIFIC THINGS //
app.set('view engine', 'pug'); // set template engine as pug
app.set('views', path.join(__dirname, 'views')); // set pug files- view dir // templatess

// ENDPOINTS // 
app.get('/', (req, ress)=>{
    const params = {};
    ress.status(200).render('home.pug', params); // 200-ok reneder bcs template used
})
app.get('/contact', (req, ress)=>{
    const params = {};
    ress.status(200).render('contact.pug', params); // 200-ok reneder bcs template used
})

// START THE SERVER //
app.listen(port, ()=>{
    console.log(`this is running on ${port} port.`)
})
