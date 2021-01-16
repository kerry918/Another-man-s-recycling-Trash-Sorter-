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


import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListIcon from '@material-ui/icons/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



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
            <section className={clsx(classes.main, {
                [classes.mainShift]: open,
                })}>
                <Typography variant="h3" className={classes.title}>Trash Sorter</Typography>
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
                <div className={classes.text}>
                    {/* <Typography variant="h3">Little Step</Typography>
                    <Typography variant="h4">Save the world! </Typography> */}
                    <Typography variant="p" className={classes.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                    quis leo nec massa mollis elementum vel at nunc. In id nisi eget enim fringilla 
                    suscipit id congue ex. In consectetur a metus</Typography>
                    <br/>
                    <div className={classes.buttonGroup}>
                        <a href="/" className={classes.button}>Identify</a>
                        <a href="https://www.toronto.ca/wp-content/uploads/2018/01/8f02-98b3-A1504070_-PutWasteInPlace_poster_11x17V_6-AODA.pdf" 
                            target="_blank" 
                            rel="noreferrer" 
                            className={classes.button}>
                                Learn More
                        </a>
                    </div>
                </div>
            </section>

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
                <Typography variant="h4">Frontend</Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Nadine" secondary="July 20, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Kerry" secondary="July 20, 2014" />
                    </ListItem>
                </List>

                <Typography variant="h4">Backend</Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Lily" secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Rishi" secondary="Jan 7, 2014" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}
