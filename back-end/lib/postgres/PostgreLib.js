const { Pool } = require('pg');
const pgSession = require('connect-pg-simple');
const { config } = require('../../config/config');


class PostgreLib {


    sessionHandler(session) {
        const pgS = pgSession(session);

        return new pgS({
            conString: config.databaseURL,
            pool: this.pool,
            schemaName: 'public',
            tableName: 'session'
        })
    }






    connect() {

        if (!PostgreLib.clientPool) {



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

            PostgreLib.clientPool = new Pool(poolOptions);

        }

        return PostgreLib.clientPool;
    }


    async query(query, values = []) {

        if (PostgreLib.clientPool) {

            try {

                const result = await PostgreLib.clientPool.query(query, values);
                return result.rows;

            } catch (error) {
                console.log("******ERROR DURANTE EL QUERY");
                throw error;
            }
        }

    }




    disconnect() {
        if (PostgreLib.clientPool) {

            PostgreLib.clientPool.end();

        }
    }





}



module.exports = PostgreLib;
