const router = require('express').Router();

const categoriaController = require('../../controllers/categoriaControler');
const auth = require('../../middlewares/auth');

router.get('/list', auth.verifyAlmacenero, categoriaController.list); // .com/api/categoria/list
router.post('/add', auth.verificarAdministrador, categoriaController.add); // ruta: ***.com/api/categoria/add
router.put('/update', auth.verificarAdministrador, categoriaController.update); // ruta: ***.com/api/categoria/update
router.put('/activate', auth.verificarAdministrador, categoriaController.activate); // ruta: ***.com/api/categoria/activate
router.put('/deactivate', auth.verificarAdministrador, categoriaController.deactivate); // ruta: ***.com/api/categoria/deactivate


module.exports = router;