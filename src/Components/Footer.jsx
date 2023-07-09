import React from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">Seguici sui social:</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook sx={{ fontSize: 30, color: 'white', marginRight: '10px' }} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter sx={{ fontSize: 30, color: 'white', marginRight: '10px' }} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram sx={{ fontSize: 30, color: 'white' }} />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
