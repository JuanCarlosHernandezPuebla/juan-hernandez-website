import { LinkRounded } from '@mui/icons-material'
import { Button, Chip } from '@mui/material'
import { ContentProps, HeaderProps, ResumeCardProps } from './ResumeCardProps'

const Header = ({ title, company, startYear, endYear }: HeaderProps) => {
    return (
        <div className="flex h-full items-center justify-between">
            <div className="flex items-center gap-3">
                <div>
                    <p className="m-0 flex flex-wrap gap-x-1.5 text-sm">
                        <span className="italic">{title}</span>
                        <span>·</span>
                        <span>{company}</span>
                    </p>
                    <p className="m-0 flex flex-wrap gap-x-1 truncate text-xs text-zinc-500">
                        <span>{startYear}</span>
                        <span>—</span>
                        <span>{endYear}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const Content = ({ id, descriptions, links, skills }: ContentProps) => {
    return (
        <>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-[square] p-0">
                    {descriptions.map((description, index) => (
                        <li key={`${id}_description_${index}`}>
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
            {links && (
                <div className="mb-2 flex flex-wrap">
                    {links.map(
                        ({ 'aria-label': ariaLabel, label, href }, index) => (
                            <Button
                                key={`${id}_link_${index}`}
                                className="normal-case"
                                aria-label={ariaLabel}
                                href={href}
                                target="_blank"
                                rel="noreferrer noopener"
                                startIcon={<LinkRounded />}
                            >
                                {label}
                            </Button>
                        )
                    )}
                </div>
            )}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <Chip
                        key={`${id}_skill_${index}`}
                        label={skill}
                        color="primary"
                        variant="outlined"
                    />
                ))}
            </div>
        </>
    )
}

const ResumeCard = ({ children }: ResumeCardProps) => {
    return (
        <div className="card p-6">
            <div className="grid pl-12">{children}</div>
        </div>
    )
}

ResumeCard.Header = Header
ResumeCard.Content = Content

export default ResumeCard
