const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido al sitio web'
  });

  //escuchar al cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);

    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'Todo salio Correctamente'
    //   });
    // } else {
    //   callback({
    //     resp: 'Sucedio algo grave, ERROR !!'
    //   });
    // }
  });
});
