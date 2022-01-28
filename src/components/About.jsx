import React from 'react';
import Navbar from './Navbar';
import useStyles from './css/MaterialUIStyles';
import { Typography, Avatar, Grid, Box, Divider } from '@material-ui/core';
import Typed from 'react-typed';
import proPic from '../img/pro-picture.png';

const About = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box className={classes.typedContainer}>
                <Grid>
                    <Avatar className={classes.aboutMeAvatar} src={proPic} alt='Trevers pro picture' />
                </Grid>
                <Typography className={classes.aboutMeTitle} variant='h4'>
                    <Typed strings={['Trever Oveson']} typeSpeed={70} />
                </Typography>
                <Divider />

                <Grid
                    container
                    direction="column"
                    // alignItems="center"
                    // justify="center"
                    className={classes.center}
                >


                    <Typography className={classes.aboutMeSubtitle} >
                        is an Inventory Specialist at Clear Home Inc. He has been with the company since 2011 where he has worked his way up from installation technician to lead technician to quality control, and finally to his current position. Throughout his employment he has gained exceptional skills in organization, team coordination, communication, and collaboration.
                    </Typography>


                    <Typography className={classes.aboutMeSubtitle} >
                        Trever loves spending time with his wife Tasha, and their dog Hopper. He enjoys outdoor activities such as snowboarding and mountain biking. He loves music in a wide variety of genres, spending time with family and friends, and traveling.
                    </Typography>
                    <Typography className={classes.aboutMeSubtitle} >
                        Computers have always been an interest for Trever, and he has taken that interest to the next level.  He completed the Full Stack Developer Coding Boot camp through the University of Utah, receiving his certificate of completion in January of 2021. Since graduation he has been employed with the same program as a teaching assistant, sharing his knowledge and passion with each class.
                    </Typography>
                    <Typography className={classes.aboutMeSubtitle} >
                        Trever is continually researching and growing his skills in the programming industry, currently learning React Native to sharpen his skills in mobile and app development.
                    </Typography>
                    {/* <Typography className={classes.aboutMeSubtitle} >
                    Add one or two more things here and you are golden
                    </Typography> */}

                </Grid>

            </Box>
        </>
    )
}

export default About;
