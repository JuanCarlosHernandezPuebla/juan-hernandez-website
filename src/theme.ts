'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    colorSchemes: {
        light: true,
        dark: true,
    },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*,::before,::after': {
                    boxSizing: 'border-box',
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: "theme('borderColor.DEFAULT', currentColor)",
                },
            },
        },
    },
})

export default theme
