const express = require("express");
const app = express();

const response = require("./network/response");

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/message", (req, res) => {
    
    res.header({"Custom-Header" : "Hola bb ;D"});
    res.send("Lista de mensajes")
    
})
app.post("/message", (req, res) => {
    if (req.query.error == "ok"){
        response.error(req, res, "Error insesperado", 500, "Es solo una simulación de errores");   
    }
    else{
        response.succes(req, res, "Mensaje enviado", 201); 
    }
})
app.delete("/message", (req, res) => {
    console.log(req.query)
    console.log(req.body)

    res.send(`Mensaje ${req.body} Eliminado`);
})
app.use("/app", express.static("public"));
app.listen(3000)

console.log("Server is running on port 3000");