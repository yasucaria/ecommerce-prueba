const express = require('express');
const router = express.Router();
const productosController = require("../controllers/productosController.js");

router.get("/productos", productosController.listado);
router.get("/:idProducto", productosController.detalle);

module.exports = router;