const db = require('../database/models');
const {validationResult} = require("express-validator");

let usersController = {
    registerForm: (req, res) => {
        res.render('users/registerForm');
    },

    registerProcess: (req, res) => {

      // Enviar errores express-validator
      let errores = validationResult(req);
      errores.reqNombre = req.body.nombre;
      errores.reqEmail = req.body.email;

      //Verifica los errores y los renderiza
      if (!errores.isEmpty()){
        return res.render("Users/registerForm", {errors : errores});
      }

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
            if (userFound != null && userFound.password == req.body.password) {
                req.session.userLogged = userFound;
                res.send('Logged in');
            }else{
                 //Renderiza la vista de inicio de session con el error de contraseña o mail incorrectos
          let credencialesInvalidas = "The email & password combination is incorrect";
          return res.render("users/loginForm", {credencialesInvalidas : credencialesInvalidas});
            }
        })
    }
};

module.exports = usersController;