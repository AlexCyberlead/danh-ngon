import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Trang chủ</Link></li>
        <li><Link to="/quotes" className="nav-link">Danh sách Trích Dẫn</Link></li>
        <li><Link to="/search" className="nav-link">Tìm kiếm</Link></li>
        <li><Link to="/filter" className="nav-link">Lọc theo chủ đề</Link></li>
        <li><Link to="/add" className="nav-link">Thêm Trích Dẫn</Link></li>
        <li><Link to="/edit" className="nav-link">Sửa Trích Dẫn</Link></li>
        <li><Link to="/delete" className="nav-link">Xóa Trích Dẫn</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
