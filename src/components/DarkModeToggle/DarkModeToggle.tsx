import { Box, IconButton, Skeleton } from '@mui/material'
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import useDarkMode from './useDarkMode'

const DarkModeToggle = () => {
    const { mode, darkModeEnabled, handleDarkModeToggle } = useDarkMode()

    if (!mode) {
        return (
            <Box sx={{ padding: '0.5rem' }}>
                <Skeleton variant="circular" width={24} height={24} />
            </Box>
        )
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
