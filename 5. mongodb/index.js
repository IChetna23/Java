// if node module deletes - again do npm install 
// dependencies are large in no bcs dep of dep exists. 
// callbacks execute first no order fixed 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb1');

main().catch(err => console.log(err));

async function main() {
    console.log("we are connected to mydb1 db.");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// define schema 
const mydbkitty = new mongoose.Schema({
    name: String
});

mydbkitty.methods.speak = function speak() {
    const greeting = 'Meow name is ' + this.name
    console.log(greeting);
};

// lock model - fixed complied schema - now no change can be there in schema
const Kitten = mongoose.model('Kitten', mydbkitty); // make collection kittens- plural 

// make object 
const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name);
// console.log(silence.speak());

// place in db - .save method 
silence.save();

//find
const kittens = Kitten.find({ name: "Silence" });
console.log(kittens);
 
// run no = save = show 
