import React from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portfolio', 'portfolio', e.target, 'user_fGSH8JqLjfyEeupbUAZyr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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


const useStyles = makeStyles(theme=>({
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
        marginTop: '1rem',
        color: '#69DC9E',
        borderColor: '#BA5A31'
    },
    contact: {
        color: '#69DC9E',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
}))


const Contact = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box component='Div' className={classes.mainContainer}>
                <Grid container justify='center'>
                    <Box component='form' onSubmit={ sendEmail } className={classes.form} style={{  background: '#304D6D' }}>
                        <Typography variant='h5' className={classes.contact}>
                            Contact me
                        </Typography>
                        <InputField
                            fullWidth={true}
                            label='Name'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            name='name'
                        />
                        <InputField
                            fullWidth={true}
                            label='Email'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            name='email'
                        />
                        <InputField
                            fullWidth={true}
                            label='Subject'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            name='message'
                        />
                        <InputField
                            fullWidth={true}
                            label='Message'
                            variant='outlined'
                            inputProps={{ style: { color: '#69DC9E' } }}
                            margin='dense'
                            size='medium'
                            multiline
                            name='message'
                        />
                        <Grid style={{ display: 'flex', justifyContent: 'center', background: '#304D6D' }}>
                            <Button
                                variant='outlined' fullWidth={true} endIcon={<Send style={{ color: '#BA5A31' }} />}
                                className={classes.button}
                                type='submit'
                            >
                                Send 
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
        </Box>
        </>
    )
}

export default Contact;
