const router = require('express').Router();

const CategoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

router.get('/list', auth.verificarAlmacenero, CategoriaController.list); // .com/api/categoria/list
router.post('/add', auth.verificarAlmacenero, CategoriaController.add); // ruta: ***.com/api/categoria/add
router.put('/update', auth.verificarAlmacenero, CategoriaController.update); // ruta: ***.com/api/categoria/update
router.put('/activate', auth.verificarAlmacenero, CategoriaController.activate); // ruta: ***.com/api/categoria/activate
router.put('/deactivate', auth.verificarAlmacenero, CategoriaController.deactivate); // ruta: ***.com/api/categoria/deactivate

module.exports = router;