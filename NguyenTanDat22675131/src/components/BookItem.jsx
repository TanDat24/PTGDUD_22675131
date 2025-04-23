import React from "react";

const BookItem = ({ book, deleteBook }) => {
  return (
    <div
      key={book.id}
      className="grid grid-cols-3 gap-4 items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:bg-gray-50"
    >
      <div>
        <p className="font-semibold">{book.title}</p>
        <p className="text-sm text-gray-500">Tác giả: {book.author}</p>
      </div>

      <div>
        <p className="text-sm">Thể loại: {book.genre}</p>
        <p className="text-sm">Năm: {book.year}</p>
      </div>

      <div className="text-right">
        <button
          onClick={() => deleteBook(book.id)}
          className="bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded"
        >
          Xoá
        </button>
      </div>
    </div>
  );
};

export default BookItem;
