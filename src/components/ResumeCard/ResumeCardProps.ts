interface Link {
    label: string
    href: string
    'aria-label': string
}

export type CardHeaderProps = Pick<
    ResumeCardProps,
    'title' | 'company' | 'startYear' | 'endYear'
>

export type CardContentProps = Pick<
    ResumeCardProps,
    'id' | 'descriptions' | 'links' | 'skills'
>

export interface ResumeCardProps {
    id: string
    title: string
    company: string
    startYear: string
    endYear: string
    descriptions: string[]
    links?: Link[]
    skills: string[]
}
