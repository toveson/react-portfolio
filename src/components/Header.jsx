import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import proPicture from '../img/pro-picture.png';

const Header = () => {
    return (
        <Box>
            <Avatar src={proPicture} alt='Trevers avatar' />
            <Typography variant='h4'>

            </Typography>
        </Box>
    )
}

export default Header
