import { Inter } from 'next/font/google'
import { QuioscoProvider } from '@/app/context/QuioscoProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cafe ',
  description: 'Compra tu comida favorita en nuestro quiosco virtual, comida, comida rapida',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuioscoProvider>
          {children}
        </QuioscoProvider>
      </body>
    </html>
  )
}
