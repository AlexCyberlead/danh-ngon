import React, { useState, useEffect } from "react";
import QuoteList from "../components/QuoteList";
import BackButton from "../components/BackButton";
import QuoteForm from "../components/QuoteForm";
import { quotes as initialQuotes } from "../quotes";
import "../styles/tailwind.css";

export default function ManageQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmEdit, setShowConfirmEdit] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    setQuotes(initialQuotes);
  }, []);

  const handleDelete = (id) => {
    setSelectedQuote(quotes.find((quote) => quote.id === id));
    setShowConfirmDelete(true);
    setShowConfirmEdit(false); // Reset edit state
  };

  const confirmDelete = () => {
    if (selectedQuote) {
      const updatedQuotes = quotes.filter((quote) => quote.id !== selectedQuote.id);
      setQuotes(updatedQuotes);
      setShowConfirmDelete(false);
    }
  };

  const handleEdit = (id) => {
    setSelectedQuote(quotes.find((quote) => quote.id === id));
    setShowConfirmEdit(true);
    setShowConfirmDelete(false); // Reset delete state
  };

  const confirmEdit = () => {
    if (selectedQuote) {
      const updatedQuotes = quotes.map((quote) =>
        quote.id === selectedQuote.id ? selectedQuote : quote
      );
      setQuotes(updatedQuotes);
      setShowConfirmEdit(false);
    }
  };

  return (
    <div className="page-container">
      <BackButton />
      <div className="quotes-list">
        <h1 className="text-2xl font-bold">Manage Quotes</h1>
        <QuoteList quotes={quotes} showActions={true} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
      <div className="form-container">
        {showConfirmDelete && selectedQuote && (
          <div className="confirm-dialog">
            <p>Bạn có chắc muốn xóa trích dẫn này không? ID: {selectedQuote.id}</p>
            <button onClick={confirmDelete} className="btn btn-primary">Yes</button>
            <button onClick={() => setShowConfirmDelete(false)} className="btn btn-secondary">No</button>
          </div>
        )}
        {showConfirmEdit && selectedQuote && (
          <QuoteForm
            quote={selectedQuote}
            onChange={setSelectedQuote}
            onSubmit={confirmEdit}
            onCancel={() => setShowConfirmEdit(false)}
          />
        )}
      </div>
    </div>
  );
}