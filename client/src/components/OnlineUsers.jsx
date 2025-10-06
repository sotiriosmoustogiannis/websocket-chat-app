import React from 'react';
import { Typography } from '@mui/material';

export function OnlineUsers({ users }) {
  return (
    <Typography variant="subtitle2" sx={{ mb: 1 }}>
      Online ({users.length}): {users.join(', ')}
    </Typography>
  );
}
