import '@/styles/globals.css'; // or your global CSS path
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={spaceGrotesk.className}>
      <Component {...pageProps} />
    </main>
  );
}
