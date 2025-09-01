import React from 'react';

const BookCard = ({ title, author, isRead }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>By: {author}</p>
      <p>Status: {isRead ? "Read" : "Not Read"}</p>
    </div>
  );
};

export default BookCard;
