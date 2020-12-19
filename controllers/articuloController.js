const db = require('../models');

exports.list = async(req, res, next) =>{
    try {
        const elemento = await db.Articulo.findAll({
            // include: [ { model: db.Categoria, as: 'categoria', attributes: ["id", "nombre", "descripcion"] } ]
        });//{ where: {estado: 1}}); para filtrar las activas unicamente
        if (elemento)
            res.status(200).json(elemento); //requerimiento
        else
            res.status(404);
    } catch (error) {
        res.status(500).send({message: 'ERROR'})
        next(error)
    }
}

exports.add = async (req, res, next) =>{
    try {
        const artExiste = await db.Articulo.findOne({where: {nombre: req.body.nombre}}) //verificoi si la Articulo ya existe antes de crearla
        if (!artExiste){
            const registro = await db.Articulo.create(req.body);
            res.status(200).json(registro); //requerimiento
        }
        else{
            res.status(404).json({ 
                error: 'Error en la Articulo'
            })
        }
    } catch (error) {
        res.status(500).send({message: 'error !!!'})
        next(error)
    }
};

exports.update = async(req, res, next) =>{
    try {
        const register = await db.Articulo.update({codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion},
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(register); //requerimiento
    } catch (error) {
        res.status(500);
        next(error);
    }
}

exports.activate = async(req, res, next) =>{
    try {
        const register = await db.Articulo.update({estado: 1},
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(register); //requerimiento
    } catch (error) {
        res.status(500);
        next(error);
    }
}

exports.deactivate = async(req, res, next) =>{
    try {
        const register = await db.Articulo.update({estado: 0},
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(register); //requerimiento
    } catch (error) {
        res.status(500);
        next(error);
    }
}