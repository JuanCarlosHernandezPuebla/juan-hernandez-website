import ResumePanel from '@/components/ResumePanel'
import { Container } from '@mui/material'
import resumeDetails from './resume-details.json'

export default function Resume() {
    return (
        <div className="p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <Container>
                <h1 className="sr-only">Resume</h1>
                <section className="grid">
                    <h2>Experience</h2>
                    <div className="grid gap-6">
                        {resumeDetails.map(({ id, ...details }) => (
                            <ResumePanel key={id} id={id} {...details} />
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    )
}
