var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test',function(req,res){
  res.send('Lista de usuarios app EDUCU');
})

module.exports = router;
