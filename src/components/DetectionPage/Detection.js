import React, {Component} from 'react'; 

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        background: "#DBDFDF", 
        height: '100vh', 
        padding: '50px 187px'
    }, 
    title: {
        fontFamily: 'Poppins', 
        fontWeight: '600',
        fontSize: '72px',
        color: '#997D5B',
    }, 
    card: {
        background: '#C4C4C4',
        borderRadius: '34px',
        height: '500px'
    }, 
    upload:{
        fontFamily: 'Poppins', 
        color: '#5C4A33',
        fontWeight: '600',
        fontSize: '18px',
        cursor: 'pointer',
        margin: '10px',
        background: '#C8B092',
        borderRadius: '7px',
        padding: '14px 5px'
    }, 
    button:{
        display: 'flex', 
        textAlign: 'center', 
    },
    submit:{
        fontFamily: 'Poppins', 
        color: '#5C4A33',
        fontWeight: '600',
        fontSize: '18px',
        cursor: 'pointer',
        background: '#C8B092',
        borderRadius: '7px',
        padding: '14px 57px', 
        margin: '10px'
    }, 
    result:{
        fontWeight: '600',
        fontSize: '64px',
        lineHeight: '96px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins',
        color: '#5C4A33',
        margin: '20% 0'
    }
});

class Detection extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          result: 'Waiting for Submition'
        };
        
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
    };

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Button href="/landingpage">Back to Home</Button>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.title}>Trash Sorter</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img src={this.state.image} width="90%" alt="trash"/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h3' className={classes.result}>{this.state.result}</Typography>
                    </Grid>
                    <Grid container spacing={3} className={classes.button}>
                        <Grid item xs={12} sm={4}>
                            <input type="file" name="myImage" onChange={this.onImageChange}  className={classes.upload}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button className={classes.submit}>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Detection);