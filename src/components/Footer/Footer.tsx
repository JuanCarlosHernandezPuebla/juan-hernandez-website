import { Box, Button, Container, Divider, Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { FooterProps } from './FooterProps'
import { NextLinkComposed } from '../Link'

const year = new Date().getFullYear()

const Footer = ({ navItems }: FooterProps) => {
    return (
        <footer className="flex bg-gray-600 text-center text-white dark:bg-gray-900">
            <Container className="p-6">
                <Box
                    className="place-self-center"
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                    {navItems.map(({ id, label, href }) => (
                        <Button
                            className="text-white"
                            key={id}
                            sx={{ my: 2, display: 'block' }}
                            component={NextLinkComposed}
                            to={href}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>
                <Divider
                    sx={{ display: { xs: 'none', md: 'block' } }}
                    color="white"
                />
                <div className="flex items-center justify-between">
                    <p className="text-xs">
                        &copy; {year} Juan Carlos Hernandez Puebla
                    </p>
                    <div className="flex flex-wrap gap-x-4">
                        <Link
                            className="text-white hover:text-blue-500"
                            aria-label="GitHub (opens in a new tab)"
                            href="https://github.com/juancarloshernandezpuebla"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="sr-only">GitHub</span>
                            <GitHub />
                        </Link>
                        <Link
                            className="text-white hover:text-blue-500"
                            aria-label="LinkedIn (opens in a new tab)"
                            href="https://www.linkedin.com/in/juancarloshp"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <LinkedIn />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
