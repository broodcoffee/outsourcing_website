import { Box } from "@mui/system";
import SearchBar from "../components/search/SearchBar";
// import SearchResults from "../components/search/SearchResults";
// import { useTheme } from "@mui/system";

// const theme = useTheme();


const Search = () => {
    return (
        <Box sx={boxStyle}>
            <SearchBar/>
            {/* <SearchResults /> */}
        </Box>
    )
}

export default Search

const boxStyle = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '1rem 1.5rem'
}