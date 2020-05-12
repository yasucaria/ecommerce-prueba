const express = require("express");
const router = express.Router();

router.get('/', function(req, res){
    res.send("Bienvenidos a Mercado Libro");
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  module.exports = router;


module.exports = router