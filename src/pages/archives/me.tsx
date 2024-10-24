import Link from 'next/link';
import Layout from '../../components/Layout';

import classes from '../../styles/archives.module.scss';

function AboutMe() {
  return (
    <Layout title='About'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>More About Me</h1>
        <p>Little bit more about me that can't be fit on the home page.</p>

        <h2>Programming</h2>
        <h3>Humble Beginnings (2015-2017)</h3>
        <p>
          I jumped in the deep end of programming somewhere in the middle of 2015 with{' '}
          <strong>Java</strong> and basic <strong>HTML</strong> and <strong>CSS</strong> out of pure
          boredom. I learned Java through videos online and basic web development from videos
          reading things online from websites like W3Schools.
        </p>
        <p>
          I had learned my way around basic Java usage, after that, I then started to learn about
          Java's JFrame and Canvas. I even still learn new things whenever I have to use Java for
          something. I used this knowledge to produce a couple utility applications and started
          learning about <strong>Minecraft</strong> plugin and mod development which I still do
          sometimes to this day.
        </p>
        <p>
          A couple of years later I also tried poking around in <strong>Python</strong>,{' '}
          <strong>C#</strong>, and <strong>C++</strong>. I had basic knowledge of{' '}
          <strong>JavaScript</strong> and <strong>jQuery</strong> at the time, which allowed me to
          try and do some fancy things in my projects, but still was very limited. I had also used a
          number of game engines like Game Maker Studio 1, Game Maker Studio 2, and Unity.
        </p>
        <p>
          At this point I had created a website or two for myself, showcasing some projects of mine.
          Being a static site, these were hosted on Netlify.
        </p>

        <h3>Modern Web Development (2018-2022)</h3>
        <p>
          It wasn't really until around mid-2018 where I had decided that web development is where I
          wanted to stay. I had started developing full projects using JavaScript trying out many
          different frameworks, libraries, and utilities. I also had learned about{' '}
          <strong>TypeScript</strong> at this time. It's hard to believe there was a time where I
          didn't use TypeScript.
        </p>
        <p>
          In early-2019 I pretty much has solidified myself in the <strong>React</strong> ecosystem,
          which allowed me to pump out many different projects while trying all libraries it had to
          offer. This is where I picked up <strong>Gatsby</strong> for my static site needs.
        </p>
        <p>
          In 2020 I finally started to make projects that incorporated a back-end using databases
          like <strong>RethinkDB</strong> and <strong>MongoDB</strong>. I also had learned to use{' '}
          <strong>Socket.IO</strong>. Due to financial limitations, these projects were only online
          temporarily due to them being hosted on platforms like Heroku's free tier, or servers ran
          by friends.
        </p>
        <p>
          I transitioned to using <strong>Next.js</strong> for my projects somewhere around the end
          of 2020.
        </p>

        <h3>Present Day (2022-Present)</h3>
        <p>
          After a little bit of a break throughout 2021 and most of 2022 due to burnout amongst
          other reasons, I got back at it. Finally getting my hands on a server of my own, I was now
          more free to create anything I wanted.
        </p>
        <p>
          During this time, I had also decided to try and learn the best practices and patterns used
          for web development in general, user authentication, backend and API development, and how
          to truly use Next.js.
        </p>
        <p>
          In mid-2024, I landed my first <strong>internship at Magna Electronics</strong>.
        </p>
        <p>
          You can view what it took to make this website possible by visiting the{' '}
          <Link href='/archives/website'>This Website</Link> page.
        </p>
        <p>
          If you want to check out what I'm into right now, read my{' '}
          <Link href='/archives/now'>Now Page</Link>.
        </p>

        <h2>Outside of Development</h2>
        <p>
          Outside of development I have a huge <del>addiction</del> passion for gaming. I've
          previously played competitive(ly) in Rocket League, CS:GO, and Valorant. As as aviation
          nerd, I love any flight simulator (Project Wingman, MSFS and FSX), but notably recently
          put a lot of my time here into Digital Combat Simulator (look it up).
        </p>
        <p>
          Surprisingly, I've picked up the sport of fencing, and have been somewhat active in
          practice and competitions since late 2023. For anyone who's familiar with the sport, I've
          been focusing on foil and occasionally fence sabre.
        </p>
        <p>In the past, I've tried my hand at creating music but never really got fully into it.</p>
        <p>
          I still occasionally write in my free time whenever ideas come into my head or whenever I
          feel my "creative fuel" is full. This is usually after a period of consuming new media
          like reading books and watching movies and shows. While I don't really have one style, I
          usually enjoy writing in a more "long form" style. Writing for screens (screenplays) has
          also been really fun.
        </p>
        <p>
          I've been trying to improve at video editing. While I still haven't made anything crazy,
          I've learned a lot. I've previously used Vegas Pro for a bit and Premier Pro for a hot
          minute. Soon after, I fell into learning HitFilm, but after performance issues arose and
          the lack of basic hotkeys, I switched to DaVinci Resolve.
        </p>
      </div>
    </Layout>
  );
}

export default AboutMe;
