const db = require('../models');
var bcrypt = require('bcryptjs');
const tokenServ = require('../services/token');

exports.login = async (req, res, next) =>{
    try {
        console.log(req.body.email);
        const user = await db.Usuario.findOne({where: {email: req.body.email}})
        if (user){
            const pass = bcrypt.compareSync(req.body.password, user.password)
            if (pass){
                const tokenReturn = await tokenServ.encode(user);
                res.status(200).json({ user, tokenReturn });
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

// exports.register = async(req, res, next) =>{
//     try {
//         req.body.password = await bcrypt.hashSync(req.body.password, 10);
//         const user = await db.Usuario.create(req.body);
//         response.status(200).json(user);
//     } catch (error) {
//         res.status(500).send({message: 'INTERNAL SERVER ERROR'});
//         next(error);
//     }
// }

// exports.list = async(req, res, next) =>{
//     try {
//         const user = await db.Usuario.findAll();
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).send({message: 'INTERNAL SERVER ERROR'});
//         next(error);
//     }
// }