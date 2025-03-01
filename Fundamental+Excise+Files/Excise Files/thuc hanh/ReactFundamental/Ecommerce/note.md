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

--- 
# Hướng Dẫn Cài Đặt Và Khởi Tạo Tailwind CSS

## 1. Cài đặt Tailwind CSS
[docs](https://v3.tailwindcss.com/docs/guides/create-react-app)

### Lệnh:
```sh
npm install -D tailwindcss
```
### Giải thích:
Lệnh này dùng để cài đặt Tailwind CSS vào dự án Node.js.

- `npm install`: Lệnh này dùng để cài đặt package từ npm.
- `-D` hoặc `--save-dev`: Cờ này cho biết package sẽ được thêm vào danh sách `devDependencies`, tức là chỉ dùng trong quá trình phát triển, không ảnh hưởng đến bản build cuối cùng.
- `tailwindcss`: Đây là package chứa thư viện Tailwind CSS.

Sau khi chạy lệnh này:
- Thư viện Tailwind CSS sẽ được thêm vào thư mục `node_modules`.
- Trong file `package.json`, Tailwind CSS sẽ được thêm vào phần `devDependencies`.

---

## 2. Khởi tạo tệp cấu hình Tailwind CSS
### Lệnh:
```sh
npx tailwindcss init
```
### Giải thích:
Lệnh này dùng để tạo tệp cấu hình mặc định cho Tailwind CSS.

- `npx`: Dùng để chạy một package npm mà không cần cài đặt toàn cục.
- `tailwindcss init`: Khởi tạo tệp `tailwind.config.js`, giúp tùy chỉnh Tailwind CSS.

Sau khi chạy lệnh này, một tệp `tailwind.config.js` sẽ được tạo trong thư mục gốc của dự án. Tệp này cho phép bạn mở rộng và tùy chỉnh các thiết lập mặc định của Tailwind, như:
- Thêm hoặc sửa đổi màu sắc, font chữ.
- Định nghĩa các breakpoints tùy chỉnh.
- Bật hoặc tắt các tính năng của Tailwind.

---

## Lưu Ý:
- Nếu chạy lệnh `npx tailwindcss init` bị lỗi **"tailwind is not recognized as an internal or external command"**, có thể do Tailwind chưa được cài đặt hoặc `node_modules/.bin` chưa được nhận diện.
- Để khắc phục, có thể thử cài đặt lại bằng lệnh:
  ```sh
  npm install -D tailwindcss
  ```
- Nếu vẫn bị lỗi, hãy kiểm tra xem `package.json` đã có `tailwindcss` chưa, nếu chưa thì cần cài đặt lại.



-----------------------


## `npm i react-router-dom`

react-router-dom là thư viện giúp bạn quản lý điều hướng (routing) trong ứng dụng React. Nó cho phép bạn:
✅ Tạo các trang (pages) và điều hướng giữa chúng mà không cần tải lại trang.
✅ Xử lý đường dẫn động (dynamic routing), ví dụ: /products/:id.
✅ Chuyển hướng (redirect) và bảo vệ trang (protected routes).


## Chia thanh 3 dasboard 
- user dashboard
- admin dashboard
- seller dashboard