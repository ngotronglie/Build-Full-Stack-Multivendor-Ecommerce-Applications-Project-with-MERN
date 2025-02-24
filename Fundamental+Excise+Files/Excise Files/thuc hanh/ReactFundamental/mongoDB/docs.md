# MongoDB là gì?  

## 📌 Giới thiệu  
MongoDB là một **hệ quản trị cơ sở dữ liệu NoSQL** phổ biến, được thiết kế để lưu trữ dữ liệu dưới dạng **document (tài liệu JSON/BSON)** thay vì bảng và dòng như SQL.  

### 🔹 Đặc điểm chính của MongoDB:
- **NoSQL** → Không sử dụng bảng, mà lưu dữ liệu dưới dạng **document JSON**.  
- **Linh hoạt** → Không cần thiết lập cấu trúc cột cố định (schema).  
- **Mở rộng ngang (scalable)** → Hỗ trợ **sharding** và **replication** để xử lý lượng dữ liệu lớn.  
- **Truy vấn mạnh mẽ** → Hỗ trợ tìm kiếm theo nhiều điều kiện, lọc, sắp xếp, và phân trang dữ liệu.  
- **Tương thích tốt với Node.js** → Thích hợp để xây dựng ứng dụng web sử dụng JavaScript/TypeScript.  

---

## 📂 Ví dụ về dữ liệu trong MongoDB  
Dữ liệu trong MongoDB được lưu dưới dạng **document JSON/BSON**, ví dụ:  

```json
{
  "_id": "65d8f10a",
  "name": "Ngô Trọng Liêm",
  "age": 21,
  "email": "ngotrongliem2004@gmail.com",
  "skills": ["Node.js", "Laravel", "React"]
}
