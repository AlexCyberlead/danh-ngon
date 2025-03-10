import React, { useState } from "react";
import QuoteList from "../components/QuoteList";
import QuoteForm from "../components/QuoteForm";
import BackButton from "../components/BackButton";
import { quotes as initialQuotes } from "../quotes";
import "../styles/tailwind.css";

export default function AddQuotePage() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [newQuote, setNewQuote] = useState({
    id: quotes.length + 1,
    tag: "",
    author: "",
    year: "",
    quote: "",
    image: ""
  });

  const addQuote = () => {
    setQuotes([...quotes, newQuote]);
    setNewQuote({
      id: quotes.length + 2,
      tag: "",
      author: "",
      year: "",
      quote: "",
      image: ""
    });
  };

  const allTags = [...new Set(quotes.map((quote) => quote.tag))];

  return (
    <div className="container">
      <BackButton />
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-2xl font-bold">Thêm Danh Ngôn Mới</h1>
          <QuoteList quotes={quotes} showImage={true} />
        </div>
        <div className="col-md-4">
          <QuoteForm
            quote={newQuote}
            onChange={setNewQuote}
            onSubmit={addQuote}
            onCancel={() => setNewQuote({
              id: quotes.length + 1,
              tag: "",
              author: "",
              year: "",
              quote: "",
              image: ""
            })}
            allTags={allTags} // Pass all tags to QuoteForm
          />
        </div>
      </div>
    </div>
  );
}