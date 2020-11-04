/* 

este archivo corre el servidor con un solo hilo en modo developer
y en modo produccion utiliza todos los nucleos disponibles

*/


const numCPUs = require('os').cpus().length;
const cluster = require('cluster');
const { config } = require('../config/config');

const runServer = (app) => {


    if (config.dev) {

        //Desplegar Servidor
        app.listen(config.port, () => {

            console.log(`server running on port: http://localhost:${config.port}`);

        });

    }else {

        //si es el proceso padre hacemos que haga hijos por cada cpu
        if(cluster.isMaster){

            console.log(`Master ${process.pid} is running`);

            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();              
            }


            cluster.on('exit', (worker, code , signal) =>{
                console.log(`worker ${worker.process.pid} died`);
            } );

        }else{

            //cuando sean procesos hijos los ponemos a esuchar al puerto
            app.listen(config.port, () => {

                console.log(`proccess ${process.pid} is running a server on port: http://localhost:${config.port}`);
    
            });


        }


    }

}



module.exports = {
    runServer
}