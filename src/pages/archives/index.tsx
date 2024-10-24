import Link from 'next/link';

import Layout from '../../components/Layout';
import InlineChip from '../../components/InlineChip/InlineChip';

import classes from './index.module.scss';

function ArchivesIndex() {
  return (
    <Layout title='Archives'>
      <div className={classes.root}>
        <Link href='/'>Back to Home</Link>

        <h1>The Archives</h1>
        <p>
          This place was originally made to be one big list of code, music, writing, and other
          projects I've worked on... but has evolved to be that <em>plus</em> some bonus content for
          the website as well.
        </p>
        <p>This place gets usually updated quite frequently.</p>

        <p className={classes.strongIndexHeader}>
          <strong>Content</strong>
        </p>
        <ul className={classes.indexList}>
          <li>
            Programming
            <InlineChip text='Under Construction' />
          </li>
          <li>
            <Link href='/archives/writing'>Writing</Link>
          </li>
          <li>
            <Link href='/archives/spreadsheets'>Spreadsheets</Link>
          </li>
          {/* <li>
            Music
            <InlineChip text='Under Construction' />
          </li> */}
        </ul>
        <ul>
          <li>
            <a href='http://blog.hunterparcells.com/' target='_blank'>
              Blog
            </a>
          </li>
          <li>
            <Link href='/archives/questions'>Q&A</Link>
          </li>
        </ul>

        <p className={classes.strongIndexHeader}>
          <strong>About</strong>
        </p>
        <ul className={classes.indexList}>
          <li>
            <Link href='/archives/now'>Now</Link>
            <InlineChip />
          </li>
          <li>
            <Link href='/archives/me'>More About Me</Link>
          </li>
          <li>
            <Link href='/archives/tools'>Tools and Workflow</Link>
          </li>
          <li>
            <Link href='/archives/website'>This Website</Link>
          </li>
        </ul>

        <p className={classes.strongIndexHeader}>
          <strong>Other</strong>
        </p>
        <ul className={classes.indexList}>
          <li>
            <a href='https://ko-fi.com/hunterparcells' target='_blank'>
              Donate (Ko-fi)
            </a>
          </li>
          <li>
            <Link href='/archives/cool'>Cool People</Link>
          </li>
          <li>
            <Link href='/archives/banners'>Banners</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default ArchivesIndex;
