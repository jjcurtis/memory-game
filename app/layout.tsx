import './globals.css'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Memory Game',
  description: 'Pokemon themed memory card game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  )
}
