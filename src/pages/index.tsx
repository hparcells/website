import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import Splash from '../sections/Splash/Splash';

import AboutMe from '../sections/AboutMe/AboutMe';
import Projects from '../sections/Projects/Projects';

import classes from './index.module.scss';

function Index() {
  return (
    <Layout>
      <div className={classes.root}>
        <Splash />

        <div className={classes.wrapper}>
          <div className={classes.content}>
            <AboutMe />
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Projects />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export default Index;
