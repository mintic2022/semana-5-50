//Middleware de autenticacion;
const tokenReturn = require('../services/token');

module.exports = {

    // Requerimiento
    verificarAdministrador: async (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'TOKEN NOT FOUND!'
            })
        } else {

            next();
        }
    },

    // Requerimiento
    verificarVendedor: async (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'SELLER TOKEN NOT FOUND!'
            })
        } else {
            const response = await tokenReturn.decode(req.headers.authorization.split(' ')[1]);
            if (response.rol === "Administrador" || response.rol === "Vendedor") {
                next();
            } else
                return res.status(403).send({
                    message: 'SELLER NOT AUTHORIZED'
                })
        }
    },

    // Requerimiento
    verificarAlmacenero: async (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'STORER TOKEN NOT FOUND'
            });
        }
        const response = await tokenReturn.decode(req.headers.authorization.split(' ')[1]);
        if (response.rol == 'Administrador' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'STORER NOT AUTHORIZED'
            });
        }
    },

    verificarLogin: async (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'TOKEN NOT FOUND!'
            })
        } else {

            next();
        }
    },

}