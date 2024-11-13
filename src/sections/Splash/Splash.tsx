import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faDollar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReward } from 'react-rewards';
import { motion } from 'framer-motion';

import classes from './Splash.module.scss';
import Link from 'next/link';

const iconsSpring = {
  type: 'spring',
  damping: 14,
  stiffness: 100,
  mass: 1.25
};
const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};
const iconHover = {
  y: -4,
  scale: 1.05,
  transition: { duration: 0.1 }
};

function Splash() {
  const { reward } = useReward('hand-reward', 'confetti', { position: 'absolute' });

  return (
    <div>
      <div className={classes.splash}>
        <motion.div
          className={classes.splashContent}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={classes.introduction}>
            <span id='hand-reward' className={classes.handWrapper}>
              <span className={classes.hand} onClick={reward}>
                👋
              </span>
            </span>{' '}
            Hi, I'm <span className={classes.highlight}>Hunter</span>,
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 1.75 }}
          >
            an aspiring <strong>web developer</strong>, currently studying{' '}
            <strong>Computer Science</strong>.
          </motion.p>
          <motion.div
            className={classes.splashIcons}
            initial='hidden'
            animate='visible'
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  when: 'beforeChildren',
                  delay: 1.75,
                  staggerChildren: 0.1,
                  staggerDirection: -1
                }
              },
              hidden: {
                opacity: 0
              }
            }}
          >
            <motion.span transition={iconsSpring} variants={item} whileHover={iconHover}>
              <a href='https://github.com/hparcells' target='_blank' aria-label='GitHub'>
                <FontAwesomeIcon icon={faGithub} className={classes.splashIcon} />
              </a>
            </motion.span>
            <motion.span transition={iconsSpring} variants={item} whileHover={iconHover}>
              <a href='mailto:contact@hunterparcells.com' aria-label='Email'>
                <FontAwesomeIcon icon={faEnvelope} className={classes.splashIcon} />
              </a>
            </motion.span>
            <motion.span transition={iconsSpring} variants={item} whileHover={iconHover}>
              <a href='https://twitter.com/hunterparcells' target='_blank' aria-label='Twitter'>
                <FontAwesomeIcon icon={faTwitter} className={classes.splashIcon} />
              </a>
            </motion.span>
            <motion.span transition={iconsSpring} variants={item} whileHover={iconHover}>
              <a
                href='https://ko-fi.com/hunterparcells'
                target='_blank'
                aria-label='Donate on Ko-fi'
              >
                <FontAwesomeIcon icon={faDollar} className={classes.splashIcon} />
              </a>
            </motion.span>
            <motion.span transition={iconsSpring} variants={item} whileHover={iconHover}>
              <a
                href='https://www.linkedin.com/in/hunter-parcells/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FontAwesomeIcon icon={faLinkedin} className={classes.splashIcon} />
              </a>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div
          className={classes.splashFooter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 3 }}
        >
          <div className={classes.news}>
            <p>
              Check out the <Link href='/archives'>Archives</Link>!
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronDown} className={classes.scrollIcon} />
        </motion.div>
      </div>
      <svg
        xmlns='//www.w3.org/2000/svg'
        version='1.1'
        className='svg-filters'
        style={{
          display: 'none'
        }}
      >
        <defs>
          <filter id='highlight'>
            <feTurbulence type='fractalNoise' baseFrequency='0 0.15' numOctaves='1' result='warp' />
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='30'
              in='SourceGraphic'
              in2='warp'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Splash;
