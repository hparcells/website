import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import Layout from '../../../../components/Layout';
import QuestionsQueue from '../../../../components/QuestionsQueue/QuestionsQueue';

import classes from './dashboard.module.scss';

const USERNAME = 'hunterparcells';

function QuestionsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookie, setCookie] = useCookies(['apiKey']);

  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    (async () => {
      if (cookie.apiKey) {
        setDisabled(true);
        const response = await axios.post('/api/user/validate-key', {
          username: USERNAME,
          apiKey: cookie.apiKey
        });
        setIsAuthenticated(response.data.success);
        setDisabled(false);
      }
    })();
  }, []);

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIncorrect(false);
    setPassword(event.target.value);
  }

  function handleLogin(event: any) {
    event.preventDefault();

    (async () => {
      setIncorrect(false);
      setDisabled(true);
      if (password) {
        const authenticated = await axios.post('/api/user/login', {
          username: USERNAME,
          password
        });
        if (!authenticated.data.success) {
          setDisabled(false);
          setIncorrect(true);
          return;
        }
        setCookie('apiKey', authenticated.data.apiKey, { maxAge: 3600 });
        setIsAuthenticated(true);
      }
      setDisabled(false);
    })();
  }
  function handleLogout() {
    setCookie('apiKey', '', { maxAge: 0 });
    setPassword('');
    setDisabled(false);
    setIsAuthenticated(false);
  }

  return (
    <Layout title='Q&A'>
      <div className={classes.root}>
        <Link href='/archives/questions'>Back to Q&A</Link>

        <h1>Questions Dashboard</h1>
        {isAuthenticated ? (
          <QuestionsQueue handleLogout={handleLogout} />
        ) : (
          <div>
            <form onSubmit={handleLogin} className={classes.form}>
              <input className={classes.input} type='text' value={USERNAME} disabled={true} />
              <input
                className={classes.input}
                type='password'
                value={password}
                onChange={handlePasswordChange}
                disabled={disabled}
                placeholder='Password'
              />
              <button className={classes.button} onClick={handleLogin}>
                Login
              </button>
            </form>
            {incorrect && (
              <p className={classes.incorrect}>
                Incorrect password! Check your information and try again. Remember passwords are
                case-sensitive.
              </p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default QuestionsDashboard;
