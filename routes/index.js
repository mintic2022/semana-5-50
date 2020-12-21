const router = require('express').Router();

const apiRouterCategoria = require('./categoria');
const apiRouterArticulo = require('./articulo');
const apiRouterUser = require('./users.js');

//manejador de rutas /api
router.use('/categoria', apiRouterCategoria); // ***.com/api/categoria
router.use('/articulo', apiRouterArticulo);  // ***.com/api/articulo
router.use('/usuario', apiRouterUser); // ***.com/api/usuario

module.exports = router;