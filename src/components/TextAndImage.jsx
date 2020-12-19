import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box, Divider } from '@material-ui/core';
import Typed from 'react-typed';
import proPic from '../img/pro-picture.png';

// CSS styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        padding: theme.spacing(1)
    },
    title: {
        color: '#304D6D'
    },
    subtitle: {
        color: '#ba5a31'
    },
    typedContainer: {
        backgroundColor: '#63ADF2',
        width: '100vw',
        height: '100vh'
    }
}));


const TextAndImage = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            {/* <Typography className={classes.title}>
                About Me
            </Typography>
            <Divider /> */}
            <Grid>
                <Avatar className={classes.avatar} src={proPic} alt='Trevers pro picture' />
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={['Trever Oveson']} typeSpeed={70} />
            </Typography>
            <Divider />
            <Typography className={classes.subtitle} >
                    currently an Inventory Specialist at Clear Home Inc, where he manages and orders equipment for multiple offices. He ensures that equipment is properly consumed nationwide, while coordinating with the senior inventory manager and regional managers to make sure the needs of everyoffice are met. He has been working with Clear Home since 2011 where he started as an installation technician. Shortly after he was promoted to a lead technician managing other technicians in the company. In 2017 he was brought into a corporate role doing quality control on installations. This position evolved into Regional Field Supervisor the following year, where he supported offices across the country while working with regional managers as well as the inventory team to make sure the needs of the company were met. All of this was done while traveling the country. Towards the end of 2019 he accepted a position with the inventory team that allowed him to stay home and occasionally completing DirecTV, Viasat, and Nest installations.
            </Typography>
            <Typography className={classes.subtitle} >
                
                   Now that he no longer travels for work he is able to spend much more time with his wife, Tasha and their dog, Hopper. He also gets to spend more time doing the things he enjoys. In the winter you will find him snowboarding every chance he gets. During the 2019 season he completed 105,000 vertical feet. In the summer he has started mountain biking, enjoying several types of courses, including jump track, downhill, and single tracks. While he did enjoy traveling (he has worked in 47 states and been to 48!) and going to local breweries, being home has allowed him to pursue new interests. He is also a music fan and listens to a wide variety of genres. He enjoys a good concert with family and friends. Computers have always been an interest of his and after several years of wanting to continue his education he has enrolled at the University of Utah in their Full Stack Web Development course.
                
            </Typography>
            

        </Box>
    )
}

export default TextAndImage;
