const whatsappApiController = {

    fetchChats: (req, res) => {
        client.getChats().then((chats) => {
            res.send(chats);
        }).catch((err) => res.send(err));
    },

    fetchChat: (req, res) => {
        let chatId = req.params.phone;

        client.getChatById(chatId).then((chat) => {
            client.getProfilePicUrl(chat.id._serialized).then((url) => {
                chat.profilePic = url;
                res.send(chat);
            })
        }).catch(err => console.log(err));
    },

    fetchChatMesages: (req, res) => {
        let chatId = req.params.phone;

        client.getChatById(chatId).then((chat) => {
            chat.fetchMessages().then((messages) => {
                res.send(messages);
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    },

    sendMessage: (req, res) => {
        let phone = req.body.phone;
        let message = req.body.message;

        client.sendMessage(phone, message).then((msg) => {console.log(msg)}).catch(err => {console.log(err)});

        res.send(console.log(phone, message));
    },

    getProfilePicture: (req, res) => {
        let chatId = req.params.phone;

        client.getProfilePicUrl(chatId).then((url) => {
            res.send(url);
        })
    }

}

module.exports = whatsappApiController;