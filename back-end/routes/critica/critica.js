const router = require('express').Router();
const { CriticaService } = require('../../services/critica/criticaService');

const criticaApi = (app,passport) => {

    app.use('/api/critica',router);

    const criticaService = new CriticaService();

    router.post('/register-critica', async (req,res,next) => {
        try {
            const critica = req.body;   
            let result = await criticaService.registrarCritica(critica);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    })

    router.post('/register-valoracion', async (req,res,next) => {
        try {
            const valoracion = req.body;   
            let result = await criticaService.registrarValoracion(valoracion);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    })
}

module.exports = {
    criticaApi
}