import './globals.css';
import { Inter } from 'next/font/google';
// Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Location de voiture',
  description: 'Un réel plaisir de louer des voitures rapidement et facilement. Consultez nos catalogues et trouver la voiture de vos rêves.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="relative">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
