require('dotenv').config();



const config = {
    dev : process.env.NODE_ENV,
    port : process.env.PORT || 3000,
    token : process.env.SECRET_TOKEN,
    dbUser : process.env.DB_USER,
    dbHost : process.env.DB_HOST,
    dbName : process.env.DB_NAME,
    dbPassword : process.env.DB_PASSWORD,
    dbPort : process.env.DB_PORT,
    dbURL : process.env.DATABASE_URL
}



module.exports = { config };