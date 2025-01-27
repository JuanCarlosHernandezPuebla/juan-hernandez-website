import { TabProps } from '@mui/material'

export interface LinkTabProps extends TabProps {
    label?: string
    href?: string
    selected?: boolean
}
