import { ButtonProps as MuiButtonProps } from '@mui/material'

export interface HeaderProps {
    primaryLabel: string
    secondaryLabel?: string
    icon?: React.JSX.Element
}

export interface ButtonProps extends MuiButtonProps {
    label?: string
}

export interface LinkCardProps {
    children: React.ReactNode
}
