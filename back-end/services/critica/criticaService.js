"use strict";

const fs = require('fs');
const util = require('util');

//import DAO 
const CriticaDAO = require('../../DAO/CriticaDAO');
const ValoracionDAO = require('../../DAO/ValoracionDAO');

class CriticaService {

    constructor(){
        this.criticaDAO = new CriticaDAO();
        this.valoracionDAO = new ValoracionDAO()
    }

    async registrarCritica(critica){

        let result = await this.criticaDAO.registrar(critica);
        return result;
    }

    async registrarValoracion(valoracion){

        let result = await this.valoracionDAO.registrar(valoracion);
        return result;
    }
}

module.exports = {
    CriticaService
}