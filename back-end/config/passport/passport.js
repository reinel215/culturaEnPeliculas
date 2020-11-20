const { strategy } = require('./local');
const { UserService } = require('../../services/users/users');
const userService = new UserService();

//este archivo va a configurar passport; el serialize, el deserialize y la estrategia

const configPassport = (passport) =>{


    passport.serializeUser( (user,done) =>{
        done(null,user.id);
    } );


    passport.deserializeUser( async (id,done) => {

        try {

            const user = await userService.getUser(id);
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