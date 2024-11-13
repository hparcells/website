import Link from 'next/link';

import Layout from '../../components/Layout';

import classes from '../../styles/archives.module.scss';

function ArchivesTools() {
  return (
    <Layout title='Tools'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Tools</h1>

        <h2>Hardware</h2>
        <p>
          Current desktop setup can be found at{' '}
          <a href='https://pcpartpicker.com/user/hparcells/saved/#view=qccBqs'>PCPartPicker</a>.
        </p>

        <h2>Software</h2>
        <ul>
          <li>
            <strong>Code Editor</strong>: Visual Studio Code and IntelliJ IDEA Ultimate
          </li>
          <li>
            <strong>Design</strong>: Figma
          </li>
          <li>
            <strong>Notes</strong>: Obsidian
          </li>
          <li>
            <strong>OS</strong>: Windows 10/11
          </li>
          <li>
            <strong>Macros</strong>:
          </li>
          <ul>
            <li>Oblitum Interception</li>
            <li>
              AutoHotkey (<i>see below</i>)
            </li>
            <li>VoiceMeeter Banana Macro Buttons</li>
          </ul>
          <li>
            <strong>Video Editor</strong>: DaVinci Resolve (formerly HitFilm)
          </li>
          <li>
            <strong>Primary Browser</strong>: Google Chrome
          </li>
        </ul>

        <ul>
          <li>diagrams.net</li>
          <li>Discord</li>
          <li>
            <s>G Suite</s> Google Workspace
          </li>
          <li>ShareX</li>
          <li>VLC Media Player</li>
          <li>VoiceMeeter Banana</li>
        </ul>

        <p>
          In addition to the software listed above, I used a variety of AutoHotkey scripts for
          quality of life, to increase productivity, and to automate certain tasks. These scripts
          can be found at{' '}
          <a href='https://github.com/hparcells/ahk-scripts' target='_blank'>
            https://github.com/hparcells/ahk-scripts
          </a>
          .
        </p>
        <p>These scripts also run my second keyboard dedicated to macros.</p>
      </div>
    </Layout>
  );
}

export default ArchivesTools;
