const router = require('express').Router();
const userController = require('../../controllers/UserControler');
const auth = require('../../middlewares/auth');

router.post('/login', userController.login); // ruta: ***.com/api/usuario/login

module.exports = router;