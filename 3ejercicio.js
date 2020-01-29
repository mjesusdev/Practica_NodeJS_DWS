// 3º Ejercicio: Se pasa por parámetro el DNI sin la letra y automáticamente se añade.
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(peticion, respuesta) 
{
    var cadena = url.parse(peticion.url, true);
    var direccion = cadena.pathname;
    var parametro = url.parse(peticion.url, true).query;
    var dniSinLetra = parametro.num;
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (direccion=='/dni'){
        fs.readFile("./instrucciones.html", function(error, contenido)
        {
            if (error) 
            {
                respuesta.writeHead(404);
                return respuesta.end("404 Not Found");
            }
            respuesta.write(contenido);
            var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
            var calcularLetraDNI = dniSinLetra % 23;
            var sacarLetraDNI = letras.substring(calcularLetraDNI,calcularLetraDNI+1);
            var dniCompleto = "<p>Su DNI Completo es: " + "<b>" + dniSinLetra + sacarLetraDNI + "</b>"+ "</p>";
            respuesta.write(dniCompleto);
            return respuesta.end("\n</div> \n</body> \n</html>");
        });
    }else{
        respuesta.write("<p>No has escrito bien la dirección, intente de nuevo😉</p>");
        respuesta.end();
    }
}).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');