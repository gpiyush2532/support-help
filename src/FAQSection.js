import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './FAQSection.css';

const FAQSection = () => {
const [faqs, setFaqs] = useState([]);

useEffect(() => {
fetch('api/faqs')
.then(response => response.json())
.then(data => setFaqs(data))
.catch(error => console.log(error));
}, []);

return (
<div className="faq-section">
<div className="faq-section-header">
<img src={logo} alt="Logo" className="faq-section-logo" />
<h1 className="faq-section-heading">FAQs</h1>
</div>
<div className="faq-section-search">
<h2 className="faq-section-search-title">Search for an answer</h2>
<input type="text" className="faq-section-search-input" />
<button className="faq-section-search-button">Search</button>
</div>
<div className="faq-section-questions">
{faqs.map(faq => (
<FAQCard key={faq.id} question={faq.question} answer={faq.answer} />
))}
</div>
</div>
);
};

export default FAQSection;