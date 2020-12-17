//Middleware de autenticacion;
const tokenReturn = require('../services/token');

module.exports = {

    // Requerimiento
    verificarAdministrador: async(req, res, next) =>{
        console.log(req.headers.token);
        if(!req.headers.token){
            return res.status(404).send({
                message: 'ADMIN TOKEN NOT FOUND!'
            })
        }else{
            const response = await tokenReturn.decode(req.headers.token);
            if (response.rol === "Administrador"){
                next();
            }else
                return res.status(403).send({
                    message: 'ADMIN NOT AUTHORIZED'
                })
        }
    },

    // Requerimiento
    verificarVendedor: async(req, res, next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'SELLER TOKEN NOT FOUND!'
            })
        }else{
            const response = await tokenReturn.decode(req.headers.token);
            if (response.rol === "Administrador" || response.rol === "Vendedor"){
                next();
            }else
                return res.status(403).send({
                    message: 'SELLER NOT AUTHORIZED'
                })
        }
    },

    // Requerimiento
    verifyAlmacenero: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'STORER TOKEN NOT FOUND'
            });
        }
        const response = await tokenReturn.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'STORER NOT AUTHORIZED'
            });
        }
    },

}