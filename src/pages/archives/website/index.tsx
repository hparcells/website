import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import Layout from '../../../components/Layout';

import classes from './website.module.scss';

function ThisWebsite() {
  return (
    <Layout title='This Website'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>This Website</h1>
        <p style={{ marginBottom: '0.5em' }}>This website was made with:</p>
        <div className={classes.toolboxes}>
          <div className={classes.toolbox}>
            <strong>Front-end</strong>
            <ul>
              <li>
                <strong>
                  <a href='https://reactjs.org/' target='_blank'>
                    React
                  </a>
                </strong>
              </li>
              <li>
                <a href='https://www.typescriptlang.org/' target='_blank'>
                  TypeScript
                </a>
              </li>
              <li>
                <a href='https://www.typescriptlang.org/' target='_blank'>
                  SASS/SCSS
                </a>
              </li>
              <li>
                <a href='https://www.framer.com/motion/' target='_blank'>
                  Framer Motion
                </a>
              </li>
              <li>
                <a href='https://fontawesome.com/' target='_blank'>
                  Font Awesome
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.toolbox}>
            <strong>Back-end</strong>
            <ul>
              <li>
                <strong>
                  <a href='https://www.mongodb.com/' target='_blank'>
                    MongoDB
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href='https://expressjs.com/' target='_blank'>
                    Express
                  </a>
                </strong>
              </li>
              <li>
                <a href='https://www.backblaze.com/' target='_blank'>
                  Backblaze
                </a>
              </li>
              <li>
                <a href='https://app.sendgrid.com/' target='_blank'>
                  Twilio SendGrid
                </a>
              </li>
              <li>
                <a href='https://discord.js.org/#/' target='_blank'>
                  discord.js
                </a>
              </li>
              <li>
                <a href='https://axios-http.com/' target='_blank'>
                  DigitalOcean
                </a>
              </li>
              <li>
                <a href='https://www.cloudflare.com/' target='_blank'>
                  Cloudflare
                </a>
              </li>
              <li>
                <a href='https://httpd.apache.org/' target='_blank'>
                  Apache
                </a>
              </li>
              <li>
                <a href='https://pm2.keymetrics.io/' target='_blank'>
                  PM2
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.toolbox}>
            <strong>Development/Both</strong>
            <ul>
              <li>
                <strong>
                  <a href='https://nodejs.org/en/' target='_blank'>
                    Node.js
                  </a>
                </strong>
              </li>
              <li>
                <a href='https://nextjs.org/' target='_blank'>
                  Next.js
                </a>
              </li>
              <li>
                <a href='https://git-scm.com/' target='_blank'>
                  Git
                </a>
              </li>
              <li>
                <a href='https://github.com/' target='_blank'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://code.visualstudio.com/' target='_blank'>
                  Visual Studio Code
                </a>
              </li>
              <li>
                <span className={classes.heart}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ThisWebsite;
