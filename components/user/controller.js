const store = require('./store.js');

const addUser = (user) => {

        if (!user) {
            return Promise.reyect('Datos incorrectos, usuario requerido');  
		}
		const fullUser = {
			name: user,
			date: new Date()
		};
		return store.add(fullUser);
};

const getUsers = (id)=> {
    return new Promise((resolve,reject)=>{
        resolve(store.list(id)); 
    
    })
}

module.exports = {
    getUsers,
    addUser,
}