const db = require('../models');

exports.list = async(req, res, next) =>{
    try {
        const elemento = await db.Categoria.findAll();
        if (elemento)
            res.status(200).json(elemento);
        else
            res.status(404);
    } catch (error) {
        res.status(500).send({message: 'error !!!'});
        next(error);
    }
}

exports.add = async (req, res, next) =>{
    try {
        const catExiste = await db.Categoria.findOne({where: {name: req.body.name}}) //verificoi si la categoria ya existe antes de crearla
        console.log(user);
        if (!catExiste){
            const registro = await db.Categoria.create(req.body);
            res.status(200).json(registro)
        }
        else{
            res.status(404).json({ 
                error: 'Error en la categoria'
            })
        }
    } catch (error) {
        
    }
};

exports.update = async(req, res, next) =>{
    try {
        const register = await db.Categoria.update({nombre: req.body.nombre, descripcion: req.body.descripcion},
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(register);
    } catch (error) {
        res.status(500)
    }
}

exports.activate = async(req, res, next) =>{
    try {
        const register = await db.Categoria.update({estado: 1},
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(register);
    } catch (error) {
        res.status(500)
    }
}

exports.deactivate = async(req, res, next) =>{
    try {
        const register = await db.Categoria.update({estado: 0},
            {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(register);
    } catch (error) {
        res.status(500)
    }
}