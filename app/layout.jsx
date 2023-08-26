import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

const inter = Inter({ weight:['400','700'] , subsets: ['latin'] });

export const metadata = {
  title: 'Barista Coffee Beans',
  description: 'Barista Coffee Beans by',
  charset: 'utf-8',
  name: 'viewport',
  content: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body id="home" className={inter.className}>
				<Navbar/>
        <Header/>
        <main className='container'>
            {children}
        </main>
				
        <Footer/>
      </body>
    </html>


  )
}
