import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../img/trever-avatar.png';
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
    LinkedIn
} from '@material-ui/icons';
import useStyles from './css/MaterialUIStyles';

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'HOME',
        listPath: '/'
    },
    {
        listIcon: <Person />,
        listText: 'ABOUT ME',
        listPath: '/about'
    },
    {
        listIcon: <Apps />,
        listText: 'PORTFOLIO',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'CONTACT ME',
        listPath: '/contact'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'RESUME',
        listPath: '/resume'
    },
    {
        listIcon: <GitHub />,
        listText: 'GITHUB',
        listPath: '/github',
        target: '_blank'
    },
    {
        listIcon: <LinkedIn />,
        listText: 'LINKEDIN',
        listPath: '/linkedin',
        target: '_blank'
    },
    {
        listIcon: <MenuOpen />,
        listText: 'CLOSE MENU'
    },
]

// update the name of the page on the navbar
const usePathname = () => {
    const location = useLocation();
    const path = location.pathname;
    const locationObject = menuItems.find( ({ listPath }) => listPath === path)
    const text = locationObject.listText;

    return text;
}

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
                    <ListItem button key={key} component={Link} to={lsItem.listPath} target={lsItem.target}>
                            

                        <ListItemIcon className={classes.listIcon}>
                            {lsItem.listIcon}
                        </ListItemIcon>

                        <ListItemText primary={lsItem.listText} className={classes.listItem} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        // <>
            <Box component='nav'>
                {/* position='fixed'   for sticky navbar */}
                <AppBar position='static' style={{ background: '#304D6D' }}>
                    <Toolbar>
                        <IconButton
                            onClick={toggleSideNav('right', true)}
                            style={{ background: '#69DC9E' }}
                        >
                            <Menu style={{ color: '#BA5A31' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#69DC9E', paddingLeft: '0.5rem' }}>
                            {usePathname()}
                        </Typography>
                        <MobilRightMenuSlider
                            open={state.right}
                        >
                            {sideNav('right')}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        // </>
    )
}

export default Navbar;
