import React from "react";
import { Link } from "react-router-dom";
import "../styles/QuoteCard.css";

function QuoteCard({ id, image, tag, quote, author, year, showImage = true, showActions = false, onDelete, onEdit }) {
  return (
    <div className="quote-card">
      {showImage && (
        <div className="quote-image">
          <img src={image} alt="Hình minh họa" />
          <div className="quote-tag">{tag}</div>
        </div>
      )}
      <div className="quote-content">
        <div className="quote-year">{year}</div>
        <Link to={`/quote/${id}`} className="detail-link" style={{ textDecoration: "none", color: "inherit" }}>
          <p className="quote-text">{quote}</p>
          <p className="quote-author">~ {author}</p>
        </Link>
        {showActions && (
          <>
            <button onClick={() => onEdit(id)}>Sửa</button>
            <button onClick={() => onDelete(id)}>Xóa</button>
          </>
        )}
      </div>
    </div>
  );
}

export default QuoteCard;