import React, { useState } from 'react';
import AuthSelection from '../components/AuthSelection';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import '../styles/Auth.css';

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('choice'); // choice | login | register
  const [loginRole, setLoginRole] = useState('');

  const showLoginForm = (role) => {
    setLoginRole(role);
    setActiveForm('login');
  };

  const goBack = () => {
    setActiveForm('choice');
    setLoginRole('');
  };

  return (
    <div className="main-login">
      <h1 id="title">Welcome to Dry Panda</h1>

      {activeForm === 'choice' && <AuthSelection onLoginClick={showLoginForm} onRegisterClick={() => setActiveForm('register')} />}
      {activeForm === 'login' && <LoginForm role={loginRole} onBack={goBack} />}
      {activeForm === 'register' && <RegisterForm onBack={goBack} />}
    </div>
  );
};

export default AuthPage;
