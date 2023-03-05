import React from 'react';
import logo from './logo.png';
import './LandingPage.css';


const LandingPage = () => {
return (
<div className="landing-page">
<header className="landing-page-header">
<nav id="nav">
<img src={logo} alt="Logo" className="landing-page-logo" />
{/* <h1 className="landing-page-company-name">Grow Simplee</h1> */}
</nav>
</header>
<div className="landing-page-search">
<h1 className="landing-page-search-title">Let me help you!</h1>
<div className='searchdiv'>
{/* <i class="fa fa-user icon"></i> */}
            {/* <input class="input-field" type="text"> */}
<input type="text" className="landing-page-search-input" />
<button className="landing-page-search-button">Search</button>
</div>
</div>
</div>
);
};

export default LandingPage;