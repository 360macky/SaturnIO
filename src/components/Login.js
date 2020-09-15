import React from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import '../Login.css';

function Login() {
  const SignUp = (e) => {
    e.preventDefault();
  };
  const SingIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <h1>Empieza a explorar el universo</h1>
      <div className="login-card">
        <div className="form-input">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" className="form-control" />
        </div>
        <div className="form-input">
          <button type="submit" className="login__button login--sign-in" onClick={SingIn}>
            <AssignmentIndIcon />
            &nbsp; Sign In
          </button>
        </div>
        <div className="form-input">
          <button type="submit" className="login__button login--sign-up" onClick={SignUp}>
            <EmojiPeopleIcon />
            &nbsp; Create your Saturn Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
