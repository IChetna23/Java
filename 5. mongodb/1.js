//begin mongodb 
// mongod - proccess handle db
// momgosh - connect to proccess // mogo compass
// use mongoose to connect mongodb in nodejs

// db - test default db
// use dbnew - switch and make dbnew
// use test 
// show dbs - not show dbnew - add document - row 
// show collections - none 
// db.text - dbnew.text createdd
// db.text.insert({}) - empty row added
// show dbs - now shows 


// inserting data in mongodb

// use mydb1 
db.items.insertOne({name : "Samsung note 11", price: 30000, rating: 4.5, qty: 300, sold: 97})
db.items.insertMany([{name : "Samsung note 11", price: 30000, rating: 4.5, qty: 300, sold: 97},{name : "Motorola note 11", price: 22000, rating: 4, qty: 350, sold: 97}])
db.items.find() // show all in items
// show dbs // show all 
// show collections 
mongod + mongosh 
// not enforce schema - columns not fixed - sql me fixed columns
//items- table - collection
//row-document

// searching data

db.items.find({price:22000}) //{}- filter object used for comparision
db.items.find({price:{$gte: 22000}}) // greater than equal to
db.items.find({price:{$gt: 22000}}) // greater than 
// $lt - less than 
db.items.find({price:{$gt: 22000}, rating: {$gt: 3.5}}) // and
db.items.find({$or: [{price:{$gt: 22000}, rating: {$gt: 3.5}}]}) // or
db.items.find({price:{$gt: 22000}}, {price :1}) // only show price
db.items.find({price:{$gt: 22000}}, {price :1}, {rating: 1}) // show rating + price

// deleteing from mongodb

// use dummydb 
db.coll.insertOne({name: "chetna"})
// show dbs 
// use dummydb
// show collections
db.coll.find()
db.coll.deleteMany({name: "chetna"}) // delte all objects with name chetna
// use mydb1
db.items.deleteOne({price: 30000})
db.items.find() // delete the matched object or first one among matching filter objrct deleted 

//updating data in mongodb

//CRUD - create read update delete - minimal operations db should perform 
db.items.updateOne({name : "Samsung note 11"},{$set: {price : "2L"}}) // filter object , set 
//update first match
db.items.insertMany([{name : "Samsung note 11", price: 30000, rating: 4.5, qty: 300, sold: 97},{name : "Motorola note 11", price: 22000, rating: 4, qty: 350, sold: 97}])
db.items.updateMany({name : "Samsung note 11"},{$set: {price : "2L", rating: 5}}) // update all matching documents