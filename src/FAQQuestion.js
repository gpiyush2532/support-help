import React from 'react';

const FAQQuestion = ({ question, answer }) => {
const [isAnswerShown, setIsAnswerShown] = React.useState(false);

const handleQuestionClick = () => {
setIsAnswerShown(!isAnswerShown);
};

return (
<div className="faq-question">
<div className="faq-question-header">
<img
       className="faq-question-logo"
       src="/logo.png"
       alt="Company Logo"
     />
<h2 className="faq-question-heading">{question}</h2>
</div>
<div className="faq-question-body">
<input
       type="text"
       className="faq-question-search"
       placeholder="Search for an answer..."
     />
{isAnswerShown && <p className="faq-question-answer">{answer}</p>}
</div>
<div className="faq-question-footer">
<button
       className="faq-question-toggle"
       onClick={handleQuestionClick}
     >
{isAnswerShown ? 'Hide Answer' : 'Show Answer'}
</button>
</div>
</div>
);
};

export default FAQQuestion;