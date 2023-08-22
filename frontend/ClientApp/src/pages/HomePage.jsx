import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Layout from "../../../ClientApp/src/assets/layout";
import ServiceList from '../../src/services/ServiceList';

const HomePage = () => {
    return (
        <Layout>
            <Box sx={{ mt: 20, mb: -15, }}>
                <Typography variant="h4" gutterBottom>
                    Willkommen im Codersbay Zoo
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '720px' }}>
                <Paper elevation={4} sx={{ p: 4, borderRadius: 5, backgroundColor: '#d7d2d0', width: '70%', maxWidth: '1344px' }}>
                    <Typography variant="h5" gutterBottom>
                        Serviceauswahl
                    </Typography>
                    <ServiceList />
                </Paper>
            </Box>
        </Layout>
    );
};

export default HomePage;
