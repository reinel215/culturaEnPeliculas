const { strategy } = require('./local');
const { UserService } = require('../../services/users/userService');
const userService = new UserService();

//este archivo va a configurar passport; el serialize, el deserialize y la estrategia

const configPassport = (passport) =>{
    
    passport.serializeUser( (user,done) =>{
        done(null,user.id);
    } );

    passport.deserializeUser( async (id,done) => {

        try {
            const user = await userService.login(id);
            done(null,user);
        } catch (error) {
            done(error);
        }
        

    })
    passport.use(strategy);
}



module.exports = {
    configPassport
}