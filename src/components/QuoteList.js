import React from "react";
import QuoteCard from "./QuoteCard";

export default function QuoteList({ quotes, showImage = true, showActions = false, onDelete, onEdit }) {
  return (
    <div className="quote-list">
      {quotes.map((quote) => (
        <div key={quote.id} className="quote-item">
          <QuoteCard
            id={quote.id}
            image={quote.image}
            tag={quote.tag}
            quote={quote.quote}
            author={quote.author}
            year={quote.year}
            showImage={showImage}
            showActions={showActions}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  );
}