import LinkCard from '@/components/LinkCard'
import { ControlPointRounded, GitHub, LinkedIn } from '@mui/icons-material'
import { Container } from '@mui/material'
import about from './about.json'

export default function Home() {
    return (
        <div className="p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <Container>
                <h1 className="sr-only">Home</h1>
                <section className="grid">
                    <h2>About</h2>
                    <p className="dark:text-gray-400">{about.description}</p>
                </section>
                <section className="grid">
                    <h2>Get In Touch</h2>
                    <div className="grid gap-6 sm:max-w-sm">
                        <LinkCard>
                            <LinkCard.Header
                                primaryLabel="GitHub"
                                secondaryLabel="Juan Carlos Hernandez Puebla"
                                icon={<GitHub className="bg-black" />}
                            />
                            <LinkCard.Button
                                label="Connect"
                                aria-label="GitHub (opens in a new tab)"
                                href="https://github.com/juancarloshernandezpuebla"
                                startIcon={<ControlPointRounded />}
                            />
                        </LinkCard>
                        <LinkCard>
                            <LinkCard.Header
                                primaryLabel="LinkedIn"
                                secondaryLabel="Juan Carlos Hernandez Puebla"
                                icon={<LinkedIn className="bg-[#0077B5]" />}
                            />
                            <LinkCard.Button
                                label="Connect"
                                aria-label="LinkedIn (opens in a new tab)"
                                href="https://www.linkedin.com/in/juancarloshp"
                                startIcon={<ControlPointRounded />}
                            />
                        </LinkCard>
                    </div>
                </section>
            </Container>
        </div>
    )
}
