const router = require('express').Router();
const { UserService } = require('../../services/users/userService');
const { isAuth } = require('../../utils/middlewares/auth/auth');
const { config } = require('../../config/config');


const usersApi = (app,passport) => {

    app.use('/api/users',router);

    const userService = new UserService();

    /*router.post('/auth/login',passport.authenticate('local',{}), (req,res,next) => {
         
        res.status(200).json({
            message : "ha iniciado sesion",
            user : req.user.username
        });

    } )*/

    router.post('/auth/login', async (req,res,next) => {
        const user = req.body;   
        let result = await userService.login(user.username, user.password)
        if (result[0].login_usuario)
            res.status(201).json('LOGIN DE USUARIO EXISTOSO');
        else
            res.status(201).json('LOGIN DE USURIO FALLIDO');
    } )


    //ejemplo para restringir 
    router.post("/home", isAuth ,(req,res,next) => {
        res.send("Home");
    })




    router.post('/register', async (req,res,next) => {

        try {
            const user = req.body;   
            
            let result = await userService.registrarUsuario(user);

            res.status(201).json(result);


        } catch (error) {
            next(error);
        }

    })




}



module.exports = {
    usersApi
}