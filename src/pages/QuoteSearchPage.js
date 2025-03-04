import React, { useState } from "react";
import QuoteList from "../components/QuoteList";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
import { quotes as initialQuotes } from "../quotes";

export default function QuoteSearchPage() {
  const [filteredQuotes, setFilteredQuotes] = useState(initialQuotes);

  return (
    <div className="page-container">
      <BackButton />
      <div className="quotes-list">
        <h1 className="text-2xl font-bold">Tìm Kiếm Danh Ngôn</h1>
        <SearchBar quotes={initialQuotes} setFilteredQuotes={setFilteredQuotes} />
        <QuoteList quotes={filteredQuotes} showImage={true} />
      </div>
    </div>
  );
}
