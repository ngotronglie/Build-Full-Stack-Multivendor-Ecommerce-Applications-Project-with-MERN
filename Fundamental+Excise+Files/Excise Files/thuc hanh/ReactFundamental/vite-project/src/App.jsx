import { useRef } from 'react';

const App = () => {

  // let myHeadline = document.getElementById('myHeadline');
  let myHeadline = useRef()


  const change = () => {
    myHeadline.current.innerHTML = 'xin chao, toi dang su dung useRef()';
    // myHeadline.current.innerHTML = '<ul><li> A</li><li>B</li></ul >'
  }

  return (
    <div>
      {/* <h1 id="myHeadline"></h1> */}
      <h1 ref={myHeadline}></h1>
      {/* <h1 ref={(h1) => myHeadline = h1}></h1> bug khong fix dc */}
      <button onClick={change}>Change! Click me</button>
    </div>
  );
}

export default App;

