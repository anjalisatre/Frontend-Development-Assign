// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './tailwind.css'
import './tailwind.config'
import './component'
import './component.html'
import { fontHeading } from './fontHeading.1'

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}