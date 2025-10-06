const connectedClients = new Map();

function addClient(ws, username) {
  connectedClients.set(ws, username);
}

function removeClient(ws) {
  connectedClients.delete(ws);
}

function getUsername(ws) {
  return connectedClients.get(ws);
}

module.exports = { connectedClients, addClient, removeClient, getUsername };
