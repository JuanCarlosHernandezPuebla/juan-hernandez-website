import { useColorScheme } from '@mui/material'

const useDarkMode = () => {
    const { mode, setMode } = useColorScheme()

    const darkModeEnabled = mode === 'dark'

    const handleToggleDarkMode = () => {
        setMode(darkModeEnabled ? 'light' : 'dark')
    }

    return { mode, darkModeEnabled, handleToggleDarkMode }
}

export default useDarkMode
