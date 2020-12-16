const routerx = require('express-promise-router');
const router = routerx();
const articuloController = require('../../controllers/articuloController');
const auth = require('../../middlewares/auth');

router.get('/list', auth.verifyAlmacenero, articuloController.list); // .com/api/articulo/list
router.post('/add', auth.verificarAdministrador, articuloController.add); // ruta: ***.com/api/articulo/add
router.put('/update', auth.verificarAdministrador, articuloController.update); // ruta: ***.com/api/articulo/update
router.put('/activate', auth.verificarAdministrador, articuloController.activate); // ruta: ***.com/api/articulo/ativate
router.put('/deactivate', auth.verificarAdministrador, articuloController.deactivate); // ruta: ***.com/api/articulo/deativate


module.exports = router;