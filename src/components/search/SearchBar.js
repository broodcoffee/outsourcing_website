import {
    Box,
    InputLabel,
    OutlinedInput,
    FormControl,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../mui-theme";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const SearchBar = () => {

    return (
        <Box sx={boxStyle}>
            <FormControl
                size="small"
                color="primary"
                variant="outlined"
                sx={controlStyle1}
            >
                <InputLabel htmlFor="search-input" sx={labelStyle}>
                    Search Jobs
                </InputLabel>
                <OutlinedInput id="search-input" sx={inputStyle} autoComplete="off" />
                <SearchIcon sx={iconStyle} fontSize="medium" htmlColor={theme.palette.primary.main}/>
            </FormControl>
            <FormControl 
                sx={controlStyle2} 
                size="small"
                variant="outlined"
            >
                <InputLabel id="categories">Category</InputLabel>
                <Select
                    label="Category"
                    labelID="categories"
                >
                    <MenuItem sx={menuItem}>Any</MenuItem>
                    <MenuItem sx={menuItem}>Front-end</MenuItem>
                    <MenuItem sx={menuItem}>Back-end</MenuItem>
                    <MenuItem sx={menuItem}>Full-stack</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SearchBar;

const boxStyle = {
    display: 'flex'
}

const controlStyle1 = {
    width: "100%",
};
const controlStyle2 = {
    width: "clamp(15rem, 30%, 20rem)",
    border: 0,
    outline: 0,
    ml: 2,
    fontSize: ".875rem",
};
const labelStyle = {
    backgroundColor: "white",
    padding: "0 .25rem",
    transform: 'translate(2.5rem, -.5rem)',
    fontSize: '.75rem'
};
const inputStyle = {
    outline: 0,
    borderRadius: "2rem",
    fontSize: ".875rem",
    padding: ".125rem .125rem .125rem 2rem",
    position: 'relative',
};
const iconStyle = {
    position: 'absolute',
    left: 14,
    top: 9,
};
const menuItem = {
    fontSize: '.875rem',
}
