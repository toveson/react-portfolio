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
        height: '100vh'
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
    }
}));

export default useStyles;