const db = require('../database/models');

let usersController = {
    registerForm: (req, res) => {
        res.render('users/registerForm');
    },

    registerProcess: (req, res) => {
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        db.Users.create(
            newUser
        ).then(
            function(user) {
                res.send(user)
            }
        ).catch(
            function(err) {
                res.send(err)
            }
        )
    },

    loginForm: (req, res) => {
        res.render('users/loginForm');
    },

    loginProcess: (req, res) => {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(userFound) {
            if (userFound.password == req.body.password) {
                req.session.userLogged = userFound;
                res.send('Logged in');
            }
        })
    }
};

module.exports = usersController;