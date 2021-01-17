import React from 'react'; 
import useStyles from './Detection-jss'; 
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function Detection() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.title}>Trash Sorter</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2>Hello</h2>
                </Grid>
                <Grid item xs={6}>
                <h2>Hello</h2>
                </Grid>
                <Grid item xs={6}>
                <h2>Hello</h2>
                </Grid>
            </Grid>
        </div>
        
    )
}
