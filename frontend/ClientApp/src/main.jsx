import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000', //
        },
        secondary: {
            main: '#FFFFFF', // Weiß
        },
        background: {
            default: '#F5F5F5', // Hellgrau (könnte durch Beige ersetzt werden)
            paper: '#F5F5F5', // Hellgrau (könnte durch Beige ersetzt werden)
        },
        text: {
            primary: '#000000', // Schwarz
            secondary: '#707070', // Hellgrau für Nebentext
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 500,
            color: '#000000', // Schwarz
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 500,
            color: '#000000', // Schwarz
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#000000', // Schwarz
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}> 
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
); 