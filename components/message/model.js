const mongose = require("mongoose");

const Schema = mongose.Schema;

const mySchema = new Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const model = mongose.model("Message", mySchema);
module.exports = model;