import { useEffect, useState } from 'react';

export function useWebSocket(username, setNewM, setNotification, setOnlineUsers) {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000');

    socket.onopen = () => {
      const storedUsername = username || localStorage.getItem('username') || prompt('Enter your name');
      localStorage.setItem('username', storedUsername);
      socket.send(JSON.stringify({ type: 'set_username', value: storedUsername }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'update') setNewM(data.value);
      if (data.type === 'notification') setNotification(data.value);
      if (data.type === 'users') setOnlineUsers(data.value);
    };

    socket.onclose = () => console.log('Disconnected from server');
    setWs(socket);
    return () => socket.close();
  }, []);

  const sendNewMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN)
      ws.send(JSON.stringify({ type: 'new_message', value: message }));
  };

  return sendNewMessage;
}
