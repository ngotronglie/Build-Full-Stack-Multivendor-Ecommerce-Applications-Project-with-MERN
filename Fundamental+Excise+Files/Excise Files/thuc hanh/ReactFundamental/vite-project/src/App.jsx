import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Khi component được mount, đoạn code trong useEffect này sẽ chạy một lần
    console.log("hello useEffect");
  }, []); // Mảng dependency rỗng đảm bảo effect chỉ chạy một lần khi component mount

  return (
    <div>
      {/* Component không có nội dung hiển thị, chỉ có useEffect chạy */}
    </div>
  );
};

export default App;
