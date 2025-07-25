import React from 'react';

const AuthSelection = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div id="choice-buttons">
      <button className="customer-btn" onClick={() => onLoginClick('customer')}>Login as Customer</button>
      <button className="operator-btn" onClick={() => onLoginClick('operator')}>Login as Operator</button>
      <button className="admin-btn" onClick={() => onLoginClick('admin')}>Login as Admin</button>
      <button className="register-btn" onClick={onRegisterClick}>Register New Account</button>
    </div>
  );
};

export default AuthSelection;
