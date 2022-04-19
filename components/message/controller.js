const store = require('./store.js');

const addMessage = (chat, user, message, file) => {
	return new Promise((resolve, reyect) => {
		if (!user || !message || !chat) {
			console.error('[messageController] Falta usuario o mensaje');
			return reyect('Datos incorrectos, usuario y mensaje son requeridos');
		}

		let fileUrl = ""
		if (file){
			fileUrl = 'http://localhost:3000/app/files/' + file.originalname;
		}
		const fullMessage = {
			chat: chat, 
			user: user,
			message: message,
			date: new Date(),
			file: fileUrl,
		};
		store.add(fullMessage);
		resolve(fullMessage);
	});
};

const getMessages = (filterUser) => {
	return new Promise((resolve, reyect) => {
		resolve(store.list(filterUser));
	});
};

const updateMessage =(id, message) => {
	return new Promise(async (resolve, reject) => {
		if (id && message) {
            try {
                const data = await store.updateText(id, message);
                resolve(data);
            } catch (error) {
                reject(new Error(error));
            }
        }else {
            reject(new Error('Missing params'));
        }
    });
};

const deleteMessage = async (messageId) => {
	return new Promise (async (resolve, reject) =>{
		if (!messageId) {
			reject("Missing id")
			return false
		}
		store.deleteText(messageId)
        .then((data) => {
            if (!data) {
                reject('Message not found')
            }
            resolve();
        })
		.catch((error) => {
            reject(error);
        });
    });
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage,
};
