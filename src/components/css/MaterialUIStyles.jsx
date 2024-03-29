import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#69DC9E',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '.05rem auto',
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    listItem: {
        color: '#304D6D'
    },
    listIcon: {
        color: '#BA5A31'
    },
    mainContainer: {
        background: '#63ADF2',
        height: '100vh',
        // color: '#63ADF2',
    },
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'

    },
    button: {
        color: '#69DC9E',
        margin: '0.5rem',
        borderColor: '#BA5A31'
    },
    textBox: {
        padding: '0 0.5rem',
    },
    contact: {
        color: '#69DC9E',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    avatarHome: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1)

    },
    title: {
        color: '#304D6D'
    },
    subtitle: {
        color: '#BA5A31'
    },
    typedContainer: {
        backgroundColor: '#63ADF2',
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
    },
    textContainer: {
        background: '#304D6D',
    },
    textColor: {
        color: '#69DC9E'
    },
    buttonContainer: {
        color: '#63ADF2'
    },
    portfolioContainer: {
        background: '#63ADF2',
        height: '100%',
    },
    cardContainer: {
        maxWidth: 540,
        margin: '3rem',
        borderRadius: 25
    },
    root: {
        maxWidth: 125,
        padding: 10,
        margin: 12,
    },
    resumeTextColor: {
        color: '#69DC9E',
        fontSize: '0.75rem',
        height: 0
    },
    // resumeCard: {
    //     justifyContent: 'center',
    //     maxWidth: '70%',
    // },
    headerText: {
        color: '#69DC9E',
        fontSize: '2.5rem',
        textAlign: 'center'
    },
    buttonText: {
        color: '#69DC9E!important',
        fontSize: '0.5rem!important',
        borderRadius: 25
    },
    aboutMeAvatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        padding: theme.spacing(1)
    },
    aboutMeTitle: {
        color: '#304D6D',
        margin: 10
    },
    aboutMeSubtitle: {
        padding: 15,
        maxWidth: 1000,
    },
    center: {
        alignContent: 'center',
        justify: 'center'
        
    },
}));

export default useStyles;