import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import { GetApp, Language } from '@material-ui/icons'
import Navbar from './Navbar';
// image imports
import pdf from '../img/resumeImages/pdf-logo-128.png';
import materialUi from '../img/resumeImages/material-ui-logo.png';
import html from '../img/resumeImages/html-5-logo.png';
import css from '../img/resumeImages/css3-logo.png';
import javascript from '../img/resumeImages/javascript-logo.png';
import bootstrap from '../img/resumeImages/bootstrap-logo.png';
import bulma from '../img/resumeImages/bulma-logo.png';
import commandLine from '../img/resumeImages/command-line-logo.jpg';
import express from '../img/resumeImages/express-js-logo.png';
import git from '../img/resumeImages/Git-logo.png';
import handlebars from '../img/resumeImages/handlebars-logo.png';
import heroku from '../img/resumeImages/heroku-logo.png';
import jquery from '../img/resumeImages/jquery-logo.jpg';
import mongodb from '../img/resumeImages/mongodb-log.png';
import mysql from '../img/resumeImages/mysql-logo.png';
import node from '../img/resumeImages/node-js-log.png';
import passport from '../img/resumeImages/passport-logo.png';
import uikit from '../img/resumeImages/uikit-logo.png';
import resume from '../img/resumeImages/Trever Oveson Resume.pdf';

const useStyles = makeStyles({
    mainContainer: {
        background: '#63ADF2',
        // height: '100'
    },
    root: {
        maxWidth: 125,
        padding: 10,
        margin: 12
    },
    textColor: {
        color: '#69DC9E',
        fontSize: '0.75rem',
        height: 0
    },
    headerText: {
        color: '#69DC9E',
        fontSize: '2.5rem',
        textAlign: 'center'
    },
    textContainer: {
        background: '#304D6D',
    },
    buttonText: {
        color: '#69DC9E',
        fontSize: '0.5rem'
    }
});

const Resume = () => {
    const classes = useStyles();

    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />

            <Typography variant='h5' className={classes.headerText}>
                Resume and Languages
            </Typography>
            <Grid container justify='center'>
                {/* resume download */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='pdf icon'
                            height='100'
                            image={pdf}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                My Resume
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<GetApp style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                // <a link href="./assets/Resume.pdf" target="_blank">Click here for a pdf of my resume</a>
                                href={resume}
                                target='_blank'
                            >
                                Download
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* html */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='html icon'
                            height='100'
                            image={html}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                HTML
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* css */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='css icon'
                            height='100'
                            image={css}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                CSS
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://developer.mozilla.org/en-US/docs/Glossary/CSS'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* javascript */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='javascript icon'
                            height='100'
                            image={javascript}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                JAVASCRIPT
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant='h5' className={classes.headerText}>
                Skills and Libraries
            </Typography>
            <Grid container justify='center'>
                {/* material ui */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='material ui icon'
                            height='100'
                            image={materialUi}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                Material Ui
                            </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://material-ui.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* bootstrap */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='bootstrap icon'
                            height='100'
                            image={bootstrap}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                BOOTSTRAP
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://getbootstrap.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* bulma */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='bulma icon'
                            height='100'
                            image={bulma}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                BULMA
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://bulma.io/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* express */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='express icon'
                            height='100'
                            image={express}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                EXPRESS
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://expressjs.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* git */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='git icon'
                            height='100'
                            image={git}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                GIT
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://git-scm.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* handlebars */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='handlebars icon'
                            height='100'
                            image={handlebars}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                HANDLEBARS
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://handlebarsjs.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* heroku */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='heroku icon'
                            height='100'
                            image={heroku}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                HEROKU
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://www.heroku.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* jquery */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='jquery icon'
                            height='100'
                            image={jquery}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                JQUERY
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://jquery.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* mongodb */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='mongodb icon'
                            height='100'
                            image={mongodb}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                MONGODB
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://www.mongodb.com/what-is-mongodb'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* mysql */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='mysql icon'
                            height='100'
                            image={mysql}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                MYSQL
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://www.mysql.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* node */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='node icon'
                            height='100'
                            image={node}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                NODE JS
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://nodejs.org/en/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* passport */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='passport icon'
                            height='100'
                            image={passport}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                PASSPORT
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='http://www.passportjs.org/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* uikit */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='uikit icon'
                            height='100'
                            image={uikit}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                UIKIT
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://getuikit.com/'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* commandLine */}
                <Grid className={classes.root}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='commandLine icon'
                            height='100'
                            image={commandLine}
                        />
                        <CardContent className={classes.textContainer}>
                            <Typography variant='h5' className={classes.textColor}>
                                COMMAND
                                </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Language style={{ color: '#BA5A31' }} />}
                                className={classes.buttonText}
                                href='https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options'
                                target='_blank'
                            >
                                info
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Resume;
