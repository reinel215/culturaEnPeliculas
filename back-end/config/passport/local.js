const LocalStrategy = require('passport-local').Strategy;
const {UserService} = require('../../services/users/userService');

const userService = new UserService();

const strategy = new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password'
    },
    async (username , password, done) => {

        
        try {

            const user = await userService.login(username,password);
            done(null,user);    
            
        } catch (error) {

            if(error.message == 'usuario invalido')
            done(null, false, {message : error.message});
            else
            done(error);
        }
    }
)


module.exports = {
    strategy
}