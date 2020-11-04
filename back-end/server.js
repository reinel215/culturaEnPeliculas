'user strict';

const express = require('express');
const app = express();


const { config } = require('./config/config');

//LOGGER
const morgan = require('morgan');

if (config.dev) {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}



//COOKIE PARSER
const cookieParser = require('cookie-parser');
app.use(cookieParser());



//EXPRESS SESSION
const expressSession = require('express-session');
let sessionOptions;

if (config.dev) {

    sessionOptions = {
        secret: config.token,
        resave: false,
        saveUninitialized: false,
    }

} else {

    app.set('trust proxy', 1)
    sessionOptions = {
        secret: config.token,
        resave: true,
        saveUninitialized: false,
        unset: 'destroy',
        proxy : true,
        cookie: {
            sameSite: true,
            maxAge: 60000,
            secure: true,
            httpOnly: false
        },
        name : "peliCultura"

    }

}
app.use(expressSession(sessionOptions));






//BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //parse aplicattion json
app.use(bodyParser.urlencoded({ extended: false }))



//PASSPORT SETTINGS
const passport = require('passport');
const { configPassport } = require('./config/passport/passport');
configPassport(passport); //configuramos passport
app.use(passport.initialize());
app.use(passport.session());



//CORS
const cors = require('cors');
app.use(cors()); //activa el cors para todas las rutas


//PROTECCION DE CABEZERAS
const helmet = require('helmet');
app.use(helmet());


//CARPETA PUBLICA
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));



//COMPRESION DE CONSULTAS
const compression = require('compression');
app.use(compression());




//RUTAS
const { movieApi } = require('./routes/movies/movies'); //busco las rutas de las peliculas y se la agrego a la app
movieApi(app);
const { usersApi } = require('./routes/users/users');
usersApi(app, passport);



//Errores
//page not found
const { notFound } = require('./utils/middlewares/errors/notFound');
app.use(notFound);
//log errores
const { logErrors } = require('./utils/middlewares/errors/logErrors');
app.use(logErrors);
//error handler 
const { errorHandler } = require('./utils/middlewares/errors/errorHandler');
const { type } = require('os');
app.use(errorHandler);


//Desplegar Servidor
const { runServer } = require('./utils/runner');
runServer(app);