var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET profile */
router.get('/profile', function(req, res) {
  res.send('Profile');
});


module.exports = router;
