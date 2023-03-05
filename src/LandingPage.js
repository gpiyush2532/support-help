import React from 'react';
import logo from './logo.png';
import './LandingPage.css';


const LandingPage = () => {
return (
<div className="landing-page">
<div className="landing-page-header">
<img src={logo} alt="Logo" className="landing-page-logo" />
<h1 className="landing-page-company-name">Grow Simplee</h1>
</div>
<div className="landing-page-search">
<h2 className="landing-page-search-title">Let me help you!</h2>
<input type="text" className="landing-page-search-input" />
<button className="landing-page-search-button">Search</button>
</div>
</div>
);
};

export default LandingPage;