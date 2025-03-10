import React, { useState } from "react";
import QuoteCard from "./QuoteCard";
import Pagination from "./Pagination";

export default function QuoteList({ quotes, showImage = true, showActions = false, onDelete, onEdit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10;
  const totalPages = Math.ceil(quotes.length / quotesPerPage);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  return (
    <div className="quote-list row">
      {currentQuotes.map((quote) => (
        <div key={quote.id} className="quote-item col-md-6 mb-4">
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
      <div className="col-12">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}