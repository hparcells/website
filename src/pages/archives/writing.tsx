import Link from 'next/link';

import Layout from '../../components/Layout';
import ArchiveItem from '../../components/ArchiveItem';

import classes from './index.module.scss';

import { writingArchiveData } from '../../data/archive-data';

function ArchivesWriting() {
  return (
    <Layout title='Writing'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Writing</h1>
        <p>Listed dates is the date the project was last worked on.</p>

        <h2>Stories</h2>
        <ul>
          {writingArchiveData.map((archiveItem, index) => {
            return <ArchiveItem archiveItem={archiveItem} key={index} />;
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default ArchivesWriting;
