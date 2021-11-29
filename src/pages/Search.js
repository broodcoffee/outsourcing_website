import { Box } from "@mui/system";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";
import React, { useContext, useState, /*useEffect*/ } from 'react';
import { jobs } from '../data/jobs';

const DataContext = React.createContext();
export const useDataContext = () => useContext(DataContext);

//COMPONENT
const Search = () => {

    const [ searchInput, setSearchInput ] = useState({ 
        text: '',
        category: 'Any',
    });
    const [ jobsData, setJobsData ] = useState({ 
        main: jobs, 
        filtered: jobs,
    });

    const searchStates = { 
        searchInput, setSearchInput, //imported to SearchBar.js
        jobsData, setJobsData, //import to SearchBar.js & SearchResults.js
    }

    // useEffect( () => console.log(searchInput), [searchInput])

    return (
        <Box sx={ boxStyle }>
            <DataContext.Provider value={ searchStates }>
                <SearchBar/>
                <SearchResults />
            </DataContext.Provider>
        </Box>
    )
}

export default Search

const boxStyle = {
    display: 'flex',
    maxWidth: '100%',
    padding: '4rem 0',
    flexDirection: 'column',
    // boxShadow: 2,
    // borderRadius: '.125rem'
}