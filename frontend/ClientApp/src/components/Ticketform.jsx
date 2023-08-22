import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function TicketForm({ selectedDate, handleDateChange, selectedTicketType, handleTicketTypeChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexDirection: 'column'}}>
                <TextField
                    label="Datum"
                    type="datetime-local"
                    value={selectedDate}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ backgroundColor: '#d7d2d0' }}
                />
                <TextField
                    select
                    value={selectedTicketType}
                    onChange={handleTicketTypeChange}
                    SelectProps={{
                        native: true,
                    }}
                    sx={{ backgroundColor: '#d7d2d0' }}

                >
                    <option value="">Auswahl der Tageskarte</option>
                    <option value="1">Kinder</option>
                    <option value="2">Erwachsene</option>
                    <option value="3">Senioren</option>
                </TextField>
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Ticket hinzufügen
                </Button>
            </Box>
        </form>
    );
}

export default TicketForm;
