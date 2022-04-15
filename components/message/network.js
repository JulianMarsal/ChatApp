const express = require('express');
const app = express();
const response = require('../../network/response');
const controller = require('./controller');

app.get('/', (req, res) => {
	controller.getMessages()
    .then((messageList)=>{
		console.log(messageList)
        response.success(req, res, messageList, 200);
    })
	.catch(e => {
		response.error(req, res, 'Unexpected Error', 500, e);
	})
});
app.post('/', (req, res) => {
	controller
		.addMessage(req.body.user, req.body.message)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201);
		})
		.catch((e) => {
			response.error(req, res, 'Datos invalidos', 400, 'Error en el controlador');
		});
});

app.delete('/', (req, res) => {
	console.log(req.query);
	console.log(req.body);

	res.send(`Mensaje ${req.body} Eliminado`);
});

module.exports = app;
