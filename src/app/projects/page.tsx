import LinkButtonPanel from '@/components/LinkButtonPanel'
import { GitHub, LinkRounded } from '@mui/icons-material'
import { Container } from '@mui/material'

export default function Projects() {
    return (
        <div className="p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <Container>
                <section className="grid">
                    <h1>Projects</h1>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <LinkButtonPanel
                            primaryLabel="metro-transit-trip"
                            secondaryLabel="SPA providing Metro Transit route information"
                            icon={<GitHub />}
                            iconClassNames="bg-black"
                            linkButtonProps={{
                                label: 'View',
                                'aria-label':
                                    'GitHub repository (opens in a new tab)',
                                href: 'https://github.com/JuanCarlosHernandezPuebla/metro-transit-trip',
                                startIcon: <LinkRounded />,
                            }}
                        />
                        <LinkButtonPanel
                            primaryLabel="employee-api-security"
                            secondaryLabel="REST Employee API with Spring Security"
                            icon={<GitHub />}
                            iconClassNames="bg-black"
                            linkButtonProps={{
                                label: 'View',
                                'aria-label':
                                    'GitHub repository (opens in a new tab)',
                                href: 'https://github.com/JuanCarlosHernandezPuebla/employee-api-security',
                                startIcon: <LinkRounded />,
                            }}
                        />
                        <LinkButtonPanel
                            primaryLabel="employee-mvc"
                            secondaryLabel="CRUD Employee app with Spring MVC"
                            icon={<GitHub />}
                            iconClassNames="bg-black"
                            linkButtonProps={{
                                label: 'View',
                                'aria-label':
                                    'GitHub repository (opens in a new tab)',
                                href: 'https://github.com/JuanCarlosHernandezPuebla/employee-mvc',
                                startIcon: <LinkRounded />,
                            }}
                        />
                        <LinkButtonPanel
                            primaryLabel="graphql-book-list"
                            secondaryLabel="Express GraphQL server to query books"
                            icon={<GitHub />}
                            iconClassNames="bg-black"
                            linkButtonProps={{
                                label: 'View',
                                'aria-label':
                                    'GitHub repository (opens in a new tab)',
                                href: 'https://github.com/JuanCarlosHernandezPuebla/graphql-book-list',
                                startIcon: <LinkRounded />,
                            }}
                        />
                        <LinkButtonPanel
                            primaryLabel="spring-data-jpa-mappings"
                            secondaryLabel="Advanced mappings with Spring Data JPA"
                            icon={<GitHub />}
                            iconClassNames="bg-black"
                            linkButtonProps={{
                                label: 'View',
                                'aria-label':
                                    'GitHub repository (opens in a new tab)',
                                href: 'https://github.com/JuanCarlosHernandezPuebla/spring-data-jpa-mappings',
                                startIcon: <LinkRounded />,
                            }}
                        />
                        <LinkButtonPanel
                            primaryLabel="spring-aop-account"
                            secondaryLabel="Aspect-oriented programming with Spring AOP"
                            icon={<GitHub />}
                            iconClassNames="bg-black"
                            linkButtonProps={{
                                label: 'View',
                                'aria-label':
                                    'GitHub repository (opens in a new tab)',
                                href: 'https://github.com/JuanCarlosHernandezPuebla/spring-aop-account',
                                startIcon: <LinkRounded />,
                            }}
                        />
                    </div>
                </section>
            </Container>
        </div>
    )
}
