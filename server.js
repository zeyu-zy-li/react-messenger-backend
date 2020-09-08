const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', function (ws) {
    ws.on('message', function (data) {
        console.log(data);
        wss.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
