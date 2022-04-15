const addMessage = (user, message)=>{
    return new Promise((resolve, reyect)=>{
    if (!user || !message){
        console.error("[messageController] Falta usuario o mensaje");
        return reyect("Datos incorrectos, usuario y mensaje son requeridos");
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        console.log(fullMessage);
        resolve(fullMessage);
    });
    }

module.exports = {
    addMessage,
};