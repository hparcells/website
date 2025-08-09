import classes from './AboutMe.module.scss';

function AboutMe() {
  return (
    <div className={classes.root}>
      <h1>About Me</h1>

      <div className={classes.wrapper}>
        <div className={classes.content}>
          <p>
            Currently a fourth year Computer Science student out of southeast Michigan. I' a
            self-taught programmer dating back to 2014-15 with a background in Java and C++,
            eventually finding my niche in the endless world of web development. After exploring
            various technologies, I've found myself enjoying working with the MERN stack and Next.js
            on some of my latest projects.
          </p>
          <p>
            Driven by a passion for learning, improvement/innovation, and creating, I have developed
            projects with a scalability, detail-oriented, user-first mindset, including this
            website, professional work during my internships, personal side projects, and
            contract/freelance work.
          </p>
        </div>
        <div className={classes.content}>
          <div className={classes.chips}>
            <div className={classes.chip}>TypeScript</div>
            <div className={classes.chip}>React</div>
            <div className={classes.chip}>Next.js</div>
            <div className={classes.chip}>MongoDB</div>
            <div className={classes.chip}>SQL</div>
            <div className={`${classes.chip} ${classes.secondaryChip}`}>Ignition Perspective</div>
            <div className={`${classes.chip} ${classes.secondaryChip}`}>Python</div>
            <br />
            <br />
            <div className={`${classes.chip} ${classes.chip}`}>Java</div>
            <div className={`${classes.chip} ${classes.chip}`}>Figma</div>
            <div className={`${classes.chip} ${classes.secondaryChip}`}>Google Workspace</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
