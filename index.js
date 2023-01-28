const Hapi = require('hapi');

const host = 'localhost';
const port = 3000;

const server = Hapi.server({
    host: host,
    port: port
});

require('./routes/routes')(server);

const init = async () => {
    await server.start();
    console.log("Server up! http://"+ host +':'+ port)
}

init();