const router = require('express').Router();

const categoriaController = require('../../controllers/categoriaController');
const auth = require('../../middlewares/auth');

router.get('/list', auth.verificarAlmacenero, categoriaController.list); // .com/api/categoria/list
router.post('/add', auth.verificarAlmacenero, categoriaController.add); // ruta: ***.com/api/categoria/add
router.put('/update', auth.verificarAlmacenero, categoriaController.update); // ruta: ***.com/api/categoria/update
router.put('/activate', auth.verificarAlmacenero, categoriaController.activate); // ruta: ***.com/api/categoria/activate
router.put('/deactivate', auth.verificarAlmacenero, categoriaController.deactivate); // ruta: ***.com/api/categoria/deactivate


module.exports = router;