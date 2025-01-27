import { IconButton, useColorScheme } from '@mui/material'
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'

const DarkModeToggle = () => {
    const { mode, setMode } = useColorScheme()

    if (!mode) {
        return null
    }

    const darkModeEnabled = mode === 'dark'

    const handleToggleDarkMode = () => {
        setMode(darkModeEnabled ? 'light' : 'dark')
    }
    return (
        <IconButton
            aria-label="Toggle Dark Mode"
            sx={[
                () => ({
                    color: 'white',
                }),
                (theme) =>
                    theme.applyStyles('dark', {
                        color: 'primary.main',
                    }),
            ]}
            onClick={handleToggleDarkMode}
        >
            {darkModeEnabled ? <LightModeRounded /> : <DarkModeRounded />}
        </IconButton>
    )
}

export default DarkModeToggle
