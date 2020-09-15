import React, { useState } from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import '../Login.css';
import { database, auth } from '../firebase';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };
  const SingIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <h1>Start exploring the universe</h1>
      <div className="login-card">
        <div className="form-input">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-input">
          <button
            type="submit"
            className="login__button login--sign-in"
            onClick={SingIn}
          >
            <AssignmentIndIcon />
            &nbsp; Sign In
          </button>
        </div>
        <div className="form-input">
          <button
            type="submit"
            className="login__button login--sign-up"
            onClick={SignUp}
          >
            <EmojiPeopleIcon />
            &nbsp; Create your Saturn Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
