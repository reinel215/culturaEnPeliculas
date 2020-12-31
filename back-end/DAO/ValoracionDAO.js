"use strict";

const PostgreLib = require("../lib/postgres/PostgreLib")

// ORDER : (MENSSAGE, CLAVE, USER)
const registrarValoracion = "SELECT registrar_valoracion($1,$2,$3);";

class ValoracionDAO {

    constructor(){
        this.client = new PostgreLib();
        this.client.connect()
    }

    async registrar({stars, clave, username}){

        try {
            let result = await this.client.query(registrarValoracion, [stars, clave, username]);
            return result
            
        } catch (error) {

            console.error("ERROR en CriticaDAO.registrar");
            throw error;
            
        }

    }

}

module.exports = ValoracionDAO;