const express = require('express');
const app = express();
const response = require('../../network/response');
const controller = require('./controller');


app.get('/', (req, res) => {
    const filterUsers = req.query.id || null;
    console.log("filterUsers: "+filterUsers)
    controller.getUsers(filterUsers)
    .then((fullUser) =>{
        response.success(req, res, fullUser, 200)
        //console.log(fullUser)
    })
    .catch((e)=>{
        console.log("hola")
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})


app.post('/', (req, res) => {
    controller.addUser(req.body.name)
    .then((fullUser)=>{
        response.success(req, res, "User created", 201)
    })
    .catch((error)=>{
        console.log("Usuario: "+ req.body.user);
        response.error(req, res, 'Internal Error', 500, error)
    })
})


module.exports = app;