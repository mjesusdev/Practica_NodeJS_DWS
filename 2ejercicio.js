// 2º Ejercicio: Cargar página web HTML estática alojada en el servidor, instrucciones
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(peticion, respuesta) 
{
    var q = url.parse(peticion.url, true);
    var nombreFichero = q.pathname;
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
    if (nombreFichero=='/dni'){
        fs.readFile("../instrucciones.html", function(err, dato) 
        {
            if (err) 
            {
                respuesta.writeHead(404, {'Content-Type': 'text/html'});
                return respuesta.end("404 Not Found");
            }
            respuesta.write(dato);
            return respuesta.end();
        });
    }else{
        respuesta.write("<p>No has escrito bien la dirección, intente de nuevo😉</p>");
    }
}).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');