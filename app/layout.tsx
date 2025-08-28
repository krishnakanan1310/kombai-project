
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BD BizDirectory - Business Directory",
  description: 'Preview of generated UI components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><div id="root">{children}</div></body>
    </html>
  )
}

