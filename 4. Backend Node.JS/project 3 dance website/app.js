// first step - npm init - package.json
// npm i express
// npm i pug
// views folder - templates
// sttaticc - files

const express = require("express");
const path = require("path");
const app = express(); 
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost:27017/contactDance');
const port = 8000;

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const contact = mongoose.model('Contact', contactSchema);

// app.static
// EXPRESS SPECIFIC THINGS //
app.use('/static', express.static('static')); 
app.use(express.urlencoded()); // middleware collect url encoded forms' data
// Middleware to parse JSON and URL-encoded data
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

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
// body-parser install for post
app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved in the database");
    }).catch(() => {
        res.status(400).send("Item was not saved.");
    });
    // ress.status(200).render('contact.pug'); // 200-ok reneder bcs template used
});

// START THE SERVER //
app.listen(port, ()=>{
    console.log(`this is running on ${port} port.`)
})
