# Hướng dẫn sử dụng `npx create-react-app`

## 1. Giới thiệu
Lệnh `npx create-react-app dashboard` được dùng để tạo một ứng dụng React mới với tên **dashboard** bằng công cụ **Create React App (CRA)**.

## 2. Giải thích lệnh
- **`npx`**: Công cụ chạy package mà không cần cài đặt toàn cục.
- **`create-react-app`**: CLI để thiết lập ứng dụng React với cấu hình sẵn.
- **`dashboard`**: Tên thư mục chứa dự án React mới.

## 3. Quá trình tạo dự án
Khi chạy lệnh này, hệ thống sẽ:
1. Tạo thư mục `dashboard`.
2. Cài đặt React và các thư viện cần thiết.
3. Cấu hình sẵn Webpack, Babel, ESLint.
4. Tạo cấu trúc thư mục như sau:

----
# Cài đặt các thư viện React cần thiết

## 1. Lệnh cài đặt
Sử dụng lệnh sau để cài đặt các thư viện quan trọng cho dự án React:
```sh
npm i apexcharts react-apexcharts axios jwt-decode moment react-hot-toast react-icons @reduxjs/toolkit react-redux react-spinners react-window redux-thunk socket.io-client
```
# Giải thích từng thư viện

## **Biểu đồ**
- **`apexcharts`**: Thư viện vẽ biểu đồ tương tác.
- **`react-apexcharts`**: Phiên bản tích hợp của `apexcharts` cho React.

## **Gọi API**
- **`axios`**: Thư viện giúp gửi request HTTP dễ dàng.

## **Xử lý JWT**
- **`jwt-decode`**: Dùng để giải mã JSON Web Token (JWT).

## **Xử lý thời gian**
- **`moment`**: Hỗ trợ xử lý ngày tháng và định dạng thời gian.

## **Hiển thị thông báo**
- **`react-hot-toast`**: Thư viện hiển thị thông báo đẹp mắt.

## **Biểu tượng**
- **`react-icons`**: Bộ sưu tập icon phong phú dành cho React.

## **Quản lý state với Redux**
- **`@reduxjs/toolkit`**: Công cụ hỗ trợ quản lý state Redux dễ dàng hơn.
- **`react-redux`**: Hỗ trợ kết nối Redux với React.
- **`redux-thunk`**: Middleware giúp xử lý logic bất đồng bộ trong Redux.

## **Hiệu ứng tải**
- **`react-spinners`**: Thư viện giúp tạo hiệu ứng loading chuyên nghiệp.

## **Tối ưu hóa danh sách lớn**
- **`react-window`**: Hỗ trợ hiển thị danh sách dữ liệu lớn mà không ảnh hưởng đến hiệu suất.

## **Giao tiếp real-time**
- **`socket.io-client`**: Thư viện giúp kết nối với WebSocket để truyền dữ liệu theo thời gian thực.
