var express = require('express');
const db = require('../database/models');
var router = express.Router();

const usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  res.send('test');
});

router.get('/check', function(req, res) {
  res.send(req.session.userLogged);
})

/* GET register form */
router.get('/register', usersController.registerForm);

/* POST register process */
router.post('/register', usersController.registerProcess);

/* GET login form */
router.get('/login', usersController.loginForm);

/* POST login form */
router.post('/login', usersController.loginProcess);


module.exports = router;
