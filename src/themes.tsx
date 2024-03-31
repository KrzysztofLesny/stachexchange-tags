import { createTheme } from "@mui/material";
import { blue, blueGrey, cyan, grey, pink } from "@mui/material/colors";

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

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: pink["A200"],
      },
      secondary: {
        main: cyan["A400"],
      },
      background: {
        default: blueGrey["800"],

      },
    },
  });

