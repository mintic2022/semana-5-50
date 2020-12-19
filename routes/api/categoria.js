const router = require('express').Router();

const categoriaController = require('../../controllers/categoriaController');
const auth = require('../../middlewares/auth');

router.get('/list', categoriaController.list); // .com/api/categoria/list
router.post('/add', auth.verificarAdministrador, categoriaController.add); // ruta: ***.com/api/categoria/add
router.put('/update', auth.verificarAdministrador, categoriaController.update); // ruta: ***.com/api/categoria/update
router.put('/activate', auth.verificarAdministrador, categoriaController.activate); // ruta: ***.com/api/categoria/activate
router.put('/deactivate', auth.verificarAdministrador, categoriaController.deactivate); // ruta: ***.com/api/categoria/deactivate
router.get('/find', categoriaController.find); // ruta: ***.com/api/categoria/find


module.exports = router;