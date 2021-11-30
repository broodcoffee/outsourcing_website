import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ResponsiveBox } from "./components/utils";
import Jobs from "./pages/Jobs.js";
import Workers from "./pages/Workers.js";
import React, { useContext, useState } from "react";
import SearchJobDetail from "./components/search/SearchJobDetail";
import SearchWorkerDetail from "./components/workers/SearchWorkerDetail";

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
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/workers" element={<Workers />} />
                        </Routes>
                    </ResponsiveBox>
                </Router>
            </GlobalData.Provider>
        </ThemeProvider>
    );
}

export default App;
