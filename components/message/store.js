const Model = require("./model");

const addMessage = (message) => {
	const newMessage = new Model(message);
	newMessage.save();
};

const getMessages = async (filterUser) => {
	//Let find parameter in blank, so it will return all the messages.
	let filter = {};
	if(filterUser !== null){
		filter = {user: filterUser};
	}
	return await Model.find(filter)
};

const updateText = async (id, message) => {
    const requestedMessage = await Model.findById(id)
    requestedMessage.message = message;
    const messageUpdated = await requestedMessage.save();
    return messageUpdated;
}

const existDB = async (id) => {
    const exist = await Model.exists({
        _id: id
    });
    return exist;
} 

const deleteMessage = async (messageId) => { 
	if (await existDB(messageId)) {
        return await Model.findByIdAndDelete(messageId)
    }
	return null;
}

module.exports = {
	add: addMessage,
	list: getMessages,
	updateText: updateText,
	deleteText: deleteMessage,

};
