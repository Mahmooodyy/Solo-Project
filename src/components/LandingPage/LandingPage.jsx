import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Strive');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };
  const register = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">



      <h2 class="welcome">{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p class="desc">
          We become what we repeatedly do.
          </p>
          <p class="desc">Strive helps you make better habits and break bad ones.</p>  

        </div>
        <div
        >
          <button class="register" onClick={register}>Get Started</button>
          {/* <RegisterForm class="blurred-box"/> */}
      <br />
      <br />
      <br />
      <br />
          <center >
            <h4 class="page">Already a Member?</h4>
            <p class="login" onClick={onLogin}>
              Login
            </p>
            
          </center>
        </div>
      </div>
    </div>
    
  );
}

export default LandingPage;
