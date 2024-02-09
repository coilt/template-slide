import '@/styles/globals.css';
import '@/styles/../components/Layout/Inner/styles.scss';
import Link from 'next/link';

import { Noto_Sans } from 'next/font/google'

import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <div className='main' >
      
      
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  ) 
}
