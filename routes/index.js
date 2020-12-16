const routerx = require('express-promise-router');
const router = routerx();

const apiRouterUser = require('./api/users.js');
const apiRouterCategoria = require('./api/categoria');
const apiRouterArticulo = require('./api/articulo');

//manejador de rutas /api
router.use('/usuario', apiRouterUser); // ***.com/api/usuario
router.use('/categoria', apiRouterCategoria); // ***.com/api/categoria
router.use('/articulo', apiRouterArticulo);  // ***.com/api/articulo

module.exports = router;