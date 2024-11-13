import Link from 'next/link';

import Layout from '../../components/Layout';
import InlineChip from '../../components/InlineChip/InlineChip';

import classes from '../../styles/archives.module.scss';

function ArchivesSpreadsheets() {
  return (
    <Layout title='Spreadsheets'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Spreadsheets</h1>
        <p>
          Big Google Sheets nerd here. I love using spreadsheets to track various things and
          organize data. I've created numerous spreadsheets that I have recycled for various
          projects and some of the more polished ones are listed here.
        </p>

        <p>Things I need Google Sheets to add:</p>
        <ul>
          <li style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
            =XLOOKUP
          </li>
          <li style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
            Add a "Conditional formatting..." option to the right click context menu when selecting
            cells.
          </li>
          <li>Fix "chart bugging" when editing source data from a large sheet.</li>
          <li>Add check/tick box customization options (changing the icon).</li>
          <li>Make =QUERY queries auto-change with sheet changes.</li>
          <li>Why is a blank cell equal to ""... but a "" cell not =ISBLANK()?</li>
        </ul>

        <h2>Templates</h2>
        <p>File {'>'} Make a copy</p>
        <ul>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1ATGY-Zg6kXoDmycATp7jX0sVGsTqa7dWBNL5Ooxep4s/edit?usp=sharing'
              target='blank'
            >
              Valorant RR History
            </a>
            <InlineChip text='High Fidelity' />: Track RR gains and losses. Track win rate across
            days, maps, agents, and more. Generate a W/L display for your Discord status.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1sihTOaXPsVlIpmgnDdsjRbdJuhupXcZh-d2OrV3gigY/edit?usp=sharing'
              target='blank'
            >
              Finance Template
            </a>
            <InlineChip text='Beta' />: Track spending across accounts, planned expenses, available
            money for the week, and more.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1zo4qIlByV7U7cE6jgI5dg745d37hHuqR6N8_Ku3SsIs/edit?usp=sharing'
              target='blank'
            >
              Music Tournament Scoring and Stats Sheet
            </a>
            <InlineChip text='High Fidelity' />: Scoring sheet and stats for a music tournament.
          </li>
        </ul>
        <ul>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1FM_Ahy2RggCsxBJkKCccp4XVgsZiE1IhcuSj97W1cbc/edit?usp=sharing'
              target='blank'
            >
              Book Pacer
            </a>
            : One page target, one end date. Find out how many pages you should read per day to
            finish a book by a certain date with data visualization. Enter your target in the C
            column and log your progress in the E column.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/167h76slStQE1Q_IsectLTqQEiHZUzGrQqUEYVbDwE0M/edit?usp=sharing'
              target='blank'
            >
              Advanced Book Pacer
            </a>
            : Just like the Book Pacer above, but allows for multiple page targets over the duration
            of the book. Set targets in the E column, log progress in F column.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/193H0oYwYRjCVFK_btSYD9c3mwSqcSr_pie9kFIyW1K8/edit?usp=sharing'
              target='blank'
            >
              Reading Log/List
            </a>
            : Track the books you read and when along with the length of them. Audiobook support
            too!
          </li>
        </ul>

        <h2>Public</h2>
        <ul>
          <li>
            <a href='https://docs.google.com/spreadsheets/d/1iNvxIq26vOTbI3qhXYcD8VTJ0SYfYCiIh4mZ0YwJCjM/edit?usp=sharing'>
              Backpack and EDC
            </a>
            <InlineChip text='Updated!' />: The things that I carry on me and in my bag.
          </li>
          <li>
            <u>Bugs and Features</u> <InlineChip text='Under Construction' />: List of bugs and
            features requests across major applications.
          </li>
          <li>
            <a href='https://docs.google.com/spreadsheets/d/1OHlmRnjF5eIgG1PvMDCFCenwPidwzMMQ083MRLkbafY/edit?gid=35795944'>
              Restaurant Closing Time Analysis
            </a>
            <InlineChip text='High Fidelity' />: A petty analysis on the closing times of the
            employees at my workplace.
          </li>
          <li>
            <a href='https://docs.google.com/spreadsheets/d/18pa2avFkB8ZJgvHQyFyurhVUmEAEq_Hjmr1Q11kE0GA/edit?usp=sharing'>
              Crossword Speedrun Analysis
            </a>
            : An analysis on the suspicious runs submitted to the 100th Anniversary of the Crossword
            Puzzle leaderboard on speedrun.com.
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://docs.google.com/spreadsheets/d/1YYu9tNWE7hryX1QdDcJZNWcys3WiBgi3neh3rUL0KdQ/edit?usp=sharing'>
              osu! Tournament History
            </a>
            : A log of my tournament participation in the rhythm game, osu!.
          </li>
          <li>
            <a href='https://docs.google.com/spreadsheets/d/1sOkhkyFVsSleyAh1lkP3YWsZAFwFisrR5CcIVMharHI/edit?usp=sharing'>
              Portal 2 Co-op Players
            </a>
            : A log of all the random queue players I find in Portal 2 Co-op with data visualization
            for player quality on days and time, individual player stats, and total games.
          </li>
          <li>
            <a href='https://docs.google.com/spreadsheets/d/11ZzUuGBsi6d1JFZ-hmXTRTG6zeGNbBNQbhU3qpgE0Yo/edit?usp=sharing'>
              Keep Talking and Nobody Explodes Mod Ideas
            </a>
            : A collection of my mod ideas for KTaNE.
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default ArchivesSpreadsheets;
