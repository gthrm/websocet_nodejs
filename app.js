const WebSocket = require('ws');

const server = new WebSocket.Server( {port: 3030}, function(err){
    if (err) throw err;
    console.log('Сервер работает');
} );

server.on('connection', function(res){
    res.on('message', function(message){
        server.clients.forEach(function(client){
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    res.send('ХариКришна, епт и ХариРама:');
});