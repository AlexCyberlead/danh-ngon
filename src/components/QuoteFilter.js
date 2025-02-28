import React, { useState } from "react";
import QuoteForm from "./QuoteForm";

export default function QuoteFilter({ quotes, setFilteredQuotes, allTags }) {
  const [filter, setFilter] = useState({
    author: "",
    tag: "",
    year: "",
    quote: ""
  });

  const handleFilter = () => {
    let filtered = quotes;
    if (filter.author) {
      filtered = filtered.filter((quote) => quote.author.toLowerCase().includes(filter.author.toLowerCase()));
    }
    if (filter.tag) {
      filtered = filtered.filter((quote) => quote.tag.toLowerCase().includes(filter.tag.toLowerCase()));
    }
    if (filter.year) {
      filtered = filtered.filter((quote) => quote.year.toLowerCase().includes(filter.year.toLowerCase()));
    }
    if (filter.quote) {
      filtered = filtered.filter((quote) => quote.quote.toLowerCase().includes(filter.quote.toLowerCase()));
    }
    setFilteredQuotes(filtered);
  };

  return (
    <div className="quote-filter">
      <QuoteForm
        quote={filter}
        onChange={setFilter}
        onSubmit={handleFilter}
        onCancel={() => setFilter({ author: "", tag: "", year: "", quote: "" })}
        isFilterForm={true}
        allTags={allTags} // Pass all tags to QuoteForm
      />
    </div>
  );
}