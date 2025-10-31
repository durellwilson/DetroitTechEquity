import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Detroit Tech Equity - Building Motor City Innovation',
  description: 'Swift development community for automotive and mobility innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
