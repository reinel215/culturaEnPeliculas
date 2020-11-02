'user strict';

const express = require('express');
const app = express();


const { config } = require('./config/config');

//LOGGER
const morgan = require('morgan');
app.use(morgan('dev'));


//PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //parse aplicattion json
app.use(bodyParser.urlencoded({extended : false}))


//CORS
const cors = require('cors');
app.use(cors()); //activa el cors para todas las rutas


//PROTECCION DE CABEZERAS
const helmet = require('helmet');
app.use(helmet());


//CARPETA PUBLICA
const path = require('path');
app.use('/public',express.static(path.join(__dirname,'public')));



//RUTAS
const {movieApi} = require('./routes/movies'); //busco las rutas de las peliculas y se la agrego a la app
movieApi(app);



//Errores
    //page not found
    const { notFound } = require('./utils/middlewares/errors/notFound');
    app.use(notFound);
    //log errores
    const { logErrors } = require('./utils/middlewares/errors/logErrors');
    app.use(logErrors);
    //error handler 
    const { errorHandler } = require('./utils/middlewares/errors/errorHandler');
    app.use(errorHandler);


//Desplegar Servidor
app.listen(config.port, () => {

    console.log(`\n\n Servidor Corriendo \n\n`);
    console.log(`ruta: http://localhost:${config.port}`);

});