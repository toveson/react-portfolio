import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../img/trever-avatar.png';

// CSS styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1)

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
        height: '100vh',
        textAlign: 'center',
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
            <Avatar className={classes.avatar} src={avatar} alt='Trevers avatar' />
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={['Trever Oveson']} typeSpeed={70} />
            </Typography>
                {/* <Divider /> */}
            <Typography className={classes.subtitle} variant='h5'>
                <Typed strings={['Web Development Skills: ']} typeSpeed={100} startDelay={1300} />
            </Typography>
            <Typography className={classes.subtitle} variant='h5'>
                <Typed 
                strings={[
                    'HTML',
                    'CSS',
                    'Git',
                    'Bootstrap',
                    'Heroku',
                    'JavaScript',
                    'JQuery',
                    'Command Line',
                    'APIs',
                    'UIKit',
                    'Bulma',
                    'Material UI',
                    'Handlebars',
                    'Node.js',
                    'Express js',
                    'MongoDB',
                    'MySQL',
                    'Passport js',
                    'React.js'
                    ]} 
                    startDelay={4400}
                    typeSpeed={70} 
                    backSpeed={40}
                    backDelay={1000}
                    shuffle={true}
                    loop
                    />
            </Typography>
        </Box>
    )
}

export default Header
