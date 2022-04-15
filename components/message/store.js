const db = require("mongoose")
const Model = require("./model");
//mongodb+srv://<username>:<password>@cluster0.rip2w.mongodb.net/test

db.Promise = global.Promise;
db.connect("mongodb+srv://julidb:julidb@cluster0.rip2w.mongodb.net/telefake", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

console.log("[db] Connected successfully to server");

const addMessage = (message) => {
	const newMessage = new Model(message);
	newMessage.save();
};

const getMessages = async () => {
	//Let find parameter in blank, so it will return all the messages.
	return await Model.find()
};

module.exports = {
	add: addMessage,
	list: getMessages
};
