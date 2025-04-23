import React, { useState } from "react";

const BookFormModal = ({ isOpen, onClose, onAddBook }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.author || !form.genre || !form.year) return;

    onAddBook({
      id: Date.now(),
      ...form,
      year: parseInt(form.year, 10),
    });
    setForm({ title: "", author: "", genre: "", year: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000063] bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">📘 Thêm sách mới</h2>

        <div className="space-y-3">
          <input
            name="title"
            type="text"
            placeholder="Tên sách"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="author"
            type="text"
            placeholder="Tác giả"
            value={form.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="genre"
            type="text"
            placeholder="Thể loại"
            value={form.genre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="year"
            type="number"
            placeholder="Năm xuất bản"
            value={form.year}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
            Đóng
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Thêm sách
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFormModal;
