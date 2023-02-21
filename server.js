const http = require('http');

const responderPeticion = (req, res) => {
    res.end("Hola mundo!");
}

let server = http.createServer(responderPeticion);

server.listen(3030);