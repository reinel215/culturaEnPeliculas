

const isAuth = (req ,res , next) => {

    console.log("***************isAuth");
    console.log(req.session.cookie);
    console.log(req.isAuthenticated());

    if (req.isAuthenticated())
        next();
    else
        next(new Error("debe iniciar sesion primero"));

}


module.exports = {
    isAuth
}