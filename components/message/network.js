const express = require('express');
const app = express();
const response = require('../../network/response');
const controller = require('./controller');
const multer = require('multer');

const upload = multer({
	dest: 'public/files/',

})

app.get('/', (req, res) => {
	const filterMessages = req.query.user || null;
	controller.getMessages(filterMessages)
    .then((messageList)=>{
		console.log(messageList)
        response.success(req, res, messageList, 200);
    })
	.catch(e => {
		response.error(req, res, 'Unexpected Error', 500, e);
	})
});
app.post('/',upload.single("file"), (req, res) => {
	controller
		.addMessage(req.body.chat, req.body.user, req.body.message,req.file)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201);
		})
		.catch((e) => {
			response.error(req, res, 'Datos invalidos', 400, 'Error en el controlador');
		});
});

app.patch('/:id', (req, res) => {
	controller
		.updateMessage(req.params.id, req.body.message)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((e)=>{
			response.error(req, res, "Error interno", 500, e)
		})
})

app.delete('/:id', (req, res) => {
	controller.
	deleteMessage(req.params.id).
	then(()=>{
		response.success(req, res, `Mensaje ${req.params.id} eliminado con exito`, 200)
	})
	.catch((error)=>{
		response.error(req, res, "Error interno", 500, error)
	} )

});

module.exports = app;
