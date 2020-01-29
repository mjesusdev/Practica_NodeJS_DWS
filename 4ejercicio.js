// 4º Ejercicio Trabajar con el módulo de NodeJS File System (fs)
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(peticion, respuesta) 
{
    var cadena = url.parse(peticion.url, true);
    var nombreFichero = cadena.pathname;
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
    if (nombreFichero=='/escribir') {
        fs.mkdir("Copia", function(error) 
        {
            if (error){
                console.log("Error, la carpeta ya está creada");
            }
        });

        fs.writeFile("Copia/holaMundo.txt", "Manuel Jesús Ojeda Salvador", function(error)
        {
            respuesta.write("<p>Se ha creado la carpeta con el fichero dentro de ella</p>");
            respuesta.end();
        });
    }else {
        respuesta.write("<p>No has escrito bien la dirección, intente de nuevo😉</p>");
        respuesta.end();
    }
}).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');