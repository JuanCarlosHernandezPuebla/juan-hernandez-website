import { NavTabsProps } from './NavTabsProps'
import { Box, Tabs } from '@mui/material'
import LinkTab from '../LinkTab'
import useNavTabs from './useNavTabs'

export default function NavTabs({ navItems, orientation }: NavTabsProps) {
    const { value, handleChange } = useNavTabs(navItems)

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                orientation={orientation}
                sx={[
                    () => ({
                        '.MuiTab-root': {
                            color: 'inherit',
                            minHeight: '48px',
                            lineHeight: 0,
                            '&.Mui-selected': {
                                color: 'inherit',
                            },
                        },
                        '.MuiTabs-indicator': {
                            backgroundColor: 'white',
                        },
                        '&.MuiTabs-vertical': {
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'primary.main',
                                left: 0,
                                width: '0.25rem',
                                transition: 'none',
                            },
                            '& .Mui-selected': {
                                backgroundColor: '#9595951a',
                            },
                        },
                    }),
                    (theme) =>
                        theme.applyStyles('dark', {
                            '.MuiTabs-indicator': {
                                backgroundColor: 'primary.main',
                            },
                        }),
                ]}
                value={value}
                onChange={handleChange}
                aria-label="nav tabs"
                role="navigation"
            >
                {navItems.map(({ id, label, href, icon }) => (
                    <LinkTab
                        className="dark:text-[#90caf9]"
                        key={id}
                        value={id}
                        label={label}
                        href={href}
                        icon={icon}
                        iconPosition="start"
                    />
                ))}
            </Tabs>
        </Box>
    )
}
