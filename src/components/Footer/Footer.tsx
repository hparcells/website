import { faArchive, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KofiButton from 'kofi-button';

import classes from './Footer.module.scss';
import Link from 'next/link';

function Footer() {
  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <div className={classes.footerSide}>
          <strong>
            <span className={classes.name}>Hunter Parcells</span>
          </strong>

          <p className={[classes.listListItem, classes.link].join(' ')}>
            <a href='mailto:contact@hunterparcells.com'>
              <span>
                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />{' '}
                contact@hunterparcells.com
              </span>
            </a>
          </p>

          <div style={{ marginTop: '1em' }}>
            <KofiButton color='#29abe0' title='Support Me on Ko-fi' kofiID='T6T1I6G51' />
          </div>
        </div>
        <div className={classes.footerSide}>
          <p className={[classes.listListItem, classes.link].join(' ')}>
            <Link href='/archives'>
              <span>
                <FontAwesomeIcon
                  icon={faArchive}
                  className={classes.icon}
                  style={{
                    verticalAlign: 'middle'
                  }}
                />{' '}
                The Archives
              </span>
            </Link>
          </p>
          <p className={[classes.listListItem, classes.link].join(' ')}>
            <a href='https://blog.hunterparcells.com'>
              <span>
                <FontAwesomeIcon
                  icon={faPen}
                  className={classes.icon}
                  style={{
                    verticalAlign: 'middle'
                  }}
                />{' '}
                Blog
              </span>
            </a>
          </p>
          <br />
          <p className={[classes.listListItem, classes.link].join(' ')}>
            <a href='https://github.com/hparcells' target='_blank'>
              <span>
                <FontAwesomeIcon icon={faGithub} className={classes.icon} /> @hparcells
              </span>
            </a>
          </p>
          <p className={[classes.listListItem, classes.link].join(' ')}>
            <a href='https://twitter.com/hunterparcells' target='_blank'>
              <span>
                <FontAwesomeIcon icon={faTwitter} className={classes.icon} /> @hunterparcells
              </span>
            </a>
          </p>
          <p className={[classes.listListItem, classes.link].join(' ')}>
            <a href='https://www.instagram.com/hunterparcells' target='_blank'>
              <span>
                <FontAwesomeIcon icon={faInstagram} className={classes.icon} /> @hunterparcells
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
