import React, { useState } from "react";
import QuoteList from "../components/QuoteList";
import QuoteFilter from "../components/QuoteFilter";
import BackButton from "../components/BackButton";

export default function QuoteListPage({ quotes }) {
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  const allTags = [...new Set(quotes.map((quote) => quote.tag))];

  return (
    <div className="page-container">
      <BackButton />
      <div className="quotes-list">
        <h1 className="text-2xl font-bold">Danh Sách Trích Dẫn</h1>
        <QuoteFilter quotes={quotes} setFilteredQuotes={setFilteredQuotes} allTags={allTags} />
        <QuoteList quotes={filteredQuotes} showImage={false} />
      </div>
    </div>
  );
}