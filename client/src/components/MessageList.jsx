import React from 'react';
import { Avatar, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';

export function MessageList({ messages }) {
  return (
    <List>
      {messages.map((msg) => (
        <ListItem key={msg.id}>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <Avatar>{msg.sender[0]}</Avatar>
            <Paper sx={{ p: 1.5, borderRadius: 2 }}>
              <Typography variant="caption" fontWeight="bold">{msg.sender}</Typography>
              <ListItemText primary={msg.content} />
              <Typography variant="caption" color="text.secondary">{msg.timestamp}</Typography>
            </Paper>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
