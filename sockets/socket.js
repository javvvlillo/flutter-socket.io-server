const { io } = require('../index');

io.on('connection', client => {
    console.log('Cliente conectado')
    client.on('disconnect',() => {
        console.log('Cliente desconectado');
    });
    client.on('message', (payload) => {
        console.log(payload['nombre']);
        io.emit('Message', {admin: 'Mensaje de administrador'} )
    });
});