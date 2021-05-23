const whatsappApiController = {

    fetchChats: (req, res) => {
        client.getChats().then((chats) => {
            res.send(chats);
        }).catch((err) => res.send(err));
    },

    fetchChatMesages: (req, res) => {
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
}

module.exports = whatsappApiController;