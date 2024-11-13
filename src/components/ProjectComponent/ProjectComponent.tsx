import Image from 'next/image';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import { Project } from '../../data/types';

import classes from './ProjectComponent.module.scss';

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
  y: -2,
  scale: 1.05,
  transition: { duration: 0.15 }
};

function ProjectComponent({ project }: { project: Project }) {
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <h2 className={classes.name}>{project.name}</h2>
        <p className={classes.description}>{project.description}</p>
        <div className={classes.links}>
          {project.demo && (
            <motion.a
              href={project.demo}
              target='_blank'
              transition={iconsSpring}
              variants={item}
              whileHover={iconHover}
            >
              <FontAwesomeIcon icon={faPlay} className={classes.icon} />
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target='_blank'
              transition={iconsSpring}
              variants={item}
              whileHover={iconHover}
            >
              <FontAwesomeIcon icon={faGithub} className={classes.icon} />
            </motion.a>
          )}
          {project.discord && (
            <motion.a
              href={project.discord}
              target='_blank'
              transition={iconsSpring}
              variants={item}
              whileHover={iconHover}
            >
              <FontAwesomeIcon icon={faDiscord} className={classes.icon} />
            </motion.a>
          )}
        </div>
      </div>
      <div className={classes.right}>
        <Image
          src={project.image}
          alt={project.name}
          placeholder='blur'
          className={classes.image}
        />
      </div>
    </div>
  );
}

export default ProjectComponent;
