import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { HiMenuAlt3 } from "react-icons/hi"; //Hero Icons
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { ResponsiveBox } from "./utils";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [showMenu, setShowMenu] = useState();

    function calcWidth() {
        if (window.innerWidth < 600) return setShowMenu(true);
        else return setShowMenu(false);
    };
    
    useEffect(() => {
        window.onload = () => calcWidth();
        window.onresize = () => calcWidth();
    }, []);


    return (
        <AppBar position="sticky" color="primary" sx={{ boxShadow: 0 }}>
            <ResponsiveBox>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                        Outsourcing
                    </Typography>
                    {!showMenu && (
                        <Box sx={{ ml: "auto" }}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                disableElevation
                                sx={{ 
                                    color: '#f2fdff', 
                                    fontSize: ".875rem",
                                }}
                            >
                                <Link to="/">Find a Job</Link>
                            </Button>
                            <Button
                                variant="text"
                                color="primary"
                                sx={{ ml: 2, color: '#f2fdff', fontSize: ".875rem" }}
                            >
                                <Link to="/">About Us</Link>
                            </Button>
                            <Button
                                variant="text"
                                color="primary"
                                sx={{ ml: 1, color: '#f2fdff', fontSize: ".875rem" }}
                            >
                                <Link to="/">Contact Us</Link>
                            </Button>
                        </Box>
                    )}
                    {showMenu && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <HiMenuAlt3 />
                        </IconButton>
                    )}
                </Toolbar>
            </ResponsiveBox>
        </AppBar>
    );
};

export default Nav;