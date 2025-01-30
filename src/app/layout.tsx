import type { Metadata } from 'next'
import { Geist, Geist_Mono, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CssBaseline from '@mui/material/CssBaseline'
import AppProvider from '@/components/AppProvider'
import {
    AccountTreeRounded,
    ArticleRounded,
    HomeRounded,
} from '@mui/icons-material'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import Footer from '@/components/Footer'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const roboto = Roboto({
    variable: '--font-roboto',
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Juan Carlos Hernandez Puebla',
    description: 'Juan Carlos Hernandez Puebla website',
}

const navItems = [
    { id: 'home', label: 'Home', href: '/', icon: <HomeRounded /> },
    {
        id: 'resume',
        label: 'Resume',
        href: '/resume',
        icon: <ArticleRounded />,
    },
    {
        id: 'projects',
        label: 'Projects',
        href: '/projects',
        icon: <AccountTreeRounded />,
    },
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div id="__next">
                    <div className="m-0 grid min-h-screen grid-rows-[1fr_auto_auto]">
                        <InitColorSchemeScript
                            attribute="class"
                            defaultMode="light"
                        />
                        <AppProvider>
                            <CssBaseline />
                            <Navbar navItems={navItems} />
                            <main className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-y-8 bg-slate-50 dark:bg-slate-800">
                                {children}
                            </main>
                            <Footer navItems={navItems} />
                        </AppProvider>
                    </div>
                </div>
            </body>
        </html>
    )
}
