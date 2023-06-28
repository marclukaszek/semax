import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  const paragraphs = text.split('\\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>{paragraphs}</div>
    </div>
  );
};

export default Feature;