import React, { useState, useRef, useEffect } from 'react';
import { Container, Paper, Typography, Box, Stack, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useWebSocket } from './hooks/useWebSocket';
import { MessageList } from './components/MessageList';
import { OnlineUsers } from './components/OnlineUsers';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const username = localStorage.getItem('username') || '';
  const sendNewMessage = useWebSocket(username, setMessages, setNotification, setOnlineUsers);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendNewMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>Simple Chat</Typography>
        <OnlineUsers users={onlineUsers} />
        <Box sx={{ height: '60vh', overflowY: 'auto', mb: 2, p: 2, background: '#f9f9f9' }}>
          <MessageList messages={messages} />
          <div ref={messagesEndRef} />
        </Box>
        <Typography variant="caption" color="text.secondary">{notification}</Typography>
        <Stack direction="row" spacing={1} mt={2}>
          <TextField fullWidth variant="outlined" placeholder="Type a message..."
                     value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                     onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} />
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage}>
            Send
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
