import { Button as MuiButton } from '@mui/material'
import { ButtonProps, HeaderProps, LinkCardProps } from './LinkCardProps'

const Header = ({ primaryLabel, secondaryLabel, icon }: HeaderProps) => {
    return (
        <div className="flex items-center gap-3">
            {icon && (
                <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${icon.props.className}`}
                >
                    {icon}
                </span>
            )}
            <div>
                <p className="my-0 text-sm dark:text-zinc-100">
                    {primaryLabel}
                </p>
                {secondaryLabel && (
                    <p className="my-0 text-xs text-zinc-500 dark:text-zinc-400">
                        {secondaryLabel}
                    </p>
                )}
            </div>
        </div>
    )
}

const Button = ({
    'aria-label': ariaLabel,
    href = '',
    startIcon,
    label,
}: ButtonProps) => {
    return (
        <MuiButton
            className="px-4 normal-case sm:px-2.5"
            variant="contained"
            size="small"
            aria-label={ariaLabel}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            startIcon={startIcon}
        >
            {label}
        </MuiButton>
    )
}

const LinkCard = ({ children }: LinkCardProps) => {
    return (
        <div className="card">
            <div className="flex h-full items-center justify-between">
                {children}
            </div>
        </div>
    )
}

LinkCard.Header = Header
LinkCard.Button = Button

export default LinkCard
