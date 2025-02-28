import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/quotes">Danh sách Trích Dẫn</Link></li>
        <li><Link to="/search">Tìm kiếm</Link></li>
        <li><Link to="/filter">Lọc theo chủ đề</Link></li>
        <li><Link to="/add">Thêm Trích Dẫn</Link></li>
        <li><Link to="/edit">Sửa Trích Dẫn</Link></li>
        <li><Link to="/delete">Xóa Trích Dẫn</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
