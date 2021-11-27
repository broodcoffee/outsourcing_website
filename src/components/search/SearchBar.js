import { Box, InputLabel, OutlinedInput, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../mui-theme";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDataContext } from "../../pages/Search";
// import { useEffect } from "react";

const categories = [
    'Any', 'Front-end', 'Back-end', 'Full-stack', 'UX/UI Design'
]

// COMPONENT
const SearchBar = () => {
    const { searchInput, setSearchInput } = useDataContext();

    const handleTextChange = (e) => {
        setSearchInput({ ...searchInput, text: e.target.value });
    }

    const handleCategoryChange = (e) => {
        setSearchInput({ ...searchInput, category: e.target.value });
    };

    const handleSubmit = (e) => {
        if(e.key === 'Enter') console.log('This logs on enter key.')
    }

    // useEffect(() => {
    //     console.log(searchInput);
    // }, [searchInput]);

    return (
        <Box sx={boxStyle}>
            <FormControl sx={controlStyle2} size="small" variant="outlined">
                <InputLabel id="categories">Category</InputLabel>
                <Select
                    label="Category"
                    labelId="categories"
                    value={searchInput.category}
                    onChange={handleCategoryChange}
                    variant="outlined"
                    sx={inputStyle2}
                >
                    { categories.map( item => <MenuItem key={item} sx={menuItem} value={item}>{item}</MenuItem> ) }
                </Select>
            </FormControl>
            <FormControl
                size="small"
                color="primary"
                variant="outlined"
                sx={controlStyle1}
            >
                <InputLabel htmlFor="search-input" sx={labelStyle}>
                    Search Jobs
                </InputLabel>
                <OutlinedInput
                    id="search-input"
                    sx={inputStyle}
                    autoComplete="off"
                    value={searchInput.text}
                    onChange={handleTextChange}
                    onKeyPress={handleSubmit}
                />
                <SearchIcon
                    sx={iconStyle}
                    fontSize="medium"
                    htmlColor={theme.palette.primary.main}
                />
            </FormControl>
        </Box>
    );
};

export default SearchBar;

//MUI-v5 SX 
const boxStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: '0 1.5rem'
};

const controlStyle1 = {
    width: "100%",
};
const controlStyle2 = {
    width: "clamp(15rem, 30%, 20rem)",
    border: 0,
    outline: 0,
    mr: 2,
    fontSize: ".875rem",
};
const labelStyle = {
    backgroundColor: "white",
    padding: "0 .25rem",
    transform: "translate(2.5rem, -.5rem)",
    fontSize: ".75rem",
};
const inputStyle = {
    borderRadius: "2rem",
    fontSize: ".875rem",
    padding: ".125rem .125rem .125rem 2rem",
    position: "relative",
    fontWeight: 500,
    color: theme.palette.grey[700],
};
const inputStyle2 = {
    borderRadius: "2rem",
    fontSize: ".875rem",
    padding: ".125rem .5rem",
    fontWeight: 500,
    color: theme.palette.grey[700],
};
const iconStyle = {
    position: "absolute",
    left: 14,
    top: 9,
};
const menuItem = {
    fontSize: ".875rem",
    fontWeight: 500,
    color: theme.palette.grey[700],
};
