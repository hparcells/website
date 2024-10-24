import dateFormat from 'dateformat';
import { useState } from 'react';

import { QnaItem } from '../../data/types';

import classes from './QuestionAndAnswer.module.scss';

function QuestionAndAnswer({ feedItem }: { feedItem: QnaItem }) {
  const [permalinkText, setPermalinkText] = useState<string>('Permalink');

  function handleCopyPermalink() {
    navigator.clipboard.writeText(
      `${window.location.protocol}//${window.location.host}${window.location.pathname}/${feedItem.question.id}`
    );
    setPermalinkText('Copied!');
    setTimeout(() => {
      setPermalinkText('Permalink');
    }, 3000);
  }

  return (
    <div className={classes.response}>
      <div className={classes.header}>
        <p className={classes.timestamp}>
          {dateFormat(feedItem.question.timestamp, 'yyyy-mm-dd @ hh:MM TT Z')}
        </p>
        <p className={classes.permalink} onClick={handleCopyPermalink}>
          {permalinkText}
        </p>
      </div>
      <p className={classes.question}>{feedItem.question.question}</p>
      <p className={classes.answer}>{feedItem.answer.answer}</p>
    </div>
  );
}

export default QuestionAndAnswer;
