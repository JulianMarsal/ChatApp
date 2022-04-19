const Model = require("./model");

async function existDB (name) {
    const exist = await Model.findOne({name: name});
    //console.log("Existe: "+ exist + ":)")
    if(exist !== null){
        return false;
    }
    
    return true;
    
} 

const addUser = (user) => {
    // console.log("ExistDB: "+ existDB)
    // if(existDB(user.name)){
    //     return Promise.reject("El nombre de usuario ya existe");
    // }
    const newUser = new Model(user);
    return newUser.save();
}

const getUsers = async (userId) =>{
    // if (!existDB(userId)){
    //     console.log("Usuario no existe")
    //     return new Promise.reject("User don´t exist");
    // }
    let user = {};
    console.log("User id:"+ userId)
    if(userId !== null){
        user = {_id: userId};
    }
    const foundUser = await Model.find(user);
    return foundUser;

    
}



module.exports = {
    list: getUsers,
    add: addUser,
    // updateUser: updateUser,
	// deleteUser: deleteUser,
}