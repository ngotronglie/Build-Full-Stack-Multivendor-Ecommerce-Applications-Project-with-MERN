import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const changeNumber = () => {
    setNumber(number - 1);
  }
  return (
    <div>
      <h1>Number: {number}</h1>

      <button onClick={() => setNumber(number + 1)} className="btn btn-primary">function change + </button> 
      <button onClick={changeNumber} className="btn btn-primary">function change -</button>
    </div>
  )
}

export default App;
// vao network kiem tra status 200 ok
// phai fetch api trươc moi lay duoc data