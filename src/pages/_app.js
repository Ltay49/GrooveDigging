import '@/styles/globals.css'; // or your global CSS path
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});


export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
