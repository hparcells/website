import Link from 'next/link';

import Layout from '../../components/Layout';

import classes from '../../styles/archives.module.scss';

function Now() {
  return (
    <Layout title='Now'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Now</h1>
        <p>What am I doing in life right now?</p>
        <p>This page was last updated 2024-10-22.</p>
        <p>
          See also:{' '}
          <em>
            <a href='https://nownownow.com/about' target='_blank'>
              What is a now page?
            </a>
          </em>
        </p>

        <h2>Life</h2>
        <ul>
          <li>Full-time school.</li>
          <li>Part-time weekend job.</li>
          <li>Fencing.</li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>Co-authoring "Shadows of Redemption"</li>
          {/* <li>Minecraft plugins for the Butterfly SMP.</li> */}
          <li>
            Contract work for{' '}
            <a href='http://tck.gg/' target='_blank'>
              tck.gg
            </a>
            .
          </li>
          <li>
            Continuous work on{' '}
            <a href='https://risingswag.com/' target='_blank'>
              risingswag.com
            </a>
            .
          </li>
        </ul>

        <h2>Media</h2>
        <ul>
          {/* <li>Reading Pierce Brown's Red Rising: Sons of Ares Vol. 3: Forbidden Song</li> */}
          {/* <li>Watching Super Store.</li> */}
          {/* <li>Watching Sword Art Online.</li> */}
          {/* <li>Watching Jujutsu Kaisen.</li> */}
          <li>Watching Blue Lock Season 2.</li>
          <li>Watching Shangri-La Frontier.</li>
        </ul>

        <h2>Gaming</h2>
        <ul>
          <li>Playing osu!.</li>
          <li>Playing Rocket League.</li>
          <li>Playing Keep Talking and Nobody Explodes.</li>
          {/* <li>Playing Factorio: Space Age.</li> */}
        </ul>
      </div>
    </Layout>
  );
}

export default Now;
