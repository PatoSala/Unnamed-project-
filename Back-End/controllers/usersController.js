const db = require('../database/models');
const {validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');

let usersController = {
    registerForm: (req, res) => {
        res.render('users/registerForm');
    },

    registerProcess: (req, res) => {

      // Enviar errores express-validator
      let errores = validationResult(req);
      errores.reqNombre = req.body.name;
      errores.reqEmail = req.body.email;

      //Verifica los errores y los renderiza
      if (!errores.isEmpty()){
        return res.render("Users/registerForm", {errors : errores});
      }
      const saltRounds = 10;
      var userspassword = req.body.password;
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(userspassword, salt, function(err, hash) {
            let newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
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
         });
      });
      



    },

    loginForm: (req, res) => {
        res.render('users/loginForm');
    },

    loginProcess: (req, res) => {
              //Toma los errores
      let errores = validationResult(req);
      errores.reqEmail = req.body.email;

      //Renderiza la vista con los errores
      if (!errores.isEmpty()){
        return res.render("users/loginForm", {errors : errores});
      }

        db.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(userFound) {
            if(userFound != null && bcrypt.compareSync(req.body.password, userFound.password)) {
                req.session.userLogged = userFound;
                res.send('Logged in');
            }else{
                 //Renderiza la vista de inicio de session con el error de contraseña o mail incorrectos
                let credencialesInvalidasError = req.body.email;
                let credencialesInvalidas = "The email & password combination is incorrect";
                return res.render("users/loginForm", {credencialesInvalidas : credencialesInvalidas, credencialesInvalidasError : credencialesInvalidasError});
            }
        }).catch((err) => {
            console.log(err);
        })
    }
};

module.exports = usersController;