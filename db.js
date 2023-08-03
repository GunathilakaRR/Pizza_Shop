const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://rusiru:1234@clustertest.xe6lhht.mongodb.net/pizza_shop'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('connection succesfull hurray');
})

db.on('error', ()=>{
    console.log("failed");
})

module.exports = mongoose