const routerx = require('express-promise-router');
const router = routerx();
const ArticuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

router.get('/list', auth.verificarAdministrador, ArticuloController.list); // .com/api/articulo/list
router.post('/add', auth.verificarAdministrador, ArticuloController.add); // ruta: ***.com/api/articulo/add
router.put('/update', auth.verificarAdministrador, ArticuloController.update); // ruta: ***.com/api/articulo/update
router.put('/activate', auth.verificarAdministrador, ArticuloController.activate); // ruta: ***.com/api/articulo/ativate
router.put('/deactivate', auth.verificarAdministrador, ArticuloController.deactivate); // ruta: ***.com/api/articulo/deativate

module.exports = router;