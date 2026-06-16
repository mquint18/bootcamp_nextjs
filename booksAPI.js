const express = require("express");
const app = express();
const PORT = 3000;

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/book/:id", (req, res) => {
  const bookID = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookID);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
