import { createTheme } from "@mui/material";
import { blue, grey, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: blue,
        secondary: pink,
        background: {
            default:  grey[50],
        },
    }
});

