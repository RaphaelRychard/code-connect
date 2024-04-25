import { Prompt } from 'next/font/google'

import { Aside } from "@/components/Aside";
import './globals.css'
import Search from '@/components/Search';

const prompt = Prompt({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className} >
      <body suppressHydrationWarning={true}>
        <div className='aside-container'>
          <Aside/>
          <div className="app-container">
            <Search />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
