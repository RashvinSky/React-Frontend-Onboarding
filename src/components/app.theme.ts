import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#784af4',
        },
        secondary: {
            main: '#efa613',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    letterSpacing: '0.04rem',
                    padding: '10px 16px',
                    textTransform: 'none',
                    fontWeight: 400,
                },
            },
        },
    },
});

export default theme;
