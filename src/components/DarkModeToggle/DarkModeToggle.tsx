import { IconButton } from '@mui/material'
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import useDarkMode from './useDarkMode'

const DarkModeToggle = () => {
    const { mode, darkModeEnabled, handleDarkModeToggle } = useDarkMode()

    if (!mode) {
        return null
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
            onClick={handleDarkModeToggle}
        >
            {darkModeEnabled ? <LightModeRounded /> : <DarkModeRounded />}
        </IconButton>
    )
}

export default DarkModeToggle
