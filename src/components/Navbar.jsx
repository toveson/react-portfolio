import React, { useState } from 'react';
import avatar from '../img/trever-avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core';
import {
    Menu,
    MenuOpen,
    AssignmentInd,
    Home,
    Apps,
    Person,
    ContactMail,
    GitHub,
    LinkedIn,
    Facebook
} from '@material-ui/icons'

// CSS styles
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
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'HOME'
    },
    {
        listIcon: <Person />,
        listText: 'ABOUT ME'
    },
    {
        listIcon: <Apps />,
        listText: 'PORTFOLIO'
    },
    {
        listIcon: <GitHub />,
        listText: 'GITHUB'
    },
    {
        listIcon: <Facebook />,
        listText: 'FACEBOOK'
    },
    {
        listIcon: <LinkedIn />,
        listText: 'LINKEDIN'
    },
    {
        listIcon: <ContactMail />,
        listText: 'CONTACT ME'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'RESUME'
    },
    {
        listIcon: <MenuOpen />,
        listText: 'CLOSE MENU'
    },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSideNav = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });

    const classes = useStyles()

    const sideNav = slider => (
        <Box
            className={classes.menuSliderContainer}
            component='div'
            onClick={toggleSideNav('right', false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt='Trevers avatar' />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>

                        {/* weird circle shape for some reason */}
                        {/* <IconButton style={{ background: '#304D6D' }}> */}
                            <ListItemIcon className={classes.listIcon}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                        {/* </IconButton> */}
                        <ListItemText primary={lsItem.listText} className={classes.listItem} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Box component='nav'>
                <AppBar position='static' style={{ background: '#304D6D' }}>
                    <Toolbar>
                        <IconButton
                            onClick={toggleSideNav('right', true)}
                            style={{ background: '#69DC9E' }}
                        >
                            <Menu style={{ color: '#BA5A31' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#69DC9E' }}>
                            Portfolio
                    </Typography>
                        <MobilRightMenuSlider
                            open={state.right}
                        >
                            {sideNav('right')}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
