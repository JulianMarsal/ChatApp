const express = require("express");
const app = express()

const db = require("./db")
require("dotenv").config({ path: ".env" });
const router = require("./network/routes");

//Conection to database
db(process.env.DB_CONNECT);

//Codification
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use("/app", express.static("public"));
app.listen(3000)

//Load the routes
router(app)

console.log("Server is running on port 3000");