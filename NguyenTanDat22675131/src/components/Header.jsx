import React from "react";

const Header = ({ searchTerm, setSearchTerm, setIsModalOpen, setGenreFilter }) => {
  const genres = [
    "Văn học",
    "Khoa học",
    "Công nghệ",
    "Tâm lý",
    "Thiếu nhi",
    "Lịch sử",
    "Kỹ năng sống",
    "Triết lý",
    "Phiêu lưu",
    "Giả tưởng",
    "Hiện thực",
    "Tội phạm",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <h1 className="text-3xl font-bold text-blue-700">📚 Quản lý sách</h1>

      <input
        type="text"
        placeholder="Tìm kiếm sách theo tên..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3 shadow-sm"
      />

      {/* Dropdown thể loại */}
      <select
        onChange={(e) => setGenreFilter(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 shadow-sm"
      >
        <option value="">Chọn thể loại</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Thêm sách mới
      </button>
    </div>
  );
};

export default Header;
