interface Link {
    label: string
    href: string
    'aria-label': string
}

export interface HeaderProps {
    title: string
    company: string
    startYear: string
    endYear: string
}

export interface ContentProps {
    id: string
    descriptions: string[]
    links?: Link[]
    skills: string[]
}

export interface ResumeCardProps {
    children: React.ReactNode
}
