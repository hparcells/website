import KofiButton from 'kofi-button';
import Link from 'next/link';

import Layout from '../../components/Layout';

import classes from '../../styles/archives.module.scss';

function ArchivesCoolPeople() {
  return (
    <Layout title='Cool People'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Cool People</h1>
        <p>
          Infinite love and thanks to the following people (in no particular order), for being the
          best you ever could be, showing me the world, making me a better person, and teaching me
          to love myself.
        </p>
        <p>
          Each of you have truly impacted my life for the better in one way or another, and have
          helped shape who I am today. Thank you for the good times we've had, the lessons we've
          learned, and the wisdom you've shared.
        </p>
        <p>
          Some of you, we may not have talked in months or years, others only even once, but know
          that I appreciate you, and I wish you best of luck in wherever life takes you. Per aspera,
          ad astra.
        </p>
        <ul>
          <li>Dave C.</li>
          <li>Chaz V.</li>
          <li>Nick H.</li>
          <li>Josh M.</li>
          <li>Caleb B.</li>
          <li>"Tibb"</li>
          <li>Denis</li>
          <li>Jim Y.</li>
          <li>Ian S.</li>
          <li>Tony</li>
          <li>All the members of NSG.</li>
          <li>All the members of 1710.</li>
        </ul>

        <h2>Supporters</h2>
        <p>
          Another big thanks to the people who have supported me through Patreon back in the day or
          through Ko-fi currently. You've been amazing.
        </p>
        <ul>
          <li>G lander</li>
          <li>Binkiklou</li>
          <li>OtterDemon</li>
        </ul>
        <KofiButton color='#29abe0' title='Support Me on Ko-fi' kofiID='T6T1I6G51' />
      </div>
    </Layout>
  );
}

export default ArchivesCoolPeople;
