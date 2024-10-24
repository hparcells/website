import Head from 'next/head';

function Layout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta property='og:title' content={`${title ? `${title} - ` : ''}Hunter Parcells`} />

        <title>{`${title ? `${title} - ` : ''}Hunter Parcells`}</title>
      </Head>
      {children}
    </div>
  );
}

export default Layout;
