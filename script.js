function enviarNombre() {
    var nombre = document.getElementById('nombre').value;

    // Objeto con los datos a enviar al servidor
    var data = {
        nombre: nombre
    };

    // Configuración de la solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/usuarios/guardar', true); // Reemplaza 'puerto' con el puerto en el que está corriendo tu API

    // Configuración del encabezado Content-Type
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Acción a realizar cuando se recibe la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Nombre del doctor enviado con éxito');
        } else {
            alert('Error al enviar el nombre del doctor');
        }
    };

    // Envío de la solicitud con los datos serializados como JSON
    xhr.send(JSON.stringify(data));

    //Sugerencias
    //Implementar try catch para comprobar api
}