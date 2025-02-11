'use client'

import {
    AppBar,
    Box,
    Container,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import NavTabs, { NavItem } from '../NavTabs'
import DarkModeToggle from '../DarkModeToggle'
import { NextLinkComposed } from '../Link'
import NavDrawer from '../NavDrawer'
import useNavDrawer from './useNavDrawer'

function Navbar({ navItems }: { navItems: NavItem[] }) {
    const { drawerOpen, handleDrawerToggle } = useNavDrawer()

    return (
        <>
            <AppBar component="nav">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                sx={[
                                    (theme) =>
                                        theme.applyStyles('dark', {
                                            color: 'primary.main',
                                        }),
                                ]}
                                size="large"
                                aria-label="open drawer"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            className="text-center"
                            variant="h6"
                            component={NextLinkComposed}
                            to={'/'}
                            sx={[
                                () => ({
                                    flexGrow: 1,
                                    mr: 2,
                                    display: 'flex',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }),
                                (theme) =>
                                    theme.applyStyles('dark', {
                                        color: 'primary.main',
                                    }),
                            ]}
                        >
                            Juan Carlos Hernandez Puebla
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <NavTabs navItems={navItems} />
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Divider
                                sx={[
                                    () => ({
                                        borderColor: 'white',
                                        mx: 3,
                                    }),
                                    (theme) =>
                                        theme.applyStyles('dark', {
                                            borderColor: 'primary.main',
                                        }),
                                ]}
                                orientation="vertical"
                                flexItem
                                variant="middle"
                            />
                            <DarkModeToggle />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <NavDrawer
                navItems={navItems}
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
        </>
    )
}

export default Navbar
