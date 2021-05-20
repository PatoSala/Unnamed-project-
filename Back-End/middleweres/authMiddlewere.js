function authMiddlewere(req, res, next) {
    if (req.session.userLogged != undefined) {
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = authMiddlewere;