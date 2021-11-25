import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { ResponsiveBox } from "./utils";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';

const NavContainer = styled(AppBar)`
    background-color: var(--color5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    /* box-shadow: 0 2px 6px rgba(0,0,0,0.25); */
`;
const StyledLink = styled(Link)`
    color: var(--gray4);
    font-size: .875rem;
    font-weight: 600;
    margin-left: clamp(1rem, 3vmin, 2.5rem);
    position: relative;
    text-decoration: none;
    letter-spacing: -.5px;

    &::after {
            content: '';
            height: 2px;
            width: 0;
            transition: .2s;
            position: absolute;
            bottom: -.25rem;
            left: 0;
            background-color: var(--color2);
        }

    &:hover:not(.active) {
        &::after {
            width: 100%;
        }
    }
`;



function Nav() {
    const [showMenu, setShowMenu] = useState();

    function calcWidth() {
        if (window.innerWidth < 600)
            return setShowMenu(true);
        else
            return setShowMenu(false);
    };

    useEffect(() => {
        window.onload = () => calcWidth();
        window.onresize = () => calcWidth();
    }, []);


    return (
        <NavContainer position="sticky" color="default" sx={{ boxShadow: 0 }}>
            <ResponsiveBox>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 .25rem',
                    borderBottom: '1px solid var(--gray1)'
                }}>
                    <Typography variant="h6" color="primary" sx={{ fontSize: "1rem" }}>
                        Outsourcing
                    </Typography>
                    {!showMenu && (
                        <Box>
                            <StyledLink className="route-links" to="/">Find Jobs</StyledLink>
                            <StyledLink className="route-links" to="/about">About Us</StyledLink>
                            <StyledLink className="route-links" to="/contact">Contact Us</StyledLink>
                        </Box>
                    )}
                    {showMenu && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon htmlColor="#546e7a"/>
                        </IconButton>
                    )}
                </Toolbar>
            </ResponsiveBox>
        </NavContainer>
    );
}

export default Nav;