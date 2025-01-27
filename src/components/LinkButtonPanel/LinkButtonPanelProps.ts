import { ButtonProps } from '@mui/material'

export interface LinkButtonPanelProps {
    primaryLabel: string
    secondaryLabel?: string
    icon?: React.JSX.Element
    iconClassNames?: string
    linkButtonProps: { label?: string } & ButtonProps
}
