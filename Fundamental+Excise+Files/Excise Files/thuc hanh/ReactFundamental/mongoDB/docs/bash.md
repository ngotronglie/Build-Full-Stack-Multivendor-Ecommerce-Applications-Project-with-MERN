
# 📌 Giải thích lệnh `npm init -y`
## 1️⃣ `npm init -y`
Lệnh này được sử dụng để khởi tạo một **dự án Node.js** bằng cách tạo file `package.json` một cách tự động.  

### 🔹 Cách hoạt động:
- `npm init` → Tạo file `package.json` để quản lý thông tin dự án.  
- `-y` → Bỏ qua các câu hỏi mặc định và sử dụng các giá trị mặc định.

### 📂 Ví dụ:
Sau khi chạy lệnh này, một file `package.json` sẽ được tạo với nội dung mặc định như sau:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
----
# 📌 Hướng dẫn sử dụng `npm i mongoose`

## 1️⃣ Giới thiệu về `npm i mongoose`
Lệnh `npm i mongoose` được sử dụng để **cài đặt thư viện Mongoose** vào dự án Node.js.  

### 🔹 Mongoose là gì?
Mongoose là một thư viện giúp kết nối và làm việc với **MongoDB** trong Node.js.  
Nó cung cấp các tính năng quan trọng như:  
✅ Định nghĩa Schema (Cấu trúc dữ liệu).  
✅ Tạo Model để thao tác với MongoDB.  
✅ Hỗ trợ Validation (Kiểm tra dữ liệu).  
✅ Hỗ trợ Query Builder (Truy vấn dữ liệu dễ dàng hơn).  
✅ Middleware giúp xử lý dữ liệu trước/sau khi lưu vào database.  

---

## 2️⃣ Cách cài đặt Mongoose
Mở terminal hoặc command line trong thư mục dự án và chạy:

```sh
npm i mongoose
```