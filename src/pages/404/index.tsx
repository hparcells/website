import Link from 'next/link';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout';

import classes from './404.module.scss';

function Custom404() {
  return (
    <Layout title='404'>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <h1>404 - Not Found</h1>
          <p>Hey! You're not supposed to be here.</p>
          <p>
            <Link href='/'>Back to safety</Link>
            {' << >> '}
            <a href='mailto:contact@hunterparcells.com'>Email me about it</a>
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export default Custom404;
