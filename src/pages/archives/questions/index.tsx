import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import humanizeDuration from 'humanize-duration';

import Layout from '../../../components/Layout';
import QuestionAndAnswer from '../../../components/QuestionAndAnswer/QuestionAndAnswer';

import { isValidEmail } from '../../../util/email';

import { QnaItem } from '../../../data/types';

import classes from './questions.module.scss';

function average(array: number[]) {
  return (
    array.reduce((a, b) => {
      return a + b;
    }) / array.length
  );
}

function QuestionsAndAnswers() {
  const [feed, setFeed] = useState<QnaItem[]>();

  const [question, setQuestion] = useState<string>('');
  const [sendDisabled, setSendDisabled] = useState<boolean>(false);
  const [allDisabled, setAllDisabled] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Send');
  const [email, setEmail] = useState<string>('');
  const [emailPromptEnabled, setEmailPromptEnabled] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get<QnaItem[]>('/api/qna/feed');

      setFeed(response.data);
    })();
  }, []);

  useEffect(() => {
    if (question.trim() === '') {
      setSendDisabled(true);
      return;
    }
    if (emailPromptEnabled && !isValidEmail(email)) {
      if (email.trim() === '') {
        setSendDisabled(false);
        return;
      }

      setSendDisabled(true);
      return;
    }
    setSendDisabled(false);
  }, [question, email]);

  function handleQuestionChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuestion(event.target.value);
  }
  async function handleSubmit() {
    // Validate question.
    if (!question || question.trim() === '') {
      return;
    }

    // Validate email.
    if (emailPromptEnabled && email && !isValidEmail(email)) {
      return;
    }

    setAllDisabled(true);
    setButtonText('Sending...');
    const response = await axios.post('/api/qna/send-question', {
      question: question.trim(),
      email: emailPromptEnabled ? email.trim() : null
    });
    if (response.status === 200) {
      setQuestion('');
      setEmailPromptEnabled(false);
      setButtonText('Question sent!');
      setTimeout(() => {
        setButtonText('Send');
      }, 3000);
    }
    setAllDisabled(false);
  }

  function handleEmailPromptToggleClick() {
    setEmailPromptEnabled(true);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value.trim());
  }

  return (
    <Layout title='Q&A'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Questions and Answers</h1>
        <p style={{ flexGrow: 1 }}>
          Ask me anything! Or if you just want to say hi and introduce yourself that's cool too.
        </p>

        <div className={classes.form}>
          <textarea
            className={classes.questionInput}
            placeholder='Why is the sky blue?'
            value={question}
            onChange={handleQuestionChange}
            disabled={allDisabled}
          />
          <div className={classes.sendRow}>
            {emailPromptEnabled ? (
              <div>
                <span>Email: </span>
                <input
                  className={`${classes.emailInput}`}
                  placeholder='john.doe@example.com'
                  value={email}
                  onChange={handleEmailChange}
                  disabled={allDisabled}
                />
              </div>
            ) : (
              <button className={classes.secondaryButton} onClick={handleEmailPromptToggleClick}>
                Get notified?
              </button>
            )}

            <button
              className={classes.submitButton}
              onClick={handleSubmit}
              disabled={allDisabled || sendDisabled}
            >
              {buttonText}
            </button>
          </div>
        </div>

        <h2>Answered Questions</h2>
        {feed && (
          <p>
            Average response time is{' '}
            {humanizeDuration(
              Math.round(
                Math.round(
                  average(
                    feed.map((feedItem) => {
                      return Math.round(feedItem.answer.timestamp - feedItem.question.timestamp);
                    })
                  )
                ) / 1000
              ) * 1000
            )}
            .
          </p>
        )}
        <p
          style={{
            textAlign: 'center'
          }}
        >
          {feed && feed.length === 0 && 'None. Be the first!'}
        </p>
        {feed ? (
          <div>
            {feed.map((feedItem: QnaItem) => {
              return <QuestionAndAnswer feedItem={feedItem} key={feedItem.question.id} />;
            })}
          </div>
        ) : (
          <p
            style={{
              textAlign: 'center'
            }}
          >
            Loading...
          </p>
        )}
        <p style={{ textAlign: 'center', marginTop: 42 }}>
          <Link href='/archives/questions/dashboard'>Answer some questions.</Link>
        </p>
      </div>
    </Layout>
  );
}

export default QuestionsAndAnswers;
