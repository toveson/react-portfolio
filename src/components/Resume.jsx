import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Tooltip
} from '@material-ui/core';
import { GetApp, Language } from '@material-ui/icons'
import useStyles from './css/MaterialUIStyles';
import Navbar from './Navbar';
// image imports
import IMAGES from '../img/index'

const languages = [
    {
        langImg: IMAGES.pdf,
        altImg: 'pdf down load',
        text: 'My Resume',
        docLink: IMAGES.resume,
        btnTxt: 'DOWNLOAD',
        btnIcon: GetApp,
        tooltip: 'CLICK TO DOWNLOAD'
    },
    {
        langImg: IMAGES.html,
        altImg: 'html shield',
        text: 'HTML',
        docLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        btnTxt: 'INFO',
        btnIcon: Language,
        tooltip: 'LEARN MORE'
    },
    {
        langImg: IMAGES.css,
        altImg: 'css shield',
        text: 'CSS',
        docLink: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS',
        btnTxt: 'INFO',
        btnIcon: Language,
        tooltip: 'LEARN MORE'
    },
    {
        langImg: IMAGES.javascript,
        altImg: 'javascript shield',
        text: 'JAVASCRIPT',
        docLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        btnTxt: 'INFO',
        btnIcon: Language,
        tooltip: 'LEARN MORE'
    }
]

const skills = [
    {
        skillImg: IMAGES.reactLogo,
        altImg: 'React Logo',
        text: 'React',
        docLink: 'https://reactjs.org/'
    },
    {
        skillImg: IMAGES.reactNativeLogo,
        altImg: 'React Logo',
        text: 'React Native',
        docLink: 'https://reactnative.dev/'
    },
    {
        skillImg: IMAGES.materialUi,
        altImg: 'Material UI logo',
        text: 'Material Ui',
        docLink: 'https://material-ui.com/'
    },
    {
        skillImg: IMAGES.bootstrap,
        altImg: 'Bootstrap logo',
        text: 'BOOTSTRAP',
        docLink: 'https://getbootstrap.com/'
    },
    {
        skillImg: IMAGES.bulma,
        altImg: 'Bulma logo',
        text: 'BULMA',
        docLink: 'https://bulma.io/'
    },
    {
        skillImg: IMAGES.express,
        altImg: 'express logo',
        text: 'EXPRESS',
        docLink: 'https://expressjs.com/'
    },
    {
        skillImg: IMAGES.git,
        altImg: 'git logo',
        text: 'GIT',
        docLink: 'https://git-scm.com/'
    },
    {
        skillImg: IMAGES.handlebars,
        altImg: 'handlebars logo',
        text: 'HANDLEBARS',
        docLink: 'https://handlebarsjs.com/'
    },
    {
        skillImg: IMAGES.heroku,
        altImg: 'heroku logo',
        text: 'HEROKU',
        docLink: 'https://www.heroku.com/'
    },
    {
        skillImg: IMAGES.jquery,
        altImg: 'jquery logo',
        text: 'JQUERY',
        docLink: ''
    },
    {
        skillImg: IMAGES.mongodb,
        altImg: 'mongodb logo',
        text: 'MONGO DB',
        docLink: ''
    },
    {
        skillImg: IMAGES.mysql,
        altImg: 'mysql logo',
        text: 'MYSQL',
        docLink: ''
    },
    {
        skillImg: IMAGES.node,
        altImg: 'node logo',
        text: 'NODE',
        docLink: ''
    },
    {
        skillImg: IMAGES.passport,
        altImg: 'passport logo',
        text: 'PASSPORT',
        docLink: ''
    },
    {
        skillImg: IMAGES.uikit,
        altImg: 'uikit logo',
        text: 'UIKIT',
        docLink: ''
    },
    {
        skillImg: IMAGES.commandLine,
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
                                    
                                    <Tooltip title={lsItem.tooltip} placement='bottom' >
                                        <Button
                                            variant='outlined' fullWidth={true}
                                            endIcon={<lsItem.btnIcon style={{ color: '#BA5A31' }} />}
                                            className={classes.buttonText}
                                            href={lsItem.docLink}
                                            target='_blank'
                                        >
                                            {lsItem.btnTxt}
                                        </Button>
                                    </Tooltip>
                                
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
                                    <Tooltip title='LEARN MORE' placement='bottom' >
                                        <Button
                                            variant='outlined' fullWidth={true}
                                            endIcon={<Language style={{ color: '#BA5A31' }} />}
                                            className={classes.buttonText}
                                            href={lsItem.docLink}
                                            target='_blank'
                                        >
                                            info
                                        </Button>
                                    </Tooltip>
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
