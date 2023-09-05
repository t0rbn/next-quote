import type {Metadata} from 'next'
import "../globals.css"

export const metadata: Metadata = {
    title: 'next quote',
    description: 'Show random quotes from quotable.io',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}
