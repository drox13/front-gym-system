import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { create } from "@mui/material/styles/createTransitions";

export const theme = createTheme({
    plaette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main:red.A400
        }
    }
})