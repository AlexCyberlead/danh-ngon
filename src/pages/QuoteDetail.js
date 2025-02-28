import React from "react";
import { useParams, Link } from "react-router-dom";
import { quotes } from "../quotes";

export default function QuoteDetail() {
  const { id } = useParams();
  const quote = quotes.find((q) => q.id === parseInt(id));

  if (!quote) {
    return <h2>Không tìm thấy câu nói!</h2>;
  }

  return (
    <div className="quote-detail">
      <img src={quote.image} alt="Hình minh họa" />
      <h2>{quote.quote}</h2>
      <p><strong>Tác giả:</strong> {quote.author} ({quote.year})</p>
      <p><strong>Chủ đề:</strong> {quote.tag}</p>
      <Link to="/">Quay lại Trang chủ</Link>
    </div>
  );
}
