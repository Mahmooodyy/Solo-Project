import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        {/* <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button> */}
        <h4>Already a Member?</h4>
            <p class="login"
            
            onClick={() => {
              history.push('/login');
            }}>
              Login
            </p>
      </center>
    </div>
  );
}

export default RegisterPage;
