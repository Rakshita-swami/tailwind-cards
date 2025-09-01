import React, { useState, useEffect } from "react";
import BookCard from "./components/BookCard";
import "./App.css";  

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      isRead,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setIsRead(false);
  };

  return (
    <div className="App">
      <h1>📚 BookBuddy</h1>

      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={isRead}
            onChange={(e) => setIsRead(e.target.checked)}
          />
          Mark as read
        </label>

        <button type="submit">Add Book</button>
      </form>

      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            isRead={book.isRead}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
