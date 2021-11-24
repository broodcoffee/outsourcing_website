import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#0e4983",
            light: "#125ca7",
        },
        secondary: {
            main: "#00a3d4",
        },
        default: {
            main: '#fff'
        },
        error: {
            main: "#e04245",
        },
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        button: {
            textTransform: "none",
            fontWeight: "500",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '.5rem'
                }
            }
        }
    }
});
