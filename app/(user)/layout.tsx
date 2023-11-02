import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'

const roboto = Roboto({ 
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
 })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, "max-w-6xl mx-auto px-3")}>
       <Header />
        {children}
        </body>
    </html>
  )
}