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
    <div className="container">
      <BackButton />
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-2xl font-bold">Lọc Danh Ngôn</h1>
          <QuoteList quotes={filteredQuotes} showActions={false} />
        </div>
        <div className="col-md-4">
          <QuoteFilter quotes={initialQuotes} setFilteredQuotes={setFilteredQuotes} allTags={allTags} />
        </div>
      </div>
    </div>
  );
}
