const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    name : {type:String, require},
    varients : [],
    prices: [],
    category: {type: String, require},
    image: {type: String, require},
    description: {type: String, require}
}, {
    timestamps:true,
});

const Pizza = mongoose.model('pizza', pizzaSchema);

module.exports = Pizza;