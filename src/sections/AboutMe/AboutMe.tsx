import classes from './AboutMe.module.scss';

function AboutMe() {
  return (
    <div className={classes.root}>
      <h1>About Me</h1>

      <div className={classes.wrapper}>
        <div className={classes.content}>
          <p>
            Currently a third year Computer Science student based out of southeast Michigan. I am a
            self-taught programmer, starting back around 2014-15 with Java and C++ and eventually
            branching out into the endless world of web development. After exploring many different
            technologies, I've recently found myself enjoying working with the MERN stack and
            Next.js with many of my latest projects.
          </p>
          <p>
            Driven by a passion for learning, improvement/innovation, and creating, I have developed
            projects with a functionality and detail-oriented, user-first mindset, including this
            website, personal side projects, through contract and freelance work, and at my
            internship position.
          </p>
        </div>
        <div className={classes.content}>
          <div className={classes.chips}>
            <div className={classes.chip}>TypeScript</div>
            <div className={classes.chip}>React</div>
            <div className={classes.chip}>Next.js</div>
            <div className={classes.chip}>MongoDB</div>
            <div className={classes.chip}>RESTful API</div>
            <div className={classes.chip}>Git and GitHub</div>
            <div className={classes.chip}>HTML</div>
            <div className={classes.chip}>CSS/SASS</div>
            <div className={`${classes.chip} ${classes.secondaryChip}`}>RethinkDB</div>
            <div className={`${classes.chip} ${classes.secondaryChip}`}>Redux</div>
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
