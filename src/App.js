import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveBox } from "./components/utils";
import Jobs from "./pages/Jobs.js";
import Workers from "./pages/Workers.js";
import React, { useContext, useState } from "react";
<<<<<<< HEAD
import SearchJobDetail from "./components/search/SearchJobDetail";
import SearchWorkerDetail from "./components/workers/SearchWorkerDetail";
=======
import SearchItemDetail from "./components/search/SearchItemDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
>>>>>>> 0c35607afdfd1f28d17b764a988c1b75459252fa

const GlobalData = React.createContext();
export const useGlobalDataContext = () => useContext(GlobalData);

function App() {

    const [ itemDetail, setItemDetail ] = useState({});
    const [ searchModal, setSearchModal] = useState(false);
    const [ pageName, setPageName ] = useState('jobs');

    const global = {
        itemDetail, setItemDetail,
        setSearchModal,
        pageName, setPageName
    }
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalData.Provider value={global}>
                <Router>
                    <Nav />
                    {(searchModal && pageName === "jobs") && <SearchJobDetail /> }
                    {(searchModal && pageName === "workers") && <SearchWorkerDetail /> }
                    <ResponsiveBox>
                        <Routes>
<<<<<<< HEAD
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/workers" element={<Workers />} />
=======
                            <Route path="/search" element={<Search />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/Contact" element={<Contact />} />
>>>>>>> 0c35607afdfd1f28d17b764a988c1b75459252fa
                        </Routes>
                    </ResponsiveBox>
                </Router>
            </GlobalData.Provider>
        </ThemeProvider>
    );
}

export default App;
