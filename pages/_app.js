import Script from 'next/script';

import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg bg-white min-h-screen">

      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />

      </div>

      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/43b3e8a206.js" crossorigin="anonymous" />
  </ThemeProvider>

);
export default MyApp;
