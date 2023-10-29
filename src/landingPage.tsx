import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/MyPage');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the App</h1>
      <p>This is the landing page.</p>
      <button onClick={handleNextButtonClick}>Next</button>
    </div>
  );
}

export default LandingPage;
