import { useState } from 'react'

const useNavDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState)
    }

    return { drawerOpen, handleDrawerToggle }
}

export default useNavDrawer
