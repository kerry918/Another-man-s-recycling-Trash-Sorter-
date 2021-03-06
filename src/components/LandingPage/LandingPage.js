import React from 'react'; 
import clsx from 'clsx';
import useStyles from './LandingPage-jss'; 
import { useTheme } from '@material-ui/core/styles';
import Video from '../../images/video.mp4'; 

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

import ListIcon from '@material-ui/icons/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Rishi from '../../images/Rishi.png'; 
import Kellin from '../../images/Kellin.png'; 
import Calbee from '../../images/Calbee.png'; 
import Machi from '../../images/Machi.png'; 

export default function LandingPage() {

    const classes = useStyles(); 
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <div className={clsx(classes.main, {
                [classes.mainShift]: open,
                })}>
                <div className={classes.header}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <ListIcon className={classes.toggle}/>
                    </IconButton>
                </div>
                <video src={Video} muted loop autoPlay className={classes.video}></video>
                <div className={classes.overlay}></div>

                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Typography variant="h3" className={classes.title}>Trash Sorter</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <div className={classes.text}>
                            {/* <Typography variant="h3">Little Step</Typography>
                            <Typography variant="h4">Save the world! </Typography> */}
                            <Typography variant="p" className={classes.desc}>
                                It makes a big difference to recycle. It makes a big difference to use recycled 
                                products. It makes a big difference to reuse things to not use the paper cup - 
                                and each time you do, that’s a victory. 
                                - Emily Deschanel
                            </Typography>
                            <br/>
                            <div className={classes.buttonGroup}>
                                <a href="/detection" className={classes.button}>Identify</a>
                                <a href="https://www.toronto.ca/wp-content/uploads/2018/01/8f02-98b3-A1504070_-PutWasteInPlace_poster_11x17V_6-AODA.pdf" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className={classes.button}>
                                        Learn More
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <div className={classes.side}>
                    <Typography variant="h4">Frontend</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={Calbee}/>
                            </ListItemAvatar>
                            <ListItemText primary="Nadine Lin"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={Machi}/>
                            </ListItemAvatar>
                            <ListItemText primary="Kerry Liu"/>
                        </ListItem>
                    </List>

                    <Typography variant="h4">Backend</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={Kellin}/>
                            </ListItemAvatar>
                            <ListItemText primary="Lily Tao"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={Rishi}/>
                            </ListItemAvatar>
                            <ListItemText primary="Rishi Vimalendran"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}
