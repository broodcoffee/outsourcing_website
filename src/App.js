import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ResponsiveBox } from "./components/utils";
import Search from "./pages/Search.js";
import React, { useContext, useState } from "react";
import SearchItemDetail from "./pages/SearchItemDetail";

const GlobalData = React.createContext();
export const useGlobalDataContext = () => useContext(GlobalData);

function App() {

    const [ itemDetail, setItemDetail ] = useState({
        jobName: "", 
        category: [], 
        description: "", 
        compensation: "", 
        duration: "", 
        employer: "", 
        date: "",
        lang: [],
        jobId: "",
    });

    const global = {
        itemDetail, setItemDetail
    }
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalData.Provider value={global}>
                <Router>
                    <Nav />
                    <ResponsiveBox>
                        <Routes>
                            <Route path="/search" element={<Search />} />
                            <Route path="/search/item-detail" element={<SearchItemDetail />} />
                        </Routes>
                    </ResponsiveBox>
                </Router>
            </GlobalData.Provider>
        </ThemeProvider>
    );
}

export default App;
