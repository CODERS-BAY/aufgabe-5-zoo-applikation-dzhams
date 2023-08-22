import React from 'react';
import { Container, Box, Typography, useTheme } from '@mui/material';
import {green, grey} from "@mui/material/colors";

const Header = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
            }}
        >
        </Box>
        
    );
};



const Layout = ({ children }) => {
    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            sx={{
                width: '100vw',
                height: '100vh',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.background.default,

                //backgroundSize: 'cover',
            }}
        >
            <Header />
            <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0.9,
                    //overflow: 'auto', // Fügt einen Scrollbalken hinzu, wenn der Inhalt größer als der verfügbare Platz ist
                }}
            >
                <Box 
                    sx={{
                        width: '50%',
                        textAlign: 'center',
                    }}
                >
                    {children}
                </Box>
            </Box>

        </Container>
    );
};

export default Layout;