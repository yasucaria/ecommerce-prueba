const express = require("express");
const rutasProductos = require("./routes/productos.js");
const rutasCarrito = require("./routes/carrito.js");
const rutasHome = require("./routes/home.js");
const app = express();
app.listen(3000, () => console.log("Servidor corriendo"));

app.use('/', rutasHome);
app.use('/productos', rutasProductos);
app.use('/carrito', rutasCarrito);