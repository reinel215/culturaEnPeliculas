const { Pool } = require('pg');
const pgSession = require('connect-pg-simple');
const { config } = require('../../config/config');


class PostgreLib {

    constructor() {

        let poolOptions;

        if (config.dbURL) {
            poolOptions = {
                connectionString: config.dbURL,
                ssl: {
                    rejectUnauthorized: false
                }
            }

        }
        else {
            poolOptions = {
                user: config.dbUser,
                host: config.dbHost,
                database: config.dbName,
                password: config.dbPassword,
                port: config.dbPort,
                ssl: {
                    rejectUnauthorized: false
                }
            }
        }

        this.pool = new Pool(poolOptions);
    }


    sessionHandler(session) {
        const pgS = pgSession(session);

        return new pgS({
            conString: config.databaseURL,
            pool: this.pool,
            schemaName: 'public',
            tableName: 'session'
        })
    }


}



module.exports = {
    PostgreLib
}