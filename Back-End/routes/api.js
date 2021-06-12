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

router.get('/getchat/:phone', whatsappApiController.fetchChat);

// get one client chat by phone number
router.get('/getmessages/:phone', whatsappApiController.fetchChatMesages);

router.post('/sendmessage', whatsappApiController.sendMessage);

router.get('/profilepic/:phone', whatsappApiController.getProfilePicture);

router.get('/clientInfo', function(req, res) {
    res.send(client)
})

module.exports = router;