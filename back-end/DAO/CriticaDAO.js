"use strict";

const PostgreLib = require("../lib/postgres/PostgreLib")

// ORDER : (MENSSAGE, CLAVE, USER)
const registrarCritica = "SELECT registrar_critica($1,$2,$3);";

class CriticaDAO {

    constructor(){
        this.client = new PostgreLib();
        this.client.connect()
    }

    async registrar({message, clave, username}){

        try {
            let result = await this.client.query(registrarCritica, [message, clave, username]);
            return result
            
        } catch (error) {

            console.error("ERROR en CriticaDAO.registrar");
            throw error;
            
        }

    }

}

module.exports = CriticaDAO;