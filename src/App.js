import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Nav />
            </Router>
        </ThemeProvider>
    );
}

export default App;
