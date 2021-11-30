import { FormControl, Paper } from '@mui/material';
import { ResponsiveBox } from "../components/utils";
import styled from '@emotion/styled';
import { theme } from '../mui-theme';

function Contact () {
    return(
        <>
        <ResponsiveBox component={Paper}>
            <FormControl sx={controlStyle2} >
                <ItemHeader htmlFor="name">Name: </ItemHeader>
                <input type="text" id="name" required />
                <ItemHeader htmlFor="email">Email: </ItemHeader>
                <input type="email" id="email" required />
                <ItemHeader htmlFor="message">Message: (testing lang itong laman) </ItemHeader>
                <textarea id="message" required rows='5'></textarea> 
            </FormControl>
        </ResponsiveBox>
        </>
    )
}


export default Contact;

const ItemHeader = styled.h3`
    color: ${theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -8%;
`

const controlStyle2 = {
    width: "clamp(15rem, 30%, 20rem)",
    border: 0,
    outline: 0,
    mr: 2,
    fontSize: ".875rem",
};