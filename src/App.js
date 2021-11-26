import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, /*Routes, Route*/} from 'react-router-dom';
import { ResponsiveBox } from "./components/utils";
import Search from "./pages/Search.js";

console.log(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Nav />
                <ResponsiveBox>
                    <Search />
                </ResponsiveBox>
            </Router>
        </ThemeProvider>
    );
}

export default App;
