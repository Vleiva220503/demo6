import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const AmpLoadingTable = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <CircularProgress size={24} />
      <Typography variant="body1" style={{ marginLeft: '10px' }}>
        Loading...
      </Typography>
    </div>
  );
};

export default AmpLoadingTable;
