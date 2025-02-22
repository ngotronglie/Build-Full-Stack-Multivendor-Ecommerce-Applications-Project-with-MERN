## `npm init --y`
Lệnh npm init -y được sử dụng trong Node.js để khởi tạo một tệp package.json một cách nhanh chóng mà không cần trả lời từng câu hỏi theo cách thủ công.

📌 Cụ thể:
npm init: Khởi tạo một dự án Node.js mới và tạo file package.json, nhưng sẽ yêu cầu nhập thông tin như tên dự án, phiên bản, mô tả, entry point, tác giả, license, v.v.
-y (hoặc --yes): Tự động chấp nhận tất cả giá trị mặc định mà không cần nhập thủ công.

## `npm  install express --save`


ẮN nghĩa:

npm install express: Cài đặt thư viện Express.js vào dự án.

``--save``: Lưu Express vào danh sách dependencies trong package.json.

Lưu ý:

--save: đã không cần thiết từ npm v5 trở lên vì npm tự động thêm package vào dependencies khi cài đặt.

Giờ đây, chỉ cần chạy:

`npm install express`

là đủ.

Kết quả:

Thư mục 'node_modules' sẽ chứa Express và các package liên quan.

package.json sẽ có thêm:

```
"dependencies": {
  "express": "^4.18.2"
}
```
package-lock.json sẽ cập nhật thông tin về phiên bản cài đặt.

