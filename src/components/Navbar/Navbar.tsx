'use client'

import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useState } from 'react'
import NavTabs, { NavItem } from '../NavTabs'
import DarkModeToggle from '../DarkModeToggle'
import { NextLinkComposed } from '../Link'

const drawerWidth = 240

function Navbar({ navItems }: { navItems: NavItem[] }) {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                className="text-center text-base"
                variant="h6"
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
    )

    return (
        <>
            <AppBar position="static" component="nav">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
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
            <Drawer
                variant="temporary"
                open={mobileOpen}
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
                {drawer}
            </Drawer>
        </>
    )
}
export default Navbar
