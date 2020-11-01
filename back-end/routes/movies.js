const router = require('express').Router();



const movieApi = app => {

    app.use('/api/movies', router);


    //creamos las rutas para la api de peliculas


    router.get('/', (req,res,next) => {
        res.json({movies : "todas las peliculas"});
    } );



}






module.exports = { movieApi };