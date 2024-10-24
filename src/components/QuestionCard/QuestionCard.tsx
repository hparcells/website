import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dateFormat, { masks } from 'dateformat';
import { useState } from 'react';

import { Question } from '../../data/types';

import classes from './QuestionCard.module.scss';

function QuestionCard({
  question,
  isSelected,
  handleClick,
  handleDelete
}: {
  question: Question;
  isSelected: boolean;
  handleClick: (question: Question) => void;
  handleDelete: (id: string) => void;
}) {
  const [uuidDisplay, setUuidDisplay] = useState(question.id);

  async function deleteQuestion() {
    await handleDelete(question.id);
  }

  function onClick() {
    handleClick(question);
  }

  function copyUuid() {
    navigator.clipboard.writeText(question.id);
    setUuidDisplay('Copied!');
    setTimeout(() => {
      setUuidDisplay(question.id);
    }, 3000);
  }

  return (
    <div className={`${classes.root} ${isSelected && classes.selected}`} onClick={onClick}>
      <div className={classes.header}>
        <p className={classes.date}>{dateFormat(question.timestamp, 'yyyy-mm-dd @ HH:MM:ss')}</p>
        {question.email && <p className={classes.date}>{question.email}</p>}
      </div>
      <p className={classes.question}>{question.question}</p>
      <div className={classes.footer}>
        <p className={classes.uuid} onClick={copyUuid}>
          {uuidDisplay}
        </p>
        <FontAwesomeIcon icon={faTrash} onClick={deleteQuestion} />
      </div>
    </div>
  );
}

export default QuestionCard;
