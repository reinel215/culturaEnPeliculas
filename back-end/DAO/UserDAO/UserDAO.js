"use strict";

const PostgreLib = require("../../lib/postgres/PostgreLib")

// ORDER : (USER, MAIL, NAME, GENDER, PASSWORD, URL_IMAGE)
const registrarUsuario = "SELECT registrar_usuario($1,$2,$3,$4,$5,$6);";



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



    


}




module.exports = UserDAO;