import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from '@material-ui/core';
import { GitHub, Language } from '@material-ui/icons'
import Navbar from './Navbar';
import taskably from '../img/projectImages/taskablyDash.png';
import burger from '../img/projectImages/burger.png';
import weather from '../img/projectImages/dayPlanner.png';
import pets from '../img/projectImages/petsFurever.png';
import budget from '../img/projectImages/budgetTracker.png';
import workout from '../img/projectImages/workoutTracker.png';
import useStyles from './css/MaterialUIStyles';

const projectInfo = [
    {
        projectTitle: 'Taskably 2.0',
        projectImg: taskably,
        projectAltImg: 'Taskably Dashboard',
        ProjectDescription: 'A program to manage products, orders, employees, and customers.',
        ProjectGitHub: 'https://github.com/toveson/taskably-2.0',
        ProjectLiveSite: 'https://arcane-sands-96523.herokuapp.com/'
    },
    {
        projectTitle: 'Pets Furever',
        projectImg: pets,
        projectAltImg: 'pets furever landing page',
        ProjectDescription: 'A simple site to help you find a dog to adopt.',
        ProjectGitHub: 'https://github.com/toveson/pets-furever',
        ProjectLiveSite: 'https://toveson.github.io/pets-furever/'
    },
    {
        projectTitle: 'Weather Dashboard',
        projectImg: weather,
        projectAltImg: 'weather dashboard landing page',
        ProjectDescription: 'Easily search a city to get the current weather as well as a five day forecast.',
        ProjectGitHub: 'https://github.com/toveson/password-generator',
        ProjectLiveSite: 'https://toveson.github.io/Weather-Dashboard/'
    },
    {
        projectTitle: 'Workout-Tracker',
        projectImg: workout,
        projectAltImg: 'workout tracker dashboard',
        ProjectDescription: 'An app that allows the user to create and continue workouts. The user can also view their workout time and weight from a given day on the dashboard page.',
        ProjectGitHub: 'https://github.com/toveson/Workout-Tracker',
        ProjectLiveSite: 'https://dry-taiga-10687.herokuapp.com/'
    },
    {
        projectTitle: 'budget-tracker',
        projectImg: budget,
        projectAltImg: 'budget tracker landing page',
        ProjectDescription: 'A budget app that lets the user enter information on and offline. If entered while offline it will add the new entries when the user goes back online. The user can also Download the app on any device.',
        ProjectGitHub: 'https://github.com/toveson/budget-tracker',
        ProjectLiveSite: 'https://safe-tundra-10565.herokuapp.com/'
    },
    {
        projectTitle: 'Eat-Da-Burger-!',
        projectImg: burger,
        projectAltImg: 'eat da burger landing page',
        ProjectDescription: 'A one page app that allows the user to Enter burger names and the devour them!',
        ProjectGitHub: 'https://github.com/toveson/Eat-Da-Burger-',
        ProjectLiveSite: 'https://calm-fortress-81607.herokuapp.com/'
    }
]

const Portfolio = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box component='div' className={classes.portfolioContainer}>
                <Grid container justify='center'>
                    {projectInfo.map((lsItem, key) => (
                        <Grid item key={key}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        alt={lsItem.projectAltImg}
                                        height='280'
                                        image={lsItem.projectImg}
                                    />
                                    <CardContent className={classes.textContainer}>
                                        <Typography gutterBottom variant='h5' className={classes.textColor}>
                                            {lsItem.projectTitle}
                                        </Typography>
                                        <Typography variant='body2' color='textSecondary' component='p' className={classes.textColor}>
                                            {lsItem.ProjectDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                                        <IconButton
                                            size='small'
                                            className={classes.buttonContainer}
                                            style={{ background: '#69DC9E' }}
                                            href={lsItem.ProjectGitHub} target='_blank'
                                        >
                                            <GitHub style={{ color: '#BA5A31' }} />
                                        </IconButton>
                                        <IconButton
                                            size='small'
                                            className={classes.buttonContainer}
                                            style={{ background: '#69DC9E' }}
                                            href={lsItem.ProjectLiveSite} target='_blank'
                                        >
                                            <Language style={{ color: '#BA5A31' }} />
                                        </IconButton>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio;