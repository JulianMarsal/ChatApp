const store = require('./store.js');

const addMessage = (user, message) => {
	return new Promise((resolve, reyect) => {
		if (!user || !message) {
			console.error('[messageController] Falta usuario o mensaje');
			return reyect('Datos incorrectos, usuario y mensaje son requeridos');
		}
		const fullMessage = {
			user: user,
			message: message,
			date: new Date()
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

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
};
