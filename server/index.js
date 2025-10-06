const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { handleConnection } = require('./wsHandlers/connectionHandler');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => handleConnection(ws, wss));

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
