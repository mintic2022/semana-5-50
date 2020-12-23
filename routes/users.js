const router = require('express').Router();
const userController = require('../controllers/UserControler');
const auth = require('../middlewares/auth');

router.post('/login', userController.login); // ruta: ***.com/api/usuario/login
router.get('/list', auth.verificarLogin, userController.list); // .com/api/usuario/list
router.post('/add', auth.verificarAdministrador,userController.add); // ruta: ***.com/api/usuario/add
router.put('/update', auth.verificarAdministrador, userController.update); // ruta: ***.com/api/usuario/update
router.put('/activate', auth.verificarAdministrador, userController.activate); // ruta: ***.com/api/usuario/activate
router.put('/deactivate', auth.verificarAdministrador, userController.deactivate); // ruta: ***.com/api/usuario/deactivate
module.exports = router;