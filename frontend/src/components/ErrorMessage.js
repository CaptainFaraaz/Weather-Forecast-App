import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <i className="error-icon">⚠️</i>
      <p>{message || 'An error occurred. Please try again.'}</p>
    </div>
  );
};

export default ErrorMessage;
