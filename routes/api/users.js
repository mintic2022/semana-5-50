const router = require('express').Router();
const userController = require('../../controllers/UserControler');

router.post('/login', userController.login); // ruta: ***.com/api/usuario/login

module.exports = router;