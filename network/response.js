const responseMessages = require('./responseMessages')

exports.success = (req, res, message, status)=>{
   res.status(status || 200).send({
         error :"",
         body: message//, responseMessages(status)
   });
}

exports.error = (req, res, message, status, details)=>{
    //En details vienen los detalles del error y se imprimen acá para no darle al usuario información privada.
    console.error("[Response error] " + details  );
    res.status(status || 500).send({
        error : responseMessages(status),
        body: ""
    })
}