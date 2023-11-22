import colors from "../Theming/Colors"
import sizes from "../Theming/sizes";

import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = sizes.drawerWidth || 240;


const FooterComponent = () => {
    const hello = (e: any, aaa: any) => {
        console.log(e, aaa);
    }

    return (
        <Box>
            <CssBaseline />

            <Paper elevation={3}
                sx={{ 
                    position: 'fixed',
                    bottom: 0, left: 0, right: 0, 

                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <BottomNavigation
                    showLabels
                    // value={value}
                    onChange={(event, newValue) => {
                        // setValue(newValue);
                        hello(event, newValue);
                    }}
                    sx={{ bgcolor: colors.bg, }}
                >
                    <BottomNavigationAction sx={{ color: colors.primary }} label="Home" icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction sx={{ color: colors.primary }} label="Bot" icon={<SmsOutlinedIcon />} />
                    <BottomNavigationAction sx={{ color: colors.primary }} label="Notification" icon={<NotificationsOutlinedIcon />} />
                </BottomNavigation>
            </Paper>

        </Box>
    )
}

export default FooterComponent