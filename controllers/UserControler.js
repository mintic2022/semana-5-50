const db = require('../models');
var bcrypt = require('bcryptjs');
const tokenServ = require('../services/token');
const { OPEN_READWRITE } = require('sqlite3');

exports.login = async (req, res, next) =>{
    try {
        const user = await db.Usuario.findOne({where: {email: req.body.email}})
        if (user){
            const pass = bcrypt.compareSync(req.body.password, user.password)
            if (pass){
                const tokenReturn = await tokenServ.encode(user);
                res.status(200).json({ user, tokenReturn });
                // var test = res.json( tokenReturn );
                // res.status(200).test;
                // console.log(test.text);
                // //console.log(test.tokenReturn);
            }
            else{
                //requerimiento
                res.status(401).json({ auth: false, accessToken: null, reason:"Invalid Password!" })
            }
        }
        else{
            res.status(404).json({ 
                error: 'User Not Found.'
            })//requerimiento
        }
    } catch (error) {
        res.status(500).send({message: 'INTERNAL SERVER ERROR'});
        next(error);
    }
}
        
exports.list = async(req, res, next) =>{
    try {
        const user = await db.Usuario.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({message: 'INTERNAL SERVER ERROR'});
        next(error);
    }
}

exports.add = async (req, res, next) =>{
    try {
        const userExiste = await db.Usuario.findOne({where: {nombre: req.body.nombre}}) //verifico si el Usuario ya existe antes de crearlo
        if (!userExiste){
            req.body.password = await bcrypt.hashSync(req.body.password, 10);
            const registro = await db.Usuario.create(req.body);
            res.status(200).json(registro); //requerimiento
        }
        else{
            res.status(404).json({ 
                error: 'Error el Usuario ya existe'
            })
        }
    } catch (error) {
    res.status(500).send({message: 'INTERNAL ERROR'})
    next(error);
    }
}

exports.update = async(req, res, next) =>{
    try {
        const register = await db.Usuario.update({
            rol: req.body.rol,
            nombre: req.body.nombre,
            password: req.body.password,
            email: req.body.email,
            estado: req.body.estado},
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
        const register = await db.Usuario.update({ estado: 1}, { where: { id: req.body.id } })
        res.status(200).json(register); //requerimiento
    } catch (error) {
        res.status(500)
        next(error);
    }
}

exports.deactivate = async(req, res, next) =>{
    try {
        const register = await db.Usuario.update({estado: 0},
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