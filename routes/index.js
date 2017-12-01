var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

// Data
var Data = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('Contacts').find().toArray(function(err, results) {
    // console.log(results)
    // send HTML file populated with quotes here

    return res.render('index', { contacts: results });
  })
});

router.post('/contacts/addNew', function(req, res, next){
  
    const db = req.db;
    db.collection('Contacts').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('Saved to database')
      
      // var name = req.body.fullName;
      // var phone = req.body.phoneNumber;
      // var address = req.body.address;
    
      return res.redirect('/');

    });
    
  });

  router.get('/contacts/delete/:_id', function(req,res){
    console.log(req.params._id);
    const db = req.db;
    var objId = new ObjectID(req.params._id);
    db.collection('Contacts').deleteOne( { _id: objId }, function(err, result){
      console.log('foobar');
      if (err) {
        console.log(err)
        return res.send(err)
      }
      return res.redirect('/');
    } )
  }); 
  

module.exports = router;
