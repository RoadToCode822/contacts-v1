var express = require('express');
var router = express.Router();

// Data
var Data = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { contacts: Data });
});

router.post('/contacts/addNew', function(req, res, next){
  var name = req.body.name;
  var phone = req.body.phoneNumber;
  var address = req.body.address;

  Data.push({name: name, phone: phone, address: address});

  res.render('index', {contacts: Data});

});


module.exports = router;
