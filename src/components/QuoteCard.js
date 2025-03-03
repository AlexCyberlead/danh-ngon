import React from "react";
import { Link } from "react-router-dom";

export default function QuoteCard({ id, image, tag, quote, author, year, showImage = true, showActions = false, onDelete, onEdit }) {
  return (
    <div className="quote-card">
      {showImage && (
        <div className="quote-card-image">
          <img src={image} alt="Hình minh họa" className="quote-card-img" />
          <div className="quote-card-tag">{tag}</div>
        </div>
      )}
      <div className="quote-card-content">
        <div className="quote-card-year">{year}</div>
        <Link to={`/quote/${id}`} className="quote-card-link">
          <p className="quote-card-quote">{quote}</p>
          <p className="quote-card-author">~ {author}</p>
        </Link>
        {showActions && (
          <div className="quote-card-actions">
            <button onClick={() => onEdit(id)} className="quote-card-edit-button">Sửa</button>
            <button onClick={() => onDelete(id)} className="quote-card-delete-button">Xóa</button>
          </div>
        )}
      </div>
    </div>
  );
}

