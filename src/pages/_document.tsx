import { Html, Head, Main, NextScript } from 'next/document';

const DESCRIPTION =
  'Portfolio website for Hunter Parcells, a computer science student and aspiring web developer out of southeast Michigan. Be sure to check out The Archives for more!';

function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='language' content='EN' />
        <meta
          name='keywords'
          content='hunter parcells,website,games,software,developer,designer,personal,resume,hire,portfolio'
        />
        <meta name='author' content='Hunter Parcells' />
        <meta name='identifier-url' content='https://hunterparcells.com/' />
        <meta name='msapplication-TileColor' content='#FD252F' />
        <meta name='msapplication-TileImage' content='/img/icon/favicon-144.png' />
        <meta name='msapplication-config' content='/browserconfig.xml' />

        <meta name='description' content={DESCRIPTION} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://hunterparcells.com/' />
        <meta property='og:image' content='/img/icon/favicon-310.png' />
        <meta name='theme-color' content='#FD252F' />

        <link rel='shortcut icon' href='/img/icon/favicon.ico' />
        <link rel='icon' sizes='16x16 32x32 64x64' href='/img/icon/favicon.ico' />
        <link rel='icon' type='image/png' sizes='196x196' href='/img/icon/favicon-192.png' />
        <link rel='icon' type='image/png' sizes='160x160' href='/img/icon/favicon-160.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/img/icon/favicon-96.png' />
        <link rel='icon' type='image/png' sizes='64x64' href='/img/icon/favicon-64.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/img/icon/favicon-32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/img/icon/favicon-16.png' />
        <link rel='apple-touch-icon' href='/img/icon/favicon-57.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/img/icon/favicon-114.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/img/icon/favicon-72.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/img/icon/favicon-144.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/img/icon/favicon-60.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/img/icon/favicon-120.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/img/icon/favicon-76.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/img/icon/favicon-152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/img/icon/favicon-180.png' />

        {/* Why do I have to do this? Literally the @import doesn't work ONLY on the archives. */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Heebo:wght@400;800&family=Kanit:wght@200;600&family=Major+Mono+Display&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
