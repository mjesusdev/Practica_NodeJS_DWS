// 1º Ejercicio: Montar el servidor en la dirección http://127.0.0.3:8083/
var http = require('http');
http.createServer(function(peticion, respuesta) 
{
    respuesta.writeHead(200,
    {'Content-Type':'text/plain;charset=utf-8'});
    respuesta.end();
}).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/'); 