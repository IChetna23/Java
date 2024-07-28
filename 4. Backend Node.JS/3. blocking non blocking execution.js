// synchronoous - blocking code
// - line by line execurte //sync

// asynchronous - non blocking code 
// - fire callbacks 

const fs = require("fs");
let text = fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(err, data);
});
console.log("message ffor you - ")