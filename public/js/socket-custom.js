let socket = io();
socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexión con el servidor');
});

//enviar información 
socket.emit('enviarMensaje', {
  usuario: 'Marco',
  mensaje: 'Hola mundo'
}, function (resp) {
  console.log('Respuesta server: ', resp);
});

//escuchar información
socket.on('enviarMensaje', function (mensaje) {
  console.log('servidor:', mensaje);
});