import React from 'react'; 
import useStyles from './Detection-jss'; 

export default function Detection() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            Hi
        </div>
    )
}
