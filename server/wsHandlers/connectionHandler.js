const { addClient, removeClient, getUsername } = require('./clients');
const { broadcastState, broadcastNotification, broadcastUsersList } = require('./broadcast');
const { formatMessage } = require('../utils/formatMessage');

const messages = [];

function handleConnection(ws, wss) {
  console.log('New client connected');

  ws.send(JSON.stringify({ type: 'update', value: messages }));

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'set_username') {
      addClient(ws, data.value);
      broadcastNotification(wss, `${data.value} joined the chat`);
      broadcastUsersList(wss);
    }

    if (data.type === 'new_message') {
      const sender = getUsername(ws);
      const msg = formatMessage(sender, data.value);
      messages.push(msg);
      broadcastState(wss, messages);
    }
  });

  ws.on('close', () => {
    const username = getUsername(ws);
    removeClient(ws);
    broadcastNotification(wss, `${username} left the chat`);
    broadcastUsersList(wss);
    console.log('Client disconnected');
  });
}

module.exports = { handleConnection };
