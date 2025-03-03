import React, { useState } from "react";
import QuoteList from "../components/QuoteList";
import QuoteFilter from "../components/QuoteFilter";
import BackButton from "../components/BackButton";

export default function QuoteListPage({ quotes }) {
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  const allTags = [...new Set(quotes.map((quote) => quote.tag))];

  return (
    <div>
      <h1>Danh Sách Trích Dẫn</h1>
      <BackButton />
      <QuoteFilter quotes={quotes} setFilteredQuotes={setFilteredQuotes} allTags={allTags} />
      <QuoteList quotes={filteredQuotes} showImage={false} />
    </div>
  );
}