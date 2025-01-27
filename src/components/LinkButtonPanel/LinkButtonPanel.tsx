import { Button } from '@mui/material'
import { LinkButtonPanelProps } from './LinkButtonPanelProps'

const LinkButtonPanel = ({
    primaryLabel,
    secondaryLabel,
    icon,
    iconClassNames,
    linkButtonProps: { href = '', startIcon, 'aria-label': ariaLabel, label },
}: LinkButtonPanelProps) => {
    return (
        <div className="link-btn-panel">
            <div className="flex h-full items-center justify-between">
                <div className="flex items-center gap-3">
                    {icon && (
                        <span
                            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${iconClassNames}`}
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
                <Button
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
                </Button>
            </div>
        </div>
    )
}

export default LinkButtonPanel
