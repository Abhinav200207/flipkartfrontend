import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drop, setDrop] = React.useState(true);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setDrop(!drop);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setDrop(!drop)
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseEnter={handleClick}
                style={{ "color": "white", "textTransform": "capitalize" }}
            >
                More
                {drop ? <ArrowDropDown style={{ "color": "white" }} /> : <ArrowDropUp />}
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem style={{ "borderBottom": "1px solid black" }} onClick={handleClose}><NotificationsIcon /> Notification Preferences</MenuItem>
                <MenuItem style={{ "borderBottom": "1px solid black" }} onClick={handleClose}><LiveHelpIcon /> 24x7 Customer Care</MenuItem>
                <MenuItem style={{ "borderBottom": "1px solid black" }} onClick={handleClose}><ShowChartIcon /> Advertise</MenuItem>
                <MenuItem onClick={handleClose}><DownloadIcon /> Download App</MenuItem>
            </Menu>
        </div>
    );
}
