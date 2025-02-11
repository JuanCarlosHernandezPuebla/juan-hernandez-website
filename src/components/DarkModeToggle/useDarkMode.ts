import { useColorScheme } from '@mui/material'

const useDarkMode = () => {
    const { mode, setMode } = useColorScheme()

    const darkModeEnabled = mode === 'dark'

    const handleDarkModeToggle = () => {
        setMode(darkModeEnabled ? 'light' : 'dark')
    }

    return { mode, darkModeEnabled, handleDarkModeToggle }
}

export default useDarkMode
