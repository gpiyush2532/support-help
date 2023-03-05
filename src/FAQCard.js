import React, { useState } from 'react';
import './FAQCard.css';

const FAQCard = ({ question, answer }) => {
const [showAnswer, setShowAnswer] = useState(false);

const toggleAnswer = () => {
setShowAnswer(!showAnswer);
};

return (
<div className="faq-card" onClick={toggleAnswer}>
<h2 className="faq-card-question">{question}</h2>
{showAnswer && <p className="faq-card-answer">{answer}</p>}
</div>
);
};

export default FAQCard;