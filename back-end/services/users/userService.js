"use strict";

const fs = require('fs');
const { use } = require('passport');
const util = require('util');

const readFile = util.promisify(fs.readFile);


//import DAO 
const UserDAO = require('../../DAO/UserDAO/UserDAO');



class UserService {


    constructor(){

        this.userDAO = new UserDAO();

    }



    async registrarUsuario(user){

        let result = await this.userDAO.registrar(user);
        return result;

    }


    async login(username, password) {

        try {
            let result = await this.userDAO.login({username, password});
            if (result) {
                return 'Login de usuario exitoso'
            } else {
                throw new Error("Login de usuario fallido");
            }

        } catch (error) {

            throw error;
        }

    }

}




module.exports = {
    UserService
}