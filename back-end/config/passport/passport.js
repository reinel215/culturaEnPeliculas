const { strategy } = require('./local');
const { UserService } = require('../../services/users/userService');
const { Passport } = require('passport');
const userService = new UserService();
const PassportLocal = require('passport-local').Strategy;

//este archivo va a configurar passport; el serialize, el deserialize y la estrategia

const configPassport = (passport) =>{
    
    passport.use(new PassportLocal(async (username, password, done)=>{
        let userService = new UserService();
        let user = await userService.login(username, password)
        done(null, user)
    }))

    passport.serializeUser( (user,done) =>{
        done(null,user);
    });

    passport.deserializeUser( async (id,done) => {
        const user = await userService.get_user_by_id(id);
        done(null,user);
    });
    passport.use(strategy);

   /* passport.serializeUser(function(user, done) {
        done(null, user);
    });
      
    passport.deserializeUser(async function(user, done) {
        const user = await userService.get_user_by_id(user.id);
        done(null, user);
    });*/
}

module.exports = {
    configPassport
}