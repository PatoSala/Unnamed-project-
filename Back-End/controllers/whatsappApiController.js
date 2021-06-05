const whatsappApiController = {

    fetchChats: (req, res) => {
        client.getChats().then((chats) => {
            res.send(chats);
        }).catch((err) => res.send(err));
    },

    fetchChat: (req, res) => {
        let chatId = req.params.phone;

        client.getChats().then((chats) => {
            for (let i = 0; i < chats.length; i++) {
                if (chats[i].id.user == chatId) {
                    let chatFound = chats[i];
                    res.send(chatFound);
                }
            }
        });
    },

    fetchChatMesages: (req, res) => {
        let chatId = req.params.phone;
        
        client.getChats().then((chats) => {
            for (let i = 0; i < chats.length; i++) {
                if (chats[i].id.user == chatId) {
                    let chatFound = chats[i];
                    chatFound.fetchMessages()
                    .then((messages) => res.send(messages));
                }
            }
        });
    },

    sendMessage: (req, res) => {
        let phone = req.body.phone + "@c.us";
        let message = req.body.message

        client.sendMessage(phone, message);

        res.send({
            status: 200
        })
    }

}

module.exports = whatsappApiController;