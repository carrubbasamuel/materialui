import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9375ec',
    },
    text: {
      primary: '#fa3d33',
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
