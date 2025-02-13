import React, { useEffect, useState } from 'react';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/quotes')
            .then(response => response.json())
            .then(data => setQuotes(data));
    }, []);

    return (
        <div>
            {quotes.map((quote) => (
                <div key={quote.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <img src={quote.image} alt={quote.category} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                    <h3>{quote.quote}</h3>
                    <p>— {quote.author}</p>
                    <span>{quote.category}</span>
                </div>
            ))}
        </div>
    );
};

export default Quotes;
