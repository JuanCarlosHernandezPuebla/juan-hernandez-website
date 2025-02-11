import { usePathname } from 'next/navigation'
import { NavItem } from './NavTabsProps'
import { useEffect, useState } from 'react'

const useNavTabs = (navItems: NavItem[]) => {
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

    return { value, handleChange }
}

export default useNavTabs
