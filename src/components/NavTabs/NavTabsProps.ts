export interface NavItem {
    id: string
    label: string
    href: string
    icon?: string | React.JSX.Element
}

export interface NavTabsProps {
    navItems: NavItem[]
    orientation?: 'vertical' | 'horizontal' | undefined
}
