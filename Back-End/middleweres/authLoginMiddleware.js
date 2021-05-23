// Verificación de si el usuario esta logueado

let authMiddleware = (req, res, next) => {
    if (req.session.userLogged == undefined) {
      next();
    } else {
      res.redirect("/api/getchats");
    }
  };
  
  module.exports = authMiddleware;
