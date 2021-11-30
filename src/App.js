import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveBox } from "./components/utils";
import Search from "./pages/Search.js";
import React, { useContext, useState } from "react";
import SearchItemDetail from "./components/search/SearchItemDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
    const [ searchModal, setSearchModal] = useState(false);

    const global = {
        itemDetail, setItemDetail,
        setSearchModal
    }
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalData.Provider value={global}>
                <Router>
                    <Nav />
                    {searchModal && <SearchItemDetail />}
                    <ResponsiveBox>
                        <Routes>
                            <Route path="/search" element={<Search />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/Contact" element={<Contact />} />
                        </Routes>
                    </ResponsiveBox>
                </Router>
            </GlobalData.Provider>
        </ThemeProvider>
    );
}

export default App;
