import { useEffect, useState } from 'react';

const App = () => {
  let [data, setData] = useState({}); // ✅ Nên dùng {} vì dữ liệu API trả về là object

  useEffect(() => {
    // ✅ Định nghĩa một function async bên trong useEffect
    const fetchData = async () => {
      try {
        let response = await fetch('https://dummyjson.com/products/1');
        let json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData(); // ✅ Gọi hàm async
  }, []); // ✅ Dependency array rỗng để chỉ chạy một lần khi component mount

  return (
    <div>
      {JSON.stringify(data, null, 2)} {/* ✅ Hiển thị JSON rõ ràng hơn */}
    </div>
  );
};

export default App;
