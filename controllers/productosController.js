const fs = require('fs');
const detalleProductos = JSON.parse(fs.readFileSync('./site/detalleProductos.json', 'utf-8'));

const productosController = {
listado:  function(req, res){
    res.send("Listado de productos");
},
detalle: function(req, res){
    res.send("Este es el detalle de productos");
}
}

module.exports= productosController;