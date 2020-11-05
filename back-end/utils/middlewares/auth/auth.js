

const isAuth = (req ,res , next) => {

    if (req.isAuthenticated())
        next();
    else
        next(new Error("debe iniciar sesion primero"));

}


module.exports = {
    isAuth
}