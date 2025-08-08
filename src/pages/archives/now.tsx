import { useEffect } from 'react';
import { useRemark } from 'react-remark';
import Link from 'next/link';
import axios from 'axios';

import Layout from '../../components/Layout';

import classes from './index.module.scss';

export async function getStaticProps() {
  if (!process.env.NOW_URL) {
    return {
      props: {
        now: 'No data found.'
      },
      revalidate: 60
    };
  }

  const res = await axios.get(process.env.NOW_URL, {
    validateStatus: (status) => {
      return true;
    }
  });

  const now = res.data || 'No data found.';

  return {
    props: {
      now
    },
    revalidate: 3600
  };
}

function Now({ now }: { now: string }) {
  const [nowContent, setNowContent] = useRemark();

  useEffect(() => {
    setNowContent(now);
  }, [now]);

  return (
    <Layout title='Now'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Now</h1>
        <p>What am I doing in life right now?</p>
        <p>
          See also:{' '}
          <em>
            <a href='https://nownownow.com/about' target='_blank'>
              What is a now page?
            </a>
          </em>
        </p>

        {nowContent}
      </div>
    </Layout>
  );
}

export default Now;
