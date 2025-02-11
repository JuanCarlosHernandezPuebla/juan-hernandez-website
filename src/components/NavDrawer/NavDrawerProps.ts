import { NavItem } from '../NavTabs'

export interface NavDrawerProps {
    navItems: NavItem[]
    drawerOpen: boolean
    handleDrawerToggle: () => void
}
