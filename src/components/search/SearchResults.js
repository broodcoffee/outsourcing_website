import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    Paper,
    Radio,
    RadioGroup,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { Sort } from "@mui/icons-material";
import { theme } from "../../mui-theme";
import { useState } from "react";
import SearchItem from "./SearchItem";
import { jobs } from '../../data/jobs';
import { useDataContext } from "../../pages/Search";
import styled from '@emotion/styled';


const SearchResults = () => {

    const { searchInput } = useDataContext();

    const [ filterParam, setFilterParam ] = useState('');
    const [ jobsData, setJobsData ] = useState(jobs)

    const muiTheme = useTheme();
    const breakPoint = useMediaQuery(muiTheme.breakpoints.down('sm'));

    const getParamAndSort = (param) => {
        let str = param.toLocaleLowerCase()
        if( filterParam === str ) return;
        setFilterParam(str);
        sortViaParam(str);
    };

    const sortViaParam = param => {  //used at getParamAndSort()
        switch ( param ) {
            case 'compensation':
                return setJobsData( jobsData.sort( (a,b) => a.compensation - b.compensation ) );
            case 'date':
                return setJobsData( jobsData.sort( (a,b) => new Date(b.date) - new Date(a.date) ) );
            case 'duration':
                return setJobsData( jobsData.sort( (a,b) => a.duration - b.duration ) );
            default:
                return jobsData
        }
    }

    // useEffect( () => console.log(jobsData), [jobsData] )
    
    return (
        <Box sx={{...mainBox, mx: !breakPoint ? 4 : .5,}} component={Paper}>
            <FormControl sx={formStyle}>
                <Typography sx={labeledIcon}>
                    <Sort
                        fontSize="small"
                        htmlColor={theme.palette.primary.main}
                        sx={{ mr: 1 }}
                    />
                    Sort:
                </Typography>
                <Divider />
                <RadioGroup sx={radioGroup} aria-label="options" name="options">
                    {["Compensation", "Date", "Duration"].map(
                        (item) => (
                            <FormControlLabel
                                key={item}
                                size="small"
                                value={item.toLocaleLowerCase()}
                                control={<Radio size="small" sx={radioStyle}/>}
                                label={item}
                                onClick={ () => getParamAndSort(item) }
                            />
                        )
                    )}
                </RadioGroup>
            </FormControl>
            <Box sx={resultBox}>
                <Typography variant="h2" sx={{fontSize: '1.125rem', fontWeight: 500, mb: 1.5}}>
                    Results:
                </Typography>
                <Divider />
                <ResultsContainer>
                    {
                        jobsData.map( item => (
                            <SearchItem
                                key={item.id}
                                header={item.jobName}
                                body={item.description}
                                tags={item.requiredLang}
                                compensation={item.compensation}
                                duration={item.duration}
                                postDate={item.date}
                            />
                        ))
                    }
                </ResultsContainer>
            </Box>
        </Box>
    );
};

export default SearchResults;

//MUI SX
const mainBox = {
    display: "flex",
    // padding: ".5rem 1rem",
    boxShadow: 3,
    mt: 5,
    borderRadius: '.25rem',
    backgroundColor: theme.palette.grey[1],
    overflow: 'hidden',
    maxHeight: 'max-content',
    minHeight: '36rem',
};
const formStyle = {
    padding: '1rem',
    width: '18rem'
}
const resultBox = {
    backgroundColor: 'white', 
    width: '100%',
    padding: '1rem 1.25rem 3rem 1.25rem',
    color: theme.palette.grey[700],
}
const labeledIcon = {
    display: "flex",
    fontSize: ".875rem",
    fontWeight: 600,
    color: theme.palette.grey[700],
    mb: 1.5,
    // alignItems: 'center'
};
const radioGroup = {
    mt: 1,
    ml: 3,
};
const radioStyle ={
    color: theme.palette.grey[300],
    fontSize: '.75rem',
    fontWeight: '600 !important',
    letterSpacing: '-1px',
}

const ResultsContainer = styled.div`
    height: max-content;
`