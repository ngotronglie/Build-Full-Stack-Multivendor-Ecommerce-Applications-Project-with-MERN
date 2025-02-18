
import { useRef } from "react";

const App = () => {
  let APIData = useRef(null);
  let myPTag = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    APIData.current = await response.json();
  }

  const showData = () => {
    // show data from state
    myPTag.current.innerText = JSON.stringify(APIData.current);
  }
  return (
    <div>
      <p ref={myPTag}></p>
      <button onClick={fetchData} className="btn btn-success">call api</button>
      <button onClick={showData} className="btn btn-primary">show data</button>
    </div>
  )
}

export default App;
// vao network kiem tra status 200 ok
// phai fetch api trươc moi lay duoc data