import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import CalculateIcon from '@mui/icons-material/Calculate';


const NavBar = () => {
    return (
        <AppBar position={'static'}>
            <Toolbar>
                <CalculateIcon/>
                <Typography
                    variant={"h6"}
                    component={"div"}
                    sx={{paddingLeft: 1,
                    flexGrow: 1}}
                >
                    GPA Calculator
                </Typography>
                <IconButton
                    aria-label={'github'}
                    component="a"
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon sx={{color: "white", fontSize: 32}} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;