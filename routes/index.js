const router = require('express').Router();

const apiRouterCategoria = require('./categoria');
const apiRouterArticulo = require('./articulo');

//manejador de rutas /api
router.use('/categoria', apiRouterCategoria); // ***.com/api/categoria
router.use('/articulo', apiRouterArticulo);  // ***.com/api/articulo

module.exports = router;