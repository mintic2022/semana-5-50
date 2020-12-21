/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');
const router = routerx();

router.get('/list', articuloController.list); // .com/api/articulo/list
router.post('/add', articuloController.add); // ruta: ***.com/api/articulo/add
router.put('/update', auth.verificarAdministrador, articuloController.update); // ruta: ***.com/api/articulo/update
router.put('/activate', auth.verificarAdministrador, articuloController.activate); // ruta: ***.com/api/articulo/ativate
router.put('/deactivate', auth.verificarAdministrador, articuloController.deactivate); // ruta: ***.com/api/articulo/deativate

module.exports = router;