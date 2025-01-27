import { usePathname } from 'next/navigation'
import { NavTabsProps } from './NavTabsProps'
import { useEffect, useState } from 'react'
import { Box, Tabs } from '@mui/material'
import LinkTab from '../LinkTab'

export default function NavTabs({ navItems, orientation }: NavTabsProps) {
    const pathName = usePathname()
    const tabValue = pathName.split('/').pop() || navItems?.[0]?.id

    const [value, setValue] = useState(tabValue)

    useEffect(() => {
        if (tabValue) {
            setValue(tabValue)
        }
    }, [pathName, tabValue])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                orientation={orientation}
                sx={[
                    (theme) => ({
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
