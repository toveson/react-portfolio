import React from 'react';
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
import resume from '../img/resumeImages/trever-oveson-resume.pdf';
import reactLogo from '../img/resumeImages/spinning-react.gif';

import useStyles from './css/MaterialUIStyles';

const languages = [
    {
        langImg: pdf,
        altImg: 'pdf down load',
        text: 'My Resume',
        docLink: resume,
        btnTxt: 'DOWNLOAD',
        btnIcon: GetApp
    },
    {
        langImg: html,
        altImg: 'html shield',
        text: 'HTML',
        docLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        btnTxt: 'INFO',
        btnIcon: Language
    },
    {
        langImg: css,
        altImg: 'css shield',
        text: 'CSS',
        docLink: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS',
        btnTxt: 'INFO',
        btnIcon: Language
    },
    {
        langImg: javascript,
        altImg: 'javascript shield',
        text: 'JAVASCRIPT',
        docLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        btnTxt: 'INFO',
        btnIcon: Language
    }
]

const skills = [
    {
        skillImg: reactLogo,
        altImg: 'React Logo',
        text: 'React',
        docLink: 'https://reactjs.org/'
    },
    {
        skillImg: reactLogo,
        altImg: 'React Logo',
        text: 'React Native',
        docLink: 'https://reactnative.dev/'
    },
    {
        skillImg: materialUi,
        altImg: 'Material UI logo',
        text: 'Material Ui',
        docLink: 'https://material-ui.com/'
    },
    {
        skillImg: bootstrap,
        altImg: 'Bootstrap logo',
        text: 'BOOTSTRAP',
        docLink: 'https://getbootstrap.com/'
    },
    {
        skillImg: bulma,
        altImg: 'Bulma logo',
        text: 'BULMA',
        docLink: 'https://bulma.io/'
    },
    {
        skillImg: express,
        altImg: 'express logo',
        text: 'EXPRESS',
        docLink: 'https://expressjs.com/'
    },
    {
        skillImg: git,
        altImg: 'git logo',
        text: 'GIT',
        docLink: 'https://git-scm.com/'
    },
    {
        skillImg: handlebars,
        altImg: 'handlebars logo',
        text: 'HANDLEBARS',
        docLink: 'https://handlebarsjs.com/'
    },
    {
        skillImg: heroku,
        altImg: 'heroku logo',
        text: 'HEROKU',
        docLink: 'https://www.heroku.com/'
    },
    {
        skillImg: jquery,
        altImg: 'jquery logo',
        text: 'JQUERY',
        docLink: ''
    },
    {
        skillImg: mongodb,
        altImg: 'mongodb logo',
        text: 'MONGO DB',
        docLink: ''
    },
    {
        skillImg: mysql,
        altImg: 'mysql logo',
        text: 'MYSQL',
        docLink: ''
    },
    {
        skillImg: node,
        altImg: 'node logo',
        text: 'NODE',
        docLink: ''
    },
    {
        skillImg: passport,
        altImg: 'passport logo',
        text: 'PASSPORT',
        docLink: ''
    },
    {
        skillImg: uikit,
        altImg: 'uikit logo',
        text: 'UIKIT',
        docLink: ''
    },
    {
        skillImg: commandLine,
        altImg: 'command logo',
        text: 'CLI',
        docLink: ''
    },
]

const Resume = () => {
    const classes = useStyles();

    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />

            <Typography variant='h5' className={classes.headerText}>
                Resume and Languages
            </Typography>
            <Grid container>
                {/* resume and languages */}
                <Grid container justify='center' width='200' >
                    {languages.map((lsItem, key) =>
                        <Grid item key={key} className={classes.root}>
                            <Card>
                                <CardMedia
                                    component='img'
                                    alt={lsItem.altImg}
                                    image={lsItem.langImg}
                                    height='100'
                                    width='200'
                                    className={classes.resumeCard}
                                />
                                <CardContent className={classes.textContainer}>
                                    <Typography variant='h5' align={'center'} className={classes.resumeTextColor}>
                                        {lsItem.text}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                                    <Button
                                        variant='outlined' fullWidth={true}
                                        endIcon={<lsItem.btnIcon style={{ color: '#BA5A31' }} />}
                                        className={classes.buttonText}
                                        href={lsItem.docLink}
                                        target='_blank'
                                    >
                                        {lsItem.btnTxt}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Grid>

            <Typography variant='h5' className={classes.headerText}>
                Skills and Libraries
            </Typography>

            <Grid container justify='center' >
                {/* skill and Libraries */}
                <Grid
                    container
                    style={{
                        justifyContent: 'center',
                        maxWidth: '70%',
                    }}
                >

                    {skills.map((lsItem, key) =>
                        <Grid item key={key} className={classes.root}>
                            <Card>
                                <CardMedia
                                    component='img'
                                    alt={lsItem.altImg}
                                    height='100'
                                    image={lsItem.skillImg}
                                />
                                <CardContent className={classes.textContainer}>
                                    <Typography variant='h5' align={'center'} className={classes.resumeTextColor}>
                                        {lsItem.text}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                                    <Button
                                        variant='outlined' fullWidth={true}
                                        endIcon={<Language style={{ color: '#BA5A31' }} />}
                                        className={classes.buttonText}
                                        href={lsItem.docLink}
                                        target='_blank'
                                    >
                                        info
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Grid>

        </Box>
    )
}

export default Resume;
