import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// import NotesIcon from '@mui/icons-material/Notes';
import SegmentIcon from '@mui/icons-material/Segment';
// import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';

import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';

import colors from '../Theming/Colors';
import sizes from '../Theming/sizes';

const drawerWidth = sizes.drawerWidth || 240;

const HeaderComponent = () => {
    const location = useLocation();
    const pathname = location.pathname;
  
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        // {
        //     title: "Home",
        //     link: "/",
        //     active: pathname == '/' ? true : false,
        //     icon: <HomeOutlinedIcon htmlColor={colors.primary} />
        // },
        {
            title: "History",
            link: "/history",
            active: pathname.startsWith('/History'),
            icon: <HistoryOutlinedIcon htmlColor={colors.primary} />
        },
        {
            title: "Emergency Toll",
            link: "/emergency-toll",
            active: pathname.startsWith('/emergency-toll'),
            icon: <AddIcCallOutlinedIcon htmlColor={colors.primary} />
        },
        {
            title: "Profile",
            link: "/profile",
            active: pathname.startsWith('/Profile'),
            icon: <PersonOutlineOutlinedIcon htmlColor={colors.primary} />
        },
        {
            title: "Privacy policy",
            link: "/privacy-policy",
            active: pathname.startsWith('/privacy-policy'),
            icon: <PrivacyTipOutlinedIcon htmlColor={colors.primary} />
        },
        {
            title: "About As",
            link: "/about-us",
            active: pathname.startsWith('/about-us'),
            icon: <PriorityHighRoundedIcon htmlColor={colors.primary} />
        },
        {
            title: "Help and FAQs",
            link: "/help",
            active: pathname.startsWith('/help'),
            icon: <HelpOutlineOutlinedIcon htmlColor={colors.primary} />
        },
        {
            title: "Disclaimer",
            link: "/disclaimer",
            active: pathname.startsWith('/disclaimer'),
            icon: <WarningAmberRoundedIcon htmlColor={colors.primary} />
        }
    ];


    const drawer = (
        <div style={{ height: "100%" }}>
            {/* <Toolbar color='success' /> */}

            <Box sx={{ p: 2 }}>
                <Box sx={{ textAlign: "left" }}>
                    <img src="/etom.jpg" alt="user profile picture" style={{ borderRadius: "50%" }} width="85px" />
                </Box>
                <Typography sx={{ fontSize: "26px", fontWeight: "bolder" }} noWrap>
                    Sunday Etom
                </Typography>
            </Box>

            <Divider sx={{ p: "0.5px", bgcolor: colors.primary }} />

            <List sx={{color: colors.primary }} >
                { menuItems.map((menuItem, index) => (
                    <ListItem key={index} disablePadding sx={ menuItem.active ? { bgcolor: colors.bg } : {} }>
                        <Link to={ menuItem.link } style={{ width: "100%", color: colors.primary, textDecoration: "none" }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    { menuItem.icon }
                                </ListItemIcon>

                                <ListItemText primary={ menuItem.title } />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    
    return (
        <main>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        // backgroundColor: colors.primary
                        backgroundColor: "white",
                        color: "black",
                        boxShadow: "none"
                    }}
                >
                    <Toolbar>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "row",
                            width: '100%',
                            justifyContent: 'space-between',
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                {/* <MenuIcon /> */}
                                {/* <NotesIcon /> */}
                                <SegmentIcon sx={{ transform: "scaleX(-1)"}} />
                            </IconButton>

                            <Typography variant="h6" width="100%" textAlign="center" component="div">
                                MedBot
                            </Typography>

                            <Box>
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                >
                                    <ShortcutOutlinedIcon sx={{ transform: "rotate(-90deg)"}} />
                                </IconButton>

                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        // container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>

                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </main>
    )
}

export default HeaderComponent
