const router = require('express').Router();
const categoriaController = require('../controllers/categoriaController');
const auth = require('../middlewares/auth');

router.get('/list', categoriaController.list); // .com/api/categoria/list
router.post('/add', categoriaController.add); // ruta: ***.com/api/categoria/add
router.put('/update', categoriaController.update); // ruta: ***.com/api/categoria/update
router.put('/activate', categoriaController.activate); // ruta: ***.com/api/categoria/activate
router.put('/deactivate', categoriaController.deactivate); // ruta: ***.com/api/categoria/deactivate


module.exports = router;