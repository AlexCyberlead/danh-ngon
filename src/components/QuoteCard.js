import React from 'react';
import '../QuoteCard.css';

function QuoteCard(props) {
  return (
    <div className="quote-card">
      <div className="quote-image">
        <img src={props.image} alt="Hình minh họa" />
        <div className="quote-tag">{props.tag}</div>
      </div>
      <div className="quote-content">
        <div className="quote-year">{props.year}</div>
        <p className="quote-text">{props.quote}</p>
        <p className="quote-author">~ {props.author}</p>
      </div>
    </div>
  );
}

export default QuoteCard; 
