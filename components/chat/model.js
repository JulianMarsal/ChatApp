const mongose = require("mongoose");

const Schema = mongose.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    }],
});

const model = mongose.model("Chat", mySchema);
module.exports = model;