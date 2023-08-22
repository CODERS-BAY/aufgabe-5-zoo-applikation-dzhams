import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function ServiceList() {
    const services = [
        { path: '/zoobesucher', label: 'Für die Besucher', bgColor: '#FCE4EC', textAlign: 'center'},
        { path: '/kassierer', label: 'Für den Kassierer', bgColor: '#E1F5FE', textAlign: 'center' },
        { path: '/tierpfleger', label: 'Für die Tierpfleger', bgColor: '#E0F2F1', textAlign: 'center' },
    ];

    return (
        <List sx={{ width: '100%', maxWidth: 1920, textAlign: 'center', mb: 4 }}>
            {services.map((service) => (
                <ListItem key={service.path} component={Link} to={service.path}>
                    <Box sx={{ width: '100%', bgcolor: service.bgColor, textAlign: service.textAlign }}>
                        <ListItemText primary={service.label} />
                    </Box>
                </ListItem>
            ))}
        </List>
    );
}

export default ServiceList;
