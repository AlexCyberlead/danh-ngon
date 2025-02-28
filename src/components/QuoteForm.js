import React, { useState } from "react";

export default function QuoteForm({ quote, onChange, onSubmit, onCancel, isFilterForm = false, allTags = [] }) {
  const [newTag, setNewTag] = useState("");
  const [isEditingTag, setIsEditingTag] = useState(false);

  const handleTagChange = (e) => {
    const { value } = e.target;
    if (!isFilterForm && value === "new") {
      setNewTag("");
      setIsEditingTag(true);
    } else {
      onChange({ ...quote, tag: value });
      setIsEditingTag(false);
    }
  };

  const handleNewTagChange = (e) => {
    setNewTag(e.target.value);
    onChange({ ...quote, tag: e.target.value });
  };

  const handleTagDoubleClick = () => {
    if (!isFilterForm) {
      setIsEditingTag(true);
    }
  };

  return (
    <div className="quote-form">
      <div className="form-row">
        <label>Tag:</label>
        {isEditingTag ? (
          <input
            type="text"
            value={newTag}
            onChange={handleNewTagChange}
            placeholder="Enter new tag"
            onBlur={() => setIsEditingTag(false)}
          />
        ) : (
          <select value={quote.tag} onChange={handleTagChange} onDoubleClick={handleTagDoubleClick}>
            <option value="">Select Tag</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
            {!isFilterForm && <option value="new">Add New Tag</option>}
          </select>
        )}
      </div>
      <div className="form-row">
        <label>Author:</label>
        <input
          type="text"
          value={quote.author}
          onChange={(e) => onChange({ ...quote, author: e.target.value })}
        />
      </div>
      <div className="form-row">
        <label>Year:</label>
        <input
          type="text"
          value={quote.year}
          onChange={(e) => onChange({ ...quote, year: e.target.value })}
        />
      </div>
      <div className="form-row">
        <label>Quote:</label>
        <textarea
          value={quote.quote}
          onChange={(e) => onChange({ ...quote, quote: e.target.value })}
        />
      </div>
      {!isFilterForm && (
        <div className="form-row">
          <label>Image URL:</label>
          <input
            type="text"
            value={quote.image}
            onChange={(e) => onChange({ ...quote, image: e.target.value })}
          />
        </div>
      )}
      <button onClick={onSubmit}>{isFilterForm ? "Lọc" : "Lưu"}</button>
      <button onClick={onCancel}>Hủy</button>
    </div>
  );
}
