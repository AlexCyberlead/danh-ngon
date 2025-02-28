import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Quotes Website</h1>
    </div>
  );
}

//không hiện hình ảnh
//trang xoá sửa làm chung, click vào đến cùng một trang, mỗi item có nút xoá và sửa
//tạo thêm xác nhận bạn có muốn xoá "id" này không -yes no - xoá trong mảng
//cập nhập cũng hỏi xác nhận, nếu có link sang trang cấp nhật - không sửa id - có hiện thông tin cũ để so sán
//form thêm lấy từ cập nhật
//tìm kiếm , nhập là hiển thị ds
// lọc gắn với hiển thị ds