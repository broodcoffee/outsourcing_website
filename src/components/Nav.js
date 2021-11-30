import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { ResponsiveBox } from "./utils";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import { theme as customTheme } from "../mui-theme";
import { useGlobalDataContext } from "../App";


function Nav() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { setPageName } = useGlobalDataContext();


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
                    {!isMobile ? (
                        <Box>
                            <StyledLink 
                                onClick={()=>setPageName("jobs")} 
                                className="route-links" 
                                to="/jobs"
                            >
                                Jobs
                            </StyledLink>&nbsp;
                            <StyledLink
                                onClick={()=>setPageName("workers")} 
                                className="route-links" 
                                to="/workers"
                            >
                                Workers
                            </StyledLink>
                            <StyledLink className="route-links" to="/about">About Us</StyledLink>
                            <StyledLink className="route-links" to="/contact">Contact Us</StyledLink>
                        </Box>
                    ) : (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon htmlColor={customTheme.palette.grey[600]}/>
                        </IconButton>
                    )}
                </Toolbar>
            </ResponsiveBox>
        </NavContainer>
    );
}

export default Nav;

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
// const StyledLink1 = styled(Link)`
//     border-radius: .25rem;
//     background-color: var(--color2);
//     color: var(--color5);
//     display: inline-block;
//     font-size: .875rem;
//     font-weight: 600;
//     text-decoration: none;
//     padding: .5rem .875rem;
//     transition: background-color .2s;

//     &:hover {
//         background-color: var(--color1);
//     }
// `