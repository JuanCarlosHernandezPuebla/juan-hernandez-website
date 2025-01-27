interface Link {
    label: string
    href: string
    'aria-label': string
}

export interface ResumePanelProps {
    id: string
    title: string
    company: string
    startYear: string
    endYear: string
    descriptions: string[]
    links?: Link[]
    skills: string[]
}
