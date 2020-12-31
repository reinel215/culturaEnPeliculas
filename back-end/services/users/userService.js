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
        let result = await this.userDAO.login({username, password});
        return result;
    }

    async get_user_by_id(id) {
        let result = await this.userDAO.get_user_by_id(id);
        return result;
    }
}

module.exports = {
    UserService
}