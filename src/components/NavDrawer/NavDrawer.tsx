import { NavDrawerProps } from './NavDrawerProps'
import { Box, Divider, Drawer, Typography } from '@mui/material'
import NavTabs from '../NavTabs'
import DarkModeToggle from '../DarkModeToggle'

const drawerWidth = 240

const NavDrawer = ({
    navItems,
    drawerOpen,
    handleDrawerToggle,
}: NavDrawerProps) => {
    return (
        <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                },
            }}
        >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography
                    className="text-center text-base"
                    variant="h6"
                    component="h2"
                    sx={{ my: 2 }}
                >
                    Juan Carlos Hernandez Puebla
                </Typography>
                <Divider />
                <NavTabs
                    key="vertical_nav"
                    navItems={navItems}
                    orientation="vertical"
                />
                <Box
                    sx={[
                        () => ({
                            '.MuiIconButton-root': {
                                color: 'inherit',
                            },
                        }),
                    ]}
                >
                    <Divider sx={{ mb: 3 }} />
                    <DarkModeToggle key="verticle_nav_dark_mode_toggle" />
                </Box>
            </Box>
        </Drawer>
    )
}

export default NavDrawer
