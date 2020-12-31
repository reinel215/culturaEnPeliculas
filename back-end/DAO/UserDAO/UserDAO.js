"use strict";

const PostgreLib = require("../../lib/postgres/PostgreLib")

// ORDER : (USER, MAIL, NAME, GENDER, PASSWORD, URL_IMAGE)
const registrarUsuario = "SELECT registrar_usuario($1,$2,$3,$4,$5,$6);";
const loginUsuario = "SELECT login_usuario($1,$2);";
const get_user_by_idUsuario = "SELECT get_user_by_id($1);";



class UserDAO {


    constructor(){
        this.client = new PostgreLib();
        this.client.connect()
    }


    async registrar({username, mail , name, gender, password, url_image}){


        try {
            let result = await this.client.query(registrarUsuario, [username,mail,name,gender,password,url_image]);
            return result
            
        } catch (error) {

            console.error("ERROR en UserDAO.registrar");
            throw error;
            
        }

    }

    async login({username, password}){
        try {
            let result = await this.client.query(loginUsuario, [username,password]);
            return result            
        } catch (error) {
            console.error("ERROR en UserDAO.login");
            throw error;
        }
    }

    async get_user_by_id(id){
        try {
            let result = await this.client.query(get_user_by_idUsuario, [id]);
            return result            
        } catch (error) {
            console.error("ERROR en UserDAO.get_user_by_id");
            throw error;
        }
    }

}

module.exports = UserDAO;