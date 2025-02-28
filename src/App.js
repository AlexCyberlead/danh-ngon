import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import QuoteList from "./pages/QuoteListPage";
import QuoteSearch from "./pages/QuoteSearchPage";
import QuoteFilter from "./pages/QuoteFilterPage";
import AddQuote from "./pages/AddQuotePage";
import QuoteDetail from "./pages/QuoteDetail";
import ManageQuotes from "./pages/ManageQuotes";
import { quotes as initialQuotes } from "./quotes";

export default function App() {
  const [quotes, setQuotes] = useState(initialQuotes);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<QuoteList quotes={quotes} />} />
          <Route path="/search" element={<QuoteSearch quotes={quotes} />} />
          <Route path="/filter" element={<QuoteFilter quotes={quotes} />} />
          <Route path="/add" element={<AddQuote setQuotes={setQuotes} />} />
          <Route path="/edit" element={<ManageQuotes quotes={quotes} setQuotes={setQuotes} />} />
          <Route path="/delete" element={<ManageQuotes quotes={quotes} setQuotes={setQuotes} />} />
          <Route path="/quote/:id" element={<QuoteDetail />} />
          <Route path="/manage-quotes" element={<ManageQuotes quotes={quotes} setQuotes={setQuotes} />} />
        </Routes>
      </div>
    </Router>
  );
}