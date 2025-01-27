import theme from '@/theme'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { AppProviderProps } from './AppProviderProps'

const AppProvider = ({ children }: Readonly<AppProviderProps>) => {
    return (
        <AppRouterCacheProvider
            options={{ key: 'css', enableCssLayer: true, prepend: true }}
        >
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme} defaultMode="light">
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </AppRouterCacheProvider>
    )
}

export default AppProvider
