import { useEffect } from 'react';
import { AppProps } from 'next/app';
import ReactGA from 'react-ga4';
import { CookiesProvider } from 'react-cookie';
import Head from 'next/head';

import '../styles/root.scss';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-HQQLMSRB9W');
      ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </div>
  );
}

export default App;
