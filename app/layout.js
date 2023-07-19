import './globals.css'
import NavBar from '@/components/nav'

export const metadata = {
  title: 'Timothy Sung\'s Website',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <NavBar />
        {children}
        </body>
    </html>
  )
}
