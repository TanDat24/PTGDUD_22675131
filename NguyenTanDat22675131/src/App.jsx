import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import BookFormModal from "./components/BookFormModal";
import Header from "./components/Header";
const sampleBooks = [
  { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", genre: "Thiếu nhi", year: 1941 },
  { id: 2, title: "Tuổi Thơ Dữ Dội", author: "Phùng Quán", genre: "Lịch sử", year: 1988 },
  { id: 3, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Kỹ năng sống", year: 1936 },
  { id: 4, title: "Nhà Giả Kim", author: "Paulo Coelho", genre: "Triết lý", year: 1988 },
  { id: 5, title: "Không Gia Đình", author: "Hector Malot", genre: "Phiêu lưu", year: 1878 },
  { id: 6, title: "Harry Potter và Hòn Đá Phù Thủy", author: "J.K. Rowling", genre: "Giả tưởng", year: 1997 },
  { id: 7, title: "Chí Phèo", author: "Nam Cao", genre: "Hiện thực", year: 1941 },
  { id: 8, title: "Lão Hạc", author: "Nam Cao", genre: "Hiện thực", year: 1943 },
  { id: 9, title: "Bố Già", author: "Mario Puzo", genre: "Tội phạm", year: 1969 },
  { id: 10, title: "Sapiens: Lược Sử Loài Người", author: "Yuval Noah Harari", genre: "Lịch sử", year: 2011 },
];
// Hàm lấy danh sách sách từ localStorage
const getBooksFromLocalStorage = () => {
  const storedBooks = localStorage.getItem("books");
  return storedBooks ? JSON.parse(storedBooks) : [];
};

// Hàm lưu danh sách sách vào localStorage
const saveBooksToLocalStorage = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};

function App() {
  // Lấy danh sách sách từ localStorage khi ứng dụng khởi tạo
  const [books, setBooks] = useState(getBooksFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cập nhật danh sách sách trong localStorage khi danh sách thay đổi
  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Lọc sách theo từ khóa tìm kiếm và thể loại
  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((book) =>
      genreFilter ? book.genre === genreFilter : true
    );

  return (
    <div className="container mx-auto p-4">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIsModalOpen={setIsModalOpen}
        setGenreFilter={setGenreFilter}
      />
      <div className="text-lg font-semibold text-gray-700 mb-4">
        <p>Tổng số sách: {filteredBooks.length}</p>
      </div>
      <BookList books={filteredBooks} deleteBook={deleteBook} />

      <BookFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={addBook}
      />
    </div>
  );
}

export default App;
