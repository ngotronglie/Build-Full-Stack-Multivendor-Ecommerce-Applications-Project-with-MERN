import { useState } from 'react';

const App = () => {

  const [myObj, setMyObject] = useState(
    {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    }
  );
  const change = () => {
    setMyObject(
      {
        key1: "new value1",
        key2: "new value2",
        key3: "new value3",
      }
    );
  };
  const change2 = () => {
    setMyObject(
      prevOBJ => ({
        ...prevOBJ,
        key1: "hi, how are you",
        key2: "I'm fine",
        key3: "I'm fine too",
      })
    )
  }


  return (
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <button type="button" onClick={change} className='btn btn-primary'>Click</button>
      <button type="button" onClick={change2} className='btn btn-primary'>change 2</button>
    </div>
  )
}

export default App;
// vao network kiem tra status 200 ok
// phai fetch api trươc moi lay duoc data