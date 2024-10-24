import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import QuestionCard from '../QuestionCard/QuestionCard';

import { Question } from '../../data/types';

import classes from './QuestionsQueue.module.scss';

function QuestionsQueue({ handleLogout }: { handleLogout: () => void }) {
  const [cookie, setCookie] = useCookies(['apiKey']);

  const [queue, setQueue] = useState<Question[]>();
  const [selected, setSelected] = useState<Question>();

  const [disabled, setDisabled] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('Send');

  async function refreshQueue() {
    const response = await axios.get('/api/qna/queue', {
      headers: { Authorization: `hunterparcells@${cookie.apiKey}` }
    });
    setQueue(response.data);
  }

  useEffect(() => {
    (async () => {
      await refreshQueue();
    })();
  }, []);

  function handleAnswerChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  async function handleSubmit() {
    if (!answer || answer.trim() === '') {
      return;
    }

    setDisabled(true);
    setButtonText('Sending...');

    const response = await axios.post(
      '/api/qna/send-answer',
      {
        id: selected?.id,
        answer: answer.trim()
      },
      { headers: { Authorization: `hunterparcells@${cookie.apiKey}` } }
    );
    if (response.status === 200) {
      setAnswer('');
      setSelected(null as any);
      await refreshQueue();
      setButtonText('Answer sent!');
      setTimeout(() => {
        setButtonText('Send');
      }, 3000);
    }
    setDisabled(false);
  }

  function handleClick(question: Question) {
    if (question.id !== selected?.id) {
      setSelected(question);
      setAnswer('');
    }
  }

  async function handleDelete(id: string) {
    await axios.post(
      `/api/qna/delete-question`,
      {
        id
      },
      {
        headers: { Authorization: `hunterparcells@${cookie.apiKey}` }
      }
    );

    if (selected?.id) {
      setSelected(null as any);
    }
    await refreshQueue();
  }

  return (
    <div className={classes.root}>
      {queue && queue.length > 0 && (
        <div className={classes.form}>
          <textarea
            className={classes.input}
            value={answer}
            onChange={handleAnswerChange}
            disabled={disabled || !selected}
            placeholder={selected ? selected.question : 'Select a question...'}
          />
          <button
            className={classes.button}
            onClick={handleSubmit}
            disabled={disabled || !selected}
          >
            {buttonText}
          </button>
        </div>
      )}

      {queue ? (
        queue.length > 0 ? (
          <div>
            <h2>Questions Queue</h2>
            <div className={classes.boxed}>
              {queue.map((question, i) => {
                return (
                  <QuestionCard
                    question={question}
                    isSelected={selected?.id === question.id}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    key={question.id}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <p>No questions.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
      <div className={classes.buttonWrapper}>
        <button className={classes.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default QuestionsQueue;
