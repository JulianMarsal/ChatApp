const express = require("express");
const router = require("./network/routes");
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use("/app", express.static("public"));
app.listen(3000)

router(app)

console.log("Server is running on port 3000");