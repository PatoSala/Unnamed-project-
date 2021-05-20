const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

function whatsAppClientMiddlewere(req, res, next) {

    let sessionData;
    if (req.session.userLogged.wpp_client == "") {
        next();
    } else {
        sessionData = JSON.parse(req.session.userLogged.wpp_client);
    }

    global.client = new Client({
        session: sessionData
    });

    client.on('ready', () => {
        console.log('Client is ready! Welcome ' + client.info.pushname);
        res.redirect('/client/home');
        console.log(client);
    });
}

module.exports = whatsAppClientMiddlewere;