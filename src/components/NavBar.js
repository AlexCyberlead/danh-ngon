import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="nav-list navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link to="/" className="nav-link">Trang chủ</Link></li>
          <li className="nav-item"><Link to="/quotes" className="nav-link">Danh sách Trích Dẫn</Link></li>
          <li className="nav-item"><Link to="/search" className="nav-link">Tìm kiếm</Link></li>
          <li className="nav-item"><Link to="/filter" className="nav-link">Lọc theo chủ đề</Link></li>
          <li className="nav-item"><Link to="/add" className="nav-link">Thêm Trích Dẫn</Link></li>
          <li className="nav-item"><Link to="/edit" className="nav-link">Sửa Trích Dẫn</Link></li>
          <li className="nav-item"><Link to="/delete" className="nav-link">Xóa Trích Dẫn</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
