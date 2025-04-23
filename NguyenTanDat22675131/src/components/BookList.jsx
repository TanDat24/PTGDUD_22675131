import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📚 Danh sách sách</h2>
      {books.length === 0 ? (
        <p className="text-gray-500">Không có sách nào.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {books.map((book) => (
            <BookItem key={book.id} book={book} deleteBook={deleteBook} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
