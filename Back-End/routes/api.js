var express = require('express');
const whatsappApiController = require('../controllers/whatsappApiController');
const db = require('../database/models');
var router = express.Router();


// get all client contacts
router.get('/getcontacts', function(req, res) {
    client.getContacts().then((contacts) => {
        res.send(contacts);
    })
});

// get all client chats
router.get('/getchats', whatsappApiController.fetchChats);

// get one client chat by phone number
router.get('/getchat/:phone', whatsappApiController.fetchChatMesages);

router.get('/clientInfo', function(req, res) {
    console.log(client);
})

module.exports = router;