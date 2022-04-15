const express = require("express");
const app = express();
const response = require("../../network/response");


app.get("/", (req, res) => {
    
    res.header({"Custom-Header" : "Hola bb ;D"});
    res.send("Lista de mensajes")
    
})
app.post("/", (req, res) => {
    if (req.query.error == "ok"){
        response.error(req, res, "Error insesperado", 500, "Es solo una simulación de errores");   
    }
    else{
        response.succes(req, res, "Mensaje enviado", 201); 
    }
})
app.delete("/", (req, res) => {
    console.log(req.query)
    console.log(req.body)

    res.send(`Mensaje ${req.body} Eliminado`);
})

module.exports = app;