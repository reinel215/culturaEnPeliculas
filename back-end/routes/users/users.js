const router = require('express').Router();
const { UserService } = require('../../services/users/users');
const { isAuth } = require('../../utils/middlewares/auth/auth');
const { config } = require('../../config/config');


const usersApi = (app,passport) => {

    app.use('/api/users',router);

    const userService = new UserService();

    router.post('/auth/login',passport.authenticate('local',{}), (req,res,next) => {
         
        res.status(200).json({
            message : "ha iniciado sesion",
            user : req.user.username
        });

    } )





    //ejemplo para restringir 
    router.post("/home", isAuth ,(req,res,next) => {
        res.send("Home");
    })

}



module.exports = {
    usersApi
}