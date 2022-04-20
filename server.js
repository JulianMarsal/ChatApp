const express = require("express");
const app = express();
const server = require('http').Server(app);


const db = require("./db")
const socket = require('./socket');
require("dotenv").config({ path: ".env" });
const router = require("./network/routes");

//Conection to database
db(process.env.DB_CONNECT);

//Codification
app.use(express.json());
app.use(express.urlencoded({extended : false}));


socket.connect(server);
app.use("/app", express.static("public"));

server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

//Load the routes
router(app);
