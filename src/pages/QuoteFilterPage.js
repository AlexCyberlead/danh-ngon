import React, { useState, useEffect } from "react";
import QuoteList from "../components/QuoteList";
import QuoteFilter from "../components/QuoteFilter";
import BackButton from "../components/BackButton";
import { quotes as initialQuotes } from "../quotes";

export default function QuoteFilterPage() {
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    setFilteredQuotes(initialQuotes);
  }, []);

  const allTags = [...new Set(initialQuotes.map((quote) => quote.tag))];

  return (
    <div className="page-container">
      <BackButton />
      <div className="quotes-list">
        <h1>Lọc Danh Ngôn</h1>
        <QuoteList quotes={filteredQuotes} showActions={false} />
      </div>
      <div className="form-container">
        <QuoteFilter quotes={initialQuotes} setFilteredQuotes={setFilteredQuotes} allTags={allTags} />
      </div>
    </div>
  );
}
