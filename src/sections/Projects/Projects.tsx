import Link from 'next/link';
import ProjectComponent from '../../components/ProjectComponent/ProjectComponent';
import { Project } from '../../data/types';

import classes from './Projects.module.scss';

import elementalRebornImage from '/public/img/elemental-reborn.png';
import risingSwagImage from '/public/img/rising-swag.png';

const projectShowcase: Project[] = [
  {
    name: 'Rising Swag',
    description:
      'An interactive, curated list of available merch items from all around the Red Rising community from big to small.',
    image: risingSwagImage,
    github: 'rising-swag',
    demo: 'https://risingswag.com/'
  },
  {
    name: 'Elemental Reborn',
    description:
      'Yet another clone of carykh\'s "Elemental 3". Combine elements to discover new elements, each of which created and voted on by other players. Elemental Reborn was host to 1500+ users and currently contains more then 4.4k elements!\n\nBuilt using React w/ TypeScript and Socket.IO, utilizing a MongoDB Atlas database, all powered by a Node.js and Express backend.',
    image: elementalRebornImage,
    github: 'https://github.com/hparcells/elemental-reborn',
    demo: 'https://elemental.hunterparcells.com/',
    discord: 'https://discord.gg/X9VyN42'
  }
];

function Projects() {
  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Projects</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>
        More complete, large scale, and/or polished projects of mine that are showcase worthy.
      </p>

      <div className={classes.wrapper}>
        {projectShowcase.map((project, i) => {
          return <ProjectComponent project={project} key={i} />;
        })}
        <div className={classes.footer}>
          <p>
            For more projects and more content, check out <Link href='/archives'>The Archives</Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
