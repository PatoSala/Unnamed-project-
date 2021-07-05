const { Session } = require('express-session');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const db = require('../database/models');
 
let whatsappClientController = {

    // start logged user whatsapp session
    init: (req, res, next) => {
        let idUser = req.session.userLogged.id;



        // checks if user has a wpp session saved in his account
        // if it does, it uses it
        let sessionData;
        if (req.session.userLogged.wpp_client != "") {
            sessionData = JSON.parse(req.session.userLogged.wpp_client);
        }

        global.client = new Client({
            session: sessionData
        });

        

        client.on('authenticated', (session) => {    

            // Save the session object in logged user account.
            let JSONsession = JSON.stringify(session);

            db.Users.update({
                wpp_client: JSONsession
            }, {
                where: {
                    id: idUser
                }
            }).then(function(response) {
                console.log(response);
            }).catch(function(err) {
                console.log(err);
            });
        });



        // if user havent logged into wpp before, it renders a qr
        client.on('qr', qr => {
            qrcode.generate(qr, {small: true});
            res.render('qrCode', {qr});
        }); 
        


        client.on('ready', () => {
            console.log('Client is ready! Welcome ' + client.info.pushname);
            res.redirect('/client/home');
            console.log(client);
        });



        // Inits the module
        client.initialize();



        // Manage entry messages
        client.on("message", (message) => {
            console.log(message.from, message.body);
            io.emit("newMessage", message.from);
        })

        // manage message creation 
        client.on("message_create", (message) => {
            console.log(message.from, message.body);
        });
        
    },

    getClientHome: (req, res) => {
        res.redirect('http://localhost:5000');
    },

    closeWppSession: (req, res) => {
        let idUser = req.session.userLogged.id;

        res.send('close wpp session pls');
    }

}

module.exports = whatsappClientController;