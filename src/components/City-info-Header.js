import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../style/Home.css"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CityInfoHeader() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} style={{backgroundColor: "rgba(0,0,0,0)",borderStyle:"none"}}>
                <Grid  item xs={12}>
                    <div className="city-name">
                        <h1>Athens</h1>

                        <hr />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="city-info">
                        <p>Η Αθήνα είναι η πρωτεύουσα της Ελλάδας από το 1834 και η μεγαλύτερη και πιο πυκνοκατοικημένη πόλη της χώρας. Το λεκανοπέδιο της Αθήνας μαζί με τον Πειραιά έχει πληθυσμό 3.218.250 κατοίκους περίπου. Πήρε το όνομά της από τη θεά Αθηνά. Βρίσκεται στην Αττική, στην ανατολική Στερεά Ελλάδα, και είναι από τις αρχαιότερες πόλεις του κόσμου, με την καταγεγραμμένη ιστορία της να φθάνει ως το 3.200 π.Χ.[1]</p>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CityInfoHeader