require('dotenv').config();



const config = {
    dev : process.env.NODE_ENV !== 'production',
    port : process.env.PORT || 3000,
    token : process.env.SECRET_TOKEN,
}



module.exports = { config };