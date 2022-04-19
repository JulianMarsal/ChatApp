const mongose = require("mongoose");

const Schema = mongose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    file:{
        type: String,
        //required: true
    }
});

const model = mongose.model("Message", mySchema);
module.exports = model;