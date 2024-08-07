// express - make custom backend easy - no ifelse no url passing
// make api - simplify webdevelopment 
// scalability - 200user extend to 2000
// open source free

const express = require("express");
const path = require('path');
const app = express();
const fs = require("fs");
const port = 80;

// EXPRESS SPECIFIC THINGS //
app.use('/static', express.static('static')); //app.use(express.static(path.join(__dirname, 'public'))); // localhost/static/index.js
app.use(express.urlencoded()); // middleware collect url encoded forms' data

// express - code .
// express - template engine easy manage code - variables respond html eg username - pug

// PUG SPECIFIC THINGS //
app.set('view engine', 'pug'); // set template engine as pug
app.set('views', path.join(__dirname, 'views')); // set pug files- view dir // templatess

// ENDPOINTS // 
app.get('/', (req, ress)=>{
    const con = 'hi mr param. let me introducce you to PUBG game.'
    const params = {'title': 'PUBG is best game.', content : con};
    ress.status(200).render('index.pug', params); // 200-ok reneder bcs template used
})
app.post('/', (req, ress)=>{
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;
    let OutputToWrite = `name of client is ${name}, ${age} years old, ${gender}, residing at ${address}. more about him: ${more}.`;
    fs.writeFileSync("output.txt", OutputToWrite)
    const params = {'message': 'your form has been submitted successfully.'};
    ress.status(200).render('index.pug', params); // 200-ok reneder bcs template used
})



// START THE SERVER //
app.listen(port, ()=>{
    console.log(`this is running on ${port} port.`)
})