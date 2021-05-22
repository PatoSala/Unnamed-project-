const db = require('../database/models');
// Validación de campos en la creación de usuarios

const { check, checkSchema, body } = require("express-validator");

let userMiddleware = [
  check("name")
    .notEmpty()
    .withMessage("This camp can't be empty")
    .isLength({ min: 2 })
    .withMessage("This camp must have at least two characters"),
  check("email")
    .notEmpty()
    .withMessage("This camp can't be empty")
    .isEmail()
    .withMessage("This camp must be a valid email"),
  check("password")
    .notEmpty()
    .withMessage("This camp can't be empty")
    .isLength({ min: 8 })
    .withMessage("This camp must have at least 8 characters"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("This camp can't be empty")
    .isLength({ min: 8 })
    .withMessage("This camp must have at least 8 characters"),
  body("email").custom((value) => {
    return db.Users.findOne({
      where: {
        email: value,
      },
    }).then((user) => {
      if (user) {
        return Promise.reject("This email address is already registered");
      }
    });
  }),
  checkSchema({
    password: {
      custom: {
        options: (value, { req }) => {
          if (req.body.password === req.body.email) {
            return false;
          }
          return true;
        },
      },
      errorMessage: "The password can't be the same as your email",
    },
  }),
  checkSchema({
    confirmPassword: {
      custom: {
        options: (value, { req }) => {
          if (req.body.password == req.body.confirmPassword) {
            return true;
          }
          return false;
        },
      },
      errorMessage: "Passwords do not match",
    },
  }),
  /* checkSchema({
    terminosCondiciones: {
      custom: {
        options: (value, { req }) => {
          if (!req.body.terminosCondiciones) {
            return false;
          }
          return true;
        },
      },
      errorMessage: "Please accept our Terms of Service.",
    },
  }), */
];

module.exports = userMiddleware;
