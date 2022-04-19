const mongose = require("mongoose");

const Schema = mongose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const model = mongose.model("User", mySchema);
module.exports = model;