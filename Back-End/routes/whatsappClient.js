const { response } = require('express');
var express = require('express');
const whatsappClientController = require('../controllers/whatsappClientController');
const authMiddlewere = require('../middleweres/authMiddlewere');
var router = express.Router();

router.get('/init', authMiddlewere, whatsappClientController.init);

router.get('/qr', whatsappClientController.qr);

router.get('/home', authMiddlewere, whatsappClientController.getClientHome);

router.get('/sign-out', whatsappClientController.closeWppSession);

router.get('/destroy', whatsappClientController.destroy);

module.exports = router;