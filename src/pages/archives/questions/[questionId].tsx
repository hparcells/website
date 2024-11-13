import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import QuestionAndAnswer from '../../../components/QuestionAndAnswer/QuestionAndAnswer';
import Layout from '../../../components/Layout';

import { QnaItem } from '../../../data/types';

import classes from './questions.module.scss';

function QuestionPermalink() {
  const router = useRouter();
  const { questionId } = router.query;

  const [feedItem, setFeedItem] = useState<QnaItem>();

  useEffect(() => {
    (async () => {
      if (questionId) {
        let response;
        try {
          response = await axios.get(`/api/qna/combo-meal/${questionId}`);
        } catch (error) {
          router.push('/archives/questions');
          return;
        }
        const data = await response.data;
        setFeedItem(data);
      }
    })();
  }, [questionId]);

  return (
    <Layout>
      <div className={classes.root}>
        <Link href='/archives/questions'>Back to Q&A</Link>

        <h1>Questions and Answers</h1>
        <p>This page is a permalink for this question.</p>

        {feedItem ? <QuestionAndAnswer feedItem={feedItem} /> : <p>Loading...</p>}
      </div>
    </Layout>
  );
}

export default QuestionPermalink;
