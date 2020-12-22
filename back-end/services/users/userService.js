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



            const data = await readFile('user.json');


            const content = JSON.parse(data);

            const user = content.user;

            if ((user.username == username) && (user.password == password)) {

                console.log(`el usuario: ${username} ha iniciado sesion`);
                return user;


            } else {

                throw new Error("usuario invalido");
            }

        } catch (error) {

            throw error;
        }

    }








    async getUser(id){

        try {


            const data = await readFile('user.json');


            const content = JSON.parse(data);

            const user = content.user;

            if (user.id == id)
                return user
            else
                throw new Error("ese usuario no esta en la base de datos")


        } catch (error) {

            throw error;
            
        }


    }




}




module.exports = {
    UserService
}