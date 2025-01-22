import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/provider/theme-provider'

const font = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Record Time Application',
    description: 'Record Time app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={cn(font.className, `antialiased`, `bg-white dark:bg-[#313333]`)}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem storageKey='recordt-theme' disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
