import React from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import emailjs from 'emailjs-com';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portfolio', 'portfolio', e.target, 'user_fGSH8JqLjfyEeupbUAZyr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#69DC9E'
        },
        '& label': {
            color: '#69DC9E'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#BA5A31'
            },
            '&:hover fieldset': {
                borderColor: '#BA5A31'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#BA5A31'
            }
        }
    }
})(TextField);

const useStyles = makeStyles(theme => ({
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
}))



export default function Contact() {
    const classes = useStyles();

    // for modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Navbar />
            <Box component='div' className={classes.mainContainer}>
                <Grid container justify='center'>
                    <Box component='form' onSubmit={sendEmail} className={classes.form} style={{ background: '#304D6D' }} borderRadius={16}>
                        <Typography variant='h5' className={classes.contact}>
                            Contact me
                        </Typography>
                        <InputField
                            className={classes.textBox}
                            fullWidth={true}
                            label='Name'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            name='name'
                        />
                        <InputField
                            className={classes.textBox}
                            fullWidth={true}
                            label='Email'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            name='email'
                        />
                        <InputField
                            className={classes.textBox}
                            fullWidth={true}
                            label='Subject'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            name='subject'
                        />
                        <InputField
                            className={classes.textBox}
                            fullWidth={true}
                            label='Message'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            multiline={true}
                            name='message'
                        />
                        <Grid style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true}
                                endIcon={<Send style={{ color: '#BA5A31' }} />}
                                className={classes.button}
                                type='submit'
                                onClick={handleClickOpen}
                            >
                                Send
                            </Button>

                            {/* modal */}
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Your message has been sent!"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Thank you for taking the time to contact me!
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}