import React from "react";
import { useParams, Link } from "react-router-dom";
import { quotes } from "../quotes";
import "../styles/tailwind.css";

export default function QuoteDetail() {
  const { id } = useParams();
  const quote = quotes.find((q) => q.id === parseInt(id));

  if (!quote) {
    return <h2 className="text-center text-xl">Không tìm thấy câu nói!</h2>;
  }

  return (
    <div className="container p-5">
      <img src={quote.image} alt="Hình minh họa" className="mb-4 img-fluid" />
      <h2 className="text-2xl font-bold">{quote.quote}</h2>
      <p><strong>Tác giả:</strong> {quote.author} ({quote.year})</p>
      <p><strong>Chủ đề:</strong> {quote.tag}</p>
      <Link to="/" className="text-blue-500">Quay lại Trang chủ</Link>
    </div>
  );
}
