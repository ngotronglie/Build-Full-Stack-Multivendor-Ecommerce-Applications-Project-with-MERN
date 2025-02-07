import { useRef } from 'react';

const App = () => {

  // let myHeadline = document.getElementById('myHeadline');
  let myHeadline = useRef()
  let myImage = useRef()


  const change = () => {
    myHeadline.current.innerHTML = 'xin chao, toi dang su dung useRef()';
    // myHeadline.current.innerHTML = '<ul><li> A</li><li>B</li></ul >'
  }

  const changeImage = () => {
    myImage.current.src = 'https://placehold.co/600x400/orange/white'
    myImage.current.setAttribute('width', '200px')
    myImage.current.setAttribute('height', '200px')
  }

  return (
    <div>
      {/* <h1 id="myHeadline"></h1> */}
      <h1 ref={myHeadline}></h1>
      {/* <h1 ref={(h1) => myHeadline = h1}></h1> bug khong fix dc */}

      <img ref={myImage} src="https://placehold.co/600x400" alt="image for https://placehold.co/" />
      <button onClick={change}>Change! Click me</button>
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default App;

