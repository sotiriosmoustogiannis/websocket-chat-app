function broadcast(wss, data) {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify(data));
    }
  });
}

function broadcastState(wss, messages) {
  broadcast(wss, { type: 'update', value: messages });
}

function broadcastNotification(wss, text) {
  broadcast(wss, {
    type: 'notification',
    value: text,
    timestamp: new Date().toLocaleTimeString(),
  });
}

function broadcastUsersList(wss) {
  const users = Array.from(require('./clients').connectedClients.values());
  broadcast(wss, { type: 'users', value: users });
}

module.exports = { broadcastState, broadcastNotification, broadcastUsersList };
